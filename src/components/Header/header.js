import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import Footer from '../Footer/footer';


export class Header extends Component {
    render(){
  return (
    <div className="Navbar"> 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="https://react-bootstrap.github.io/about/">About</Nav.Link>
      <Nav.Link href="https://react-bootstrap.github.io/getting-started/introduction">Introduction</Nav.Link>
      <NavDropdown title="Components" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://react-bootstrap.github.io/components/alerts/">Alerts</NavDropdown.Item>
        <NavDropdown.Item href="https://react-bootstrap.github.io/components/buttons/">Buttons</NavDropdown.Item>
        
        <NavDropdown.Item href="https://react-bootstrap.github.io/components/forms/">Forms</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar> 
     <h1>React Boostrap</h1>
    <Footer/>
    </div>
  );
}
}

