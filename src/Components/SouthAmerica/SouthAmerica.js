import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SouthAmerica.css';
import { Navbar, Nav } from 'react-bootstrap';


const SouthAmerica = () => {
  return (
    <div className="bodysouthamericapage">

      <Navbar className="nav_continents_southamerica" collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_cont_southamerica">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_cont_southamerica">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_cont_southamerica">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_cont_southamerica">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_cont_southamerica">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="heading_cont_southamerica">SOUTH AMERICA</div>

      <div className="Further_southamerica">
        GO TO : &nbsp;
        <Link to="southamerica_beautiful_place" className="FurtherLink_southamerica">10 of the most beautiful places in South America</Link>
      </div>

      <div className="content_cont">
        South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It can also be described as the southern subcontinent of the Americas. The reference to South America instead of other regions (like Latin America or the Southern Cone) has increased in recent decades due to changing geopolitical dynamics (in particular, the rise of Brazil).<br /><br />
      </div>

      <img className="cont_map_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/1024px-South_America_%28orthographic_projection%29.svg.png" alt="..." /><br /><br />

      <div className="content_cont">
        South America is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean, North America and the Caribbean Sea lie to the northwest. The continent generally includes twelve sovereign states: Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela; two dependent territories: the Falkland Islands and South Georgia and the South Sandwich Islands; and one internal territory: French Guiana. In addition, the ABC islands of the Kingdom of the Netherlands, Ascension Island (dependency of Saint Helena, Ascension and Tristan da Cunha, a British Overseas Territory), Bouvet Island (dependency of Norway), Panama, and Trinidad and Tobago may also be considered parts of South America.<br /><br />

        South America has an area of 17,840,000 square kilometers (6,890,000 sq mi). Its population as of 2018 has been estimated at more than 423 million. South America ranks fourth in area (after Asia, Africa, and North America) and fifth in population (after Asia, Africa, Europe, and North America). Brazil is by far the most populous South American country, with more than half of the continent's population, followed by Colombia, Argentina, Venezuela and Peru. In recent decades, Brazil has also generated half of the continent's GDP and has become the continent's first regional power.<br /><br />

        Most of the population lives near the continent's western or eastern coasts while the interior and the far south are sparsely populated. The geography of western South America is dominated by the Andes mountains; in contrast, the eastern part contains both highland regions and vast lowlands where rivers such as the Amazon, Orinoco, and Paraná flow. Most of the continent lies in the tropics, except by for a large part of Chile, Argentina, southern Paraguay, southern Brazil and the entire territory of Uruguay, which in turn are located below the tropic of Capricorn, being located in the temperate zone.<br /><br />

        The continent's cultural and ethnic outlook has its origin with the interaction of indigenous peoples with European conquerors and immigrants and, more locally, with African slaves. Given a long history of colonialism, the overwhelming majority of South Americans speak Portuguese or Spanish, and societies and states reflect Western traditions. Relative to Europe, Asia and Africa, 20th-century South America has been a peaceful continent with few wars.<br /><br />
      </div>

    </div>
  );
};

export default SouthAmerica;