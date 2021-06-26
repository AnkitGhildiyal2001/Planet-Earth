import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Europe.css';
import { Navbar, Nav } from 'react-bootstrap';


const Europe = () => {
  return (
    <div className="bodyeuropepage">

      <Navbar className="nav_continents_europe" collapseOnSelect expand="lg" variant="dark">
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

      <div className="heading_cont_europe">EUROPE</div>

      <div className="Further_europe">
        GO TO : &nbsp;
        <Link to="europe_beautiful_place" className="FurtherLink_europe">10 of the most beautiful places in Europe</Link>
      </div>

      <div className="content_cont">
        Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost peninsulas of the continental landmass of Eurasia,[10] and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea, and the waterways of the Turkish Straits. Although much of this border is over land, Europe is generally accorded the status of a full continent because of its great physical size and the weight of its history and traditions.<br /><br />
      </div>

      <img className="cont_map_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/1026px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png" alt="..." /><br /><br />

      <div className="content_cont">
        Europe covers about 10,180,000 km2 (3,930,000 sq mi), or 2% of the Earth's surface (6.8% of land area), making it the second smallest continent (using the seven-continent model). Politically, Europe is divided into about fifty sovereign states, of which Russia is the largest and most populous, spanning 39% of the continent and comprising 15% of its population. Europe had a total population of about 746 million (about 10% of the world population) in 2018. The European climate is largely affected by warm Atlantic currents that temper winters and summers on much of the continent, even at latitudes along which the climate in Asia and North America is severe. Further from the sea, seasonal differences are more noticeable than close to the coast.<br /><br />

        European culture is the root of Western civilization, which traces its lineage back to ancient Greece and ancient Rome. The fall of the Western Roman Empire in 476 AD and the subsequent Migration Period marked the end of Europe's ancient history and the beginning of the Middle Ages. Renaissance humanism, exploration, art and science led to the modern era. Since the Age of Discovery, started by Portugal and Spain, Europe played a predominant role in global affairs. Between the 16th and 20th centuries, European powers colonized at various times the Americas, almost all of Africa and Oceania, and the majority of Asia.<br /><br />

        The Age of Enlightenment, the subsequent French Revolution and the Napoleonic Wars shaped the continent culturally, politically and economically from the end of the 17th century until the first half of the 19th century. The Industrial Revolution, which began in Great Britain at the end of the 18th century, gave rise to radical economic, cultural and social change in Western Europe and eventually the wider world. Both world wars took place for the most part in Europe, contributing to a decline in Western European dominance in world affairs by the mid-20th century as the Soviet Union and the United States took prominence.[14] During the Cold War, Europe was divided along the Iron Curtain between NATO in the West and the Warsaw Pact in the East, until the revolutions of 1989 and fall of the Berlin Wall.<br /><br />

        In 1949, the Council of Europe was founded with the idea of unifying Europe to achieve common goals and prevent future wars. Further European integration by some states led to the formation of the European Union (EU), a separate political entity that lies between a confederation and a federation.[15] The EU originated in Western Europe but has been expanding eastward since the fall of the Soviet Union in 1991. The currency of most countries of the European Union, the euro, is the most commonly used among Europeans; and the EU's Schengen Area abolishes border and immigration controls between most of its member states and some non-members states. There exists a political movement favouring the evolution of the European Union into a single federation encompassing much of the continent.<br /><br />
      </div>

    </div>
  );
};

export default Europe;