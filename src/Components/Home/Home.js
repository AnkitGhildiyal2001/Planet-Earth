import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import { Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="bod_home">

      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_conta_h">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_conta_h">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_conta_h">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_conta_h">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_conta_h">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <br /><br />

      <div className="Quote">
        "The Earth is what we<br /> all have in common."
        <br /><br />
      </div>

      <div className="EARTH">
        <Link to='/Continents'><img className="EARTH2 EARTH" src="https://cdn.wallpapersafari.com/7/92/uxWbLI.gif" alt="not found"></img></Link>
      </div>

    </div>
  );
};

export default Home;