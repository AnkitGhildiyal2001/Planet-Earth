import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AboutUs.css';
import { Navbar, Nav } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="bod_AboutUs">

      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_conta_AboutUs">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_conta_AboutUs">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_conta_AboutUs">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_conta_AboutUs">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_conta_AboutUs">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div class="gen" style={{ textAlign: "left" }}>
        &nbsp; Developed by:
      </div>

      <div class="gen2" style={{ textAlign: "left", marginLeft: '40px' }}>
        <span>
          Ankit Ghildiyal
        </span>
        <br />

        <img className="Pics" src="https://avatars.githubusercontent.com/u/85223829?s=400&u=a590bb5033ab7196f2c01947006a6bcbfcb8e142&v=4" alt="..." width="180px" />


        <div class="text_after_pic">
          I am proficient in C language, C++, java and Python and i want to be a full stack developer.

        </div>

        <div class="text_after_pic2">
          &nbsp;EDUCATION:

        </div>

        <div class="text_after_pic">
          &rarr;INDIAN CERTIFICATE OF SECONDARY EDUCATION (St. Jude's School) 2016.
          <br />
          &rarr;INDIAN SCHOOL CERTIFICATE (St. Jude's School) 2018.
          <br />
          &rarr;BACHELOR OF TECHNOLOGY (Indian Instiutute Of Technology, Tirupati) 2019-2023.
          <br />
        </div>


        <br />
        <br />


        <span>
          Aman Kumar
        </span>
        <br />

        <img className="Pics" src="https://avatars.githubusercontent.com/u/79087445?v=4" alt="..." width="180px" />


        <div class="text_after_pic">
          I am greately inclined towards Machine learning and Artificial Intelligence. I am proficient in
          C language, C++ and Python.
        </div>

        <div class="text_after_pic2">
          &nbsp;EDUCATION:

        </div>
        <div class="text_after_pic">
          &rarr;CENTRAL BOARD OF SECONDARY EDUCATION (Doon International School) 2016.
          <br />
          &rarr;CENTRAL BOARD OF SECONDARY EDUCATION (Doon International School) 2018.
          <br />
          &rarr;BACHELOR OF TECHNOLOGY (Indian Instiutute Of Technology, Tirupati) 2019-2023.
          <br />
        </div>

      </div>

      <br /><br /><br />

    </div >
  );
};

export default AboutUs;