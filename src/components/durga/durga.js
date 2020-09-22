import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React,{Component} from 'react';
import Route from 'react-router-dom/Route';
import {BrowserRouter as Router } from 'react-router-dom';
// import {  MDBIcon } from "mdbreact";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const User = () =>{
    return(
    <h1> Welcome User:Durga</h1>
     
    )
  }
  const About = () =>{
    return(<h1> Welcome To About Page</h1>)
  }
export class Sidebar extends Component {
    render() {
        return (
          <Router>
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
React JSX
React Router v4 with React v16
          </Router>
        );
      }
    }