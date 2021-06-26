import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Australia.css';
import { Navbar, Nav } from 'react-bootstrap';


const Australia = () => {
  return (
    <div className="bodyaustraliapage">

      <Navbar className="nav_continents_australia" collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_cont_afr">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_cont_afr">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_cont_afr">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_cont_afr">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_cont_afr">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="heading_cont_australia">AUSTRALIA</div>

      <div className="Further_australia">
        GO TO : &nbsp;
        <Link to="australia_beautiful_place" className="FurtherLink_australia">10 of the most beautiful places in Australia</Link>
      </div>

      <div className="content_cont">
        The continent of Australia, sometimes known in technical contexts by the names Sahul, Australinea, or Meganesia to distinguish it from the country of Australia, consists of the landmasses which sit on Australia's continental plate. The name "Sahul" takes its name from the Sahul Shelf, which is part of the continental shelf of the Australian continent. The continent includes mainland Australia, Tasmania, and the island of New Guinea. Situated in the geographical region of Oceania, Australia is the smallest of the seven traditional continents.<br /><br />
      </div>

      <img className="cont_map_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Australia-New_Guinea_%28orthographic_projection%29.svg/1024px-Australia-New_Guinea_%28orthographic_projection%29.svg.png" alt="..." /><br /><br />

      <div className="content_cont">
        The continent includes a continental shelf overlain by shallow seas which divide it into several landmasses—the Arafura Sea and Torres Strait between mainland Australia and New Guinea, and Bass Strait between mainland Australia and Tasmania. When sea levels were lower during the Pleistocene ice age, including the Last Glacial Maximum about 18,000 BC, they were connected by dry land. During the past 18,000 to 10,000 years, rising sea levels overflowed the lowlands and separated the continent into today's low-lying arid to semi-arid mainland and the two mountainous islands of New Guinea and Tasmania.<br /><br />

        The continent of Australia is sometimes known by the names Sahul, Australinea, or Meganesia to distinguish it from the country of Australia, and consists of the landmasses which sit on Australia's continental plate. This includes mainland Australia, Tasmania, and the island of New Guinea, which comprises Papua New Guinea and Western New Guinea (Papua and West Papua, provinces of Indonesia). The name "Sahul" takes its name from the Sahul Shelf, which is part of the continental shelf of the Australian continent.<br /><br />

        The term Oceania, originally a "great division" of the world, was replaced by the concept of Australia as a continent in the 1950s. Today, the term Oceania is often used to denote the region encompassing the Australian continent, Zealandia and various islands in the Pacific Ocean that are not included in the seven-continent model.<br /><br />

        Archaeological terminology for this region has changed repeatedly. Before the 1970s, the single Pleistocene landmass was called Australasia, derived from the Latin australis, meaning "southern", although this word is most often used for a wider region that includes lands like New Zealand that are not on the same continental shelf. In the early 1970s, the term Greater Australia was introduced for the Pleistocene continent. Then at a 1975 conference and consequent publication, the name Sahul was extended from its previous use for just the Sahul Shelf to cover the continent.<br /><br />
      </div>

    </div>
  );
};

export default Australia;