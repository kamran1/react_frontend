import logo from './logo.svg';
import './App.css';

import EmployeeList from './components/EmployeeList';


import { Container } from "reactstrap";


function App() {
  return (
    <div className="App">
      <Container>
     
   

      <EmployeeList />
      
      </Container>
    </div>
  );
}

export default App;
