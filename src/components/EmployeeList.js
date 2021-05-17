import React, { Component } from 'react'

import { Table, Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap';
import AddEmployee from './AddEmployee';
import isEmpty from '../isEmpty'

import {
  fetchEmployees,
  fetchDepartments,
  createEmployees

} from "../api/employee";


export default class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pagesCount: 0,
      pageSize: 3,
      employeeList: [],
      departmentList:[],
      departmentEmployees:[],
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      salary: 0,
      manager: "",
      department: "",
      hireDate: ""



    }
  }
  componentDidMount() {
    this.getEmployees(this.state.currentPage, this.state.pageSize);
    this.getDepartments();    
  }

  handleDepartmentChange = (e) => {
    console.log(e);
    this.setState({
      department: isEmpty(e) ? " " : e,
      departmentEmployees: isEmpty(e) ? " " : e.employees

    });

  };
  
  handleManagerChange = (e) => {
    console.log(e);
    this.setState({
      manager: isEmpty(e) ? " " : e,
    });
  };
  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getEmployees = (currentPage, pageSize) => {
    const query = { page: currentPage, pagesize: pageSize };
    fetchEmployees(query)
      .then((response) => {
        console.log(response.data.data)
        this.setState({
          employeeList: response.data.data
        })
        this.setState({ pagesCount: response.data.count })
      })
      .catch((error) => { });
  }

  getDepartments = () => {
    fetchDepartments()
      .then((response) => {
        this.setState({
          departmentList: response.data
        })

      })
      .catch((error) => { });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      salary: this.state.salary,
      manager: (this.state.manager)?this.state.manager:null,
      department: (this.state.department)?this.state.department:null,
      hireDate: this.state.hireDate
    };

    createEmployees(data)
      .then((response) => {

        this.setState({employeeList: [response.data, ...this.state.employeeList]})
        this.handleReset();
         
      })
      .catch((error) => { });

  };


  handleReset = () => {

    this.setState( {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      salary: 0,
      manager: "",
      department: "",
      hireDate: ""
    });

  }

  handleClick(e, index) {
    e.preventDefault();
    this.setState({
      currentPage: index
    });
    this.getEmployees(index, this.state.pageSize)
  }
  render() {
    return (
      <div>

        <Row>

          <Col>
          <h4>------------------------------------------------</h4>
            <h4>Employee Management System</h4>
            <h4>------------------------------------------------</h4>
          </Col>
        </Row>
        <Row>
          <AddEmployee
            onChangeInput={this.onChangeInput}
            handleFormSubmit={this.handleFormSubmit} 
            handleDepartmentChange={this.handleDepartmentChange}
            departmentList={this.state.departmentList}
            departmentEmployees={this.state.departmentEmployees}
            handleMangerChange={this.handleManagerChange}
            
            firstName={this.state.firstName}
            lastName= {this.state.lastName}
            email= {this.state.email}
            phoneNumber={this.state.phoneNumber}
            salary={this.state.salary}
            manager={this.state.manager}
            department={this.state.department}
            hireDate={this.state.hireDate}
            
            />

        </Row>
        <Row>
          <Table striped>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Hire Date</th>
                <th>Salary</th>
                <th>Manager Id</th>
                <th>Department Id</th>
              </tr>
            </thead>
            <tbody>

              {this.state.employeeList.map((employee) => (
                <tr >
                  <th scope="row">{employee.employeeId}</th>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.hireDate}</td>
                  <td>{employee.salary}</td>
                  <td>{(employee.manager)?employee.manager.firstName:"-"}</td>
                  <td>{(employee.department)?employee.department.departmentName:"-"}</td>
                </tr>
              ))}



            </tbody>
          </Table>
        </Row>

        <Row>

          <Col style={{ alignSelf: "center" }}>

            <Pagination>
              <PaginationItem disabled={this.state.currentPage <= 0}>
                <PaginationLink
                  onClick={e => this.handleClick(e, this.state.currentPage - 1)}
                  previous
                  href="#"
                />
              </PaginationItem>
              {[...Array(this.state.pagesCount)].map((page, i) =>
                <PaginationItem active={i === this.state.currentPage} key={i}>
                  <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem disabled={this.state.currentPage >= this.pagesCount - 1}>

                <PaginationLink
                  onClick={e => this.handleClick(e, this.state.currentPage + 1)}
                  next
                  href="#"
                />

              </PaginationItem>

            </Pagination>
          </Col>
        </Row>

      </div>
    )
  }
}
