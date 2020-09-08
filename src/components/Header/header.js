import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from 'react-router-dom';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import Route from 'react-router-dom/Route';
import {Home} from '../Home/home'
import {About} from '../About/about'
import Buttons from '../Buttons/button';
import {Forms} from '../Forms/forms';
import {Images} from '../Images/image'
import { Sidebar } from '../durga slidebar/slidebar';

export class Header extends Component {
    render(){
  return (
    <Router>
    <div className="Navbar"> 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> 
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
     <NavDropdown title="Components" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/buttons">Buttons</NavDropdown.Item>
        <NavDropdown.Item href="/forms">Forms</NavDropdown.Item>
        <NavDropdown.Item href="/image">Images</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
   <Nav>
   <Nav.Link href="/sidebar">Durga</Nav.Link>
   <Nav.Link href="#purna">Purna</Nav.Link>
   <Nav.Link href="#sriya">Sriya</Nav.Link>
    </Nav>
   </Navbar.Collapse>
 </Navbar>
 
              <Route path="/home"  component={Home}/>
              <Route path="/about"  component={About}/>
              <Route path="/buttons"  component={Buttons}/>
              <Route path="/forms"  component={Forms}/>
              <Route path="/image"  component={Images}/>
              <Route path="/sidebar"  component={Sidebar}/>          
    
    </div>
  </Router>

    );
  
}
}
