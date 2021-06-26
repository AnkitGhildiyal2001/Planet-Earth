import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Continents.css';
import { Navbar, Nav } from 'react-bootstrap';
import Afr from "./Africa.jpg";
import Ant from "./Antartica.jpg";
import Aus from "./Australia.jpg";
import Asi from "./Asia.jpg";
import Eur from "./Europe.jpg";
import Sou from "./South America.jpg";
import Nor from "./North America.jpg";

const Continents = () => {
  return (
    <div className="bodmain">

      <Navbar className="nav_cnto" collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_cont_main">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_cont_main">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_cont_main">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_cont_main">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_cont_main">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Link to='/Africa'><img className="count" src={Afr} alt="not found"></img></Link>
      <Link to='/Antartica'><img className="count" src={Ant} alt="not found"></img></Link>

      <br />

      <Link to='/Asia'><img className="count" src={Asi} alt="not found"></img></Link>
      <Link to='/Australia'><img className="count" src={Aus} alt="not found"></img></Link>
      <Link to='/Europe'><img className="count" src={Eur} alt="not found"></img></Link>

      <br />

      <Link to='/NorthAmerica'><img className="count" src={Nor} alt="not found"></img></Link>
      <Link to='/SouthAmerica'><img className="count" src={Sou} alt="not found"></img></Link>

    </div>
  );
};

export default Continents;