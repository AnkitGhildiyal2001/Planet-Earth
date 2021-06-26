import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Antartica.css';
import { Navbar, Nav } from 'react-bootstrap';


const Antartica = () => {
  return (
    <div className="bodyAntarticapage">

      <Navbar className="nav_continents_ant" collapseOnSelect expand="lg" variant="dark">
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

      <div className="heading_cont_cnt">Antartica</div>

      <div className="Further_ant">
        GO TO : &nbsp;
        <Link to="Antartica_beautiful_place" className="FurtherLink_ant">10 of the most beautiful places in Antartica</Link>
      </div>

      <div className="content_cont">
        Antarctica is Earth's southernmost continent. It contains the geographic South Pole and is situated in the Antarctic region of the Southern Hemisphere, almost entirely south of the Antarctic Circle, and is surrounded by the Southern Ocean. At 14,200,000 square kilometres (5,500,000 square miles), it is the fifth-largest continent and nearly twice the size of Australia. It is by far the least populated continent, with around 5,000 people in the summer and around 1,000 in the winter. About 98% of Antarctica is covered by ice that averages 1.9 km (1.2 mi; 6,200 ft) in thickness, which extends to all but the McMurdo Dry Valleys and the northernmost reaches of the Antarctic Peninsula.<br /><br />
      </div>

      <img className="cont_map_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/1026px-Antarctica_%28orthographic_projection%29.svg.png" alt="..." /><br /><br />

      <div className="content_cont">
        Antarctica, on average, is the coldest, driest, and windiest continent, and has the highest average elevation of all the continents.Most of Antarctica is a polar desert, with annual precipitation of 200 mm (7.9 in) along the coast and far less inland; yet 80% of the world freshwater reserves are stored there, enough to raise global sea levels by about 60 metres (200 ft) if all of it were to melt. The temperature in Antarctica has dropped to −89.2 °C (−128.6 °F) (or even −94.7 °C (−135.8 °F) as measured from space), though the average for the third quarter (the coldest part of the year) is −63 °C (−81 °F). Organisms native to Antarctica include many types of algae, bacteria, fungi, plants, protista, and certain animals, such as mites, nematodes, penguins, seals and tardigrades. Vegetation, where it occurs, is tundra.<br /><br />

        Antarctica was the last region on Earth to be discovered, unseen until 1820 when the Russian expedition of Fabian Gottlieb von Bellingshausen and Mikhail Lazarev on Vostok and Mirny sighted the Fimbul ice shelf. The continent remained largely neglected for the rest of the 19th century because of its harsh environment, lack of easily accessible resources, and isolation. In January 1840, land at Antarctica was discovered for the first time, almost simultaneously, by the United States Exploring Expedition, under Lieut. Charles Wilkes, and a separate French expedition under Jules Dumont d'Urville. The latter made a temporary landing; while the Wilkes expedition, though it did not make a landing, did remain long enough in the region to survey and map some 800 miles of the continent. The first confirmed landing was by a team of Norwegians in 1895.<br /><br />

        Antarctica is governed by parties to the Antarctic Treaty System. Twelve countries signed the Antarctic Treaty in 1959, and thirty-eight have signed it since then. The treaty prohibits military activities, mineral mining, nuclear explosions and nuclear waste disposal. It supports scientific research and protects the continent's ecology. Between 1,000 and 5,000 people from many countries reside at research stations scattered across the continent.<br /><br />

        Antarctica has no indigenous population. According to Māori oral history in New Zealand, Hui Te Rangiora (also known as Ūi Te Rangiora) and his crew explored Antarctic waters in the early seventh century on the vessel Te Ivi o Atea. Accounts name the area Te tai-uka-a-pia, which describes a 'frozen ocean' and 'arrowroot', which resembles fresh snow when scraped.<br /><br />
      </div>

    </div>
  );
};

export default Antartica;