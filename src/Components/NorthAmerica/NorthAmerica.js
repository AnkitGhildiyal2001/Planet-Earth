import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NorthAmerica.css';
import { Navbar, Nav } from 'react-bootstrap';


const NorthAmerica = () => {
  return (
    <div className="bodynorthamericapage">

      <Navbar className="nav_continents_northamerica" collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_cont_northamerica">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_cont_northamerica">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_cont_northamerica">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_cont_northamerica">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_cont_northamerica">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="heading_cont_northamerica">NORTH AMERICA</div>

      <div className="Further_northamerica">
        GO TO : &nbsp;
        <Link to="northamerica_beautiful_place" className="FurtherLink_northamerica">10 of the most beautiful places in North America</Link>
      </div>

      <div className="content_cont">
      North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere. It can also be described as the northern subcontinent of the Americas. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean. Because it is on the North American Tectonic Plate, Greenland is included as part of North America geographically.<br /><br />
      </div>

      <img className="cont_map_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/1024px-Location_North_America.svg.png" alt="..." /><br /><br />

      <div className="content_cont">
      North America covers an area of about 24,709,000 square kilometers (9,540,000 square miles), about 16.5% of the Earth's land area and about 4.8% of its total surface. North America is the third-largest continent by area, following Asia and Africa, and the fourth by population after Asia, Africa, and Europe. In 2013, its population was estimated at nearly 579 million people in 23 independent states, or about 7.5% of the world's population.<br /><br />

      North America was reached by its first human populations during the last glacial period, via crossing the Bering land bridge approximately 40,000 to 17,000 years ago. The so-called Paleo-Indian period is taken to have lasted until about 10,000 years ago (the beginning of the Archaic or Meso-Indian period). The classic stage spans roughly the 6th to 13th centuries. The pre-Columbian era ended in 1492, with the beginning of the transatlantic migrations of European settlers during the Age of Discovery and the early modern period. However, the first recorded European references to North America (other than Greenland) are around 1000 AD in Norse sagas where it is referred to as Vinland. Present-day cultural and ethnic patterns reflect interactions between European colonists, indigenous peoples, African slaves, immigrants, and the descendants of these groups.<br /><br />

      Owing to Europe's colonization of the Americas, most North Americans speak European languages such as English, Spanish or French, and their cultures commonly reflect Western traditions.<br /><br />

      North America occupies the northern portion of the landmass generally referred to as the New World, the Western Hemisphere, the Americas, or simply America (which, in many countries is considered as a single continent with North America a subcontinent). North America is the third-largest continent by area, following Asia and Africa. North America's only land connection to South America is at the Isthmus of Darian/Isthmus of Panama. The continent is delimited on the southeast by most geographers at the Darién watershed along the Colombia-Panama border, placing almost all of Panama within North America. Alternatively, some geologists physiographically locate its southern limit at the Isthmus of Tehuantepec, Mexico, with Central America extending southeastward to South America from this point. The Caribbean islands, or West Indies, are considered part of North America. The continental coastline is long and irregular. The Gulf of Mexico is the largest body of water indenting the continent, followed by Hudson Bay. Others include the Gulf of Saint Lawrence and the Gulf of California.<br /><br />
      </div>

    </div>
  );
};

export default NorthAmerica;