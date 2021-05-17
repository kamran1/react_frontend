import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText, Row, Col } from "reactstrap";

import Select from "react-select";



class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

  render() {
    const error = this.props.errors;
    return (
      <div>
        <div>
          <Form onSubmit={this.props.handleFormSubmit}>
            <Row>


              <Col>
                <FormGroup>
                  <Label for="firstName" style={{ fontWeight: "bold" }}>
                    First Name
                    </Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={this.props.firstName}
                    onChange={this.props.onChangeInput}
                    id="firstName"

                    placeholder="e.g Kamran"
                    
                  />
                </FormGroup>
              </Col>ٖ
              <Col>
                <FormGroup>
                  <Label for="lastName" style={{ fontWeight: "bold" }}>
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={this.props.lastName}
                    onChange={this.props.onChangeInput}
                    id="lastName"

                    placeholder="e.g Majeed"

                  />
                  {/* <p className="error">{error.grpcode}</p> */}
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="email" style={{ fontWeight: "bold" }}>
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.props.email}
                    onChange={this.props.onChangeInput}
                    id="email"

                    placeholder="e.g kamran.student@gmail.com"
                
                  />

                </FormGroup>

              </Col>


              <Col>
                <FormGroup>
                  <Label for="phoneNumber" style={{ fontWeight: "bold" }}>
                    Phone Number
                  </Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={this.props.phoneNumber}
                    onChange={this.props.onChangeInput}

                  />
                  {/* <p className="error">{error.descr}</p> */}
                </FormGroup>
              </Col>
            </Row>
            <Row>


              <Col>
                <FormGroup>
                  <Label for="salary" style={{ fontWeight: "bold" }}>
                    Salary
                  </Label>
                  <Input
                    type="number"
                    name="salary"
                    value={this.props.salary}
                    onChange={this.props.onChangeInput}
                    id="salary"
                  />

                </FormGroup>

              </Col>


          

              <Col>
                <FormGroup>
                  <Label for="hireDate" style={{ fontWeight: "bold" }}>
                    Hire Date
                  </Label>
                  <Input
                    type="date"
                    name="hireDate"
                    id="hireDate"
                    placeholder="date placeholder"
                    onChange={this.props.onChangeInput}
                    value={this.props.hireDate}
                  />
                  {/* <p className="error">{error.descr}</p> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="department" style={{ fontWeight: "bold" }}>
                    Department
                  </Label>

                  <Select
                    onChange={this.props.handleDepartmentChange}
                    getOptionLabel={(option) => option.departmentName}
                    getOptionValue={(option) => option.departmentId}
                    options={this.props.departmentList}
                    value={this.props.department}
                  />
               

               
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="manager" style={{ fontWeight: "bold" }}>
                    Manager
                  </Label>

                   <Select
                    onChange={this.props.handleMangerChange}
                    getOptionLabel={(option) => option.firstName}
                    getOptionValue={(option) => option.employeeId}
                    options={this.props.departmentEmployees}
                    value={this.props.manager}
                 
                  /> 
              
              
                </FormGroup>
              </Col>
            </Row>
            <br/>
            <Row>
             
              <Col>
              
                <FormGroup>
                  <Button type="submit" color="success"
                    style={{ width: "20%" }}>
                    Add
                </Button>
                </FormGroup>
              </Col>

            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
export default AddEmployee;
