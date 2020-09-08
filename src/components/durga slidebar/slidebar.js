import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React,{Component} from 'react';
import Route from 'react-router-dom/Route';
import {BrowserRouter as Router } from 'react-router-dom';
// import {  MDBIcon } from "mdbreact";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {User} from '../user/user'
// const User = () =>{
//     return(
//     <h1> Welcome User:Durga</h1>
     
//     )
//   }
  const About = () =>{
    return(<h1> Welcome To About Page</h1>)
  }
export class Sidebar extends Component {
    render(){
  return (
 
<Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="user">
                    <NavItem eventKey="user">
                        <NavIcon>
                        {/* <FontAwesomeIcon icon="coffee" rotation={90} />                   */}
              </NavIcon>
                        <NavText>
                            curdoperations
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="about">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} /> */}
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/user" exact component={props => <User />} />
                {/* <Route path="/user" component={props => <User />} /> */}
                <Route path="/about" component={props => <About />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
  );
            }
        }