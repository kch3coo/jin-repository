import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./TopNav.css";
import logo from "../../assets/img/black_logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
export default class TopNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-light bg-transparent" id="topNav" expand="lg">
        <Navbar.Brand className="name" href="#home">
          <img
            src={logo}
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className="ml-2 mt-2">Lu Ming Jin</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="float-right" id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <NavDropdown className="nav-item nav-link" title="About me" id="basic-nav-dropdown" style={{marginRight: 0}}>
              <NavDropdown.Item >
                <Link
                
                  activeClass="active"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Intro
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href={resume} download>
                DownloadResume
              </NavDropdown.Item>
            </NavDropdown> */}
            <Link
              className="nav-item nav-link"
              activeClass=""
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Intro
            </Link>

            <Link
              className="nav-item nav-link"
              activeClass=""
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Projects
            </Link>

            <Link
              className="nav-item nav-link"
              activeClass=""
              to="designs"
              spy={true}
              smooth={true}
              offset={0}
              duration={900}
              onSetActive={this.handleSetActive}
            >
              Designs
            </Link>

            <Link
              className="nav-item nav-link"
              activeClass=""
              to="info"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Contact Info
            </Link>

            <Nav.Link
              className="nav-item nav-link"
              href={"/downloads/resume.pdf"}
              download
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">About me</Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">Projects</Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="designs"
              spy={true}
              smooth={true}
              offset={0}
              duration={900}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">Designs</Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">Contact Info</Nav.Link>
            </Link>
          </Nav> */}
      </Navbar>
    );
  }
}
