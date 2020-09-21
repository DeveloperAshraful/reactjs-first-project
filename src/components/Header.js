import React, {Component}  from 'react';
import logo from '../assets/images/logo.png';
import { Container,Navbar,Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Header extends Component{
    render(){
        return(
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/service">Services</Link>
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/team">Team</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>          
        )           
    }
}
export default Header;