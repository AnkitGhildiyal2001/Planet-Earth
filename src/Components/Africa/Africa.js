import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Africa.css';
import { Navbar, Nav } from 'react-bootstrap';


const Africa = () => {
  return (
    <div className="bodyAfricapage">

      <Navbar className="nav_continents" collapseOnSelect expand="lg" variant="dark">
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

      <div className="heading_cont">AFRICA</div>

      <div className="Further">
        GO TO : &nbsp;
        <Link to="Africa_beautiful_place" className="FurtherLink">10 of the most beautiful places in Africa</Link>
      </div>

      <div className="content_cont">
        Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.3 billion people as of 2018, it accounts for about 16% of the world's human population. Africa's population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4. Despite a wide range of natural resources, Africa is the least wealthy continent per capita, in part due to geographic impediments, legacies of European colonization in Africa and the Cold War, predatory/neo-colonialistic activities by Western nations and China, and undemocratic rule and deleterious policies. Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context.<br /><br />
      </div>

      <img className="cont_map_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/1024px-Africa_%28orthographic_projection%29.svg.png" alt="..." /><br /><br />

      <div className="content_cont">
        The continent is surrounded by the Mediterranean Sea to the north, the Isthmus of Suez and the Red Sea to the northeast, the Indian Ocean to the southeast and the Atlantic Ocean to the west. The continent includes Madagascar and various archipelagos. It contains 54 fully recognised sovereign states (countries), eight territories and two de facto independent states with limited or no recognition. Algeria is Africa's largest country by area, and Nigeria is its largest by population. African nations cooperate through the establishment of the African Union, which is headquartered in Addis Ababa.<br /><br />

        Africa straddles the Equator and encompasses numerous climate areas; it is the only continent to stretch from the northern temperate to southern temperate zones. The majority of the continent and its countries are in the Northern Hemisphere, with a substantial portion and number of countries in the Southern Hemisphere. Most of the continent lies in the tropics, except by for a large part of Western Sahara, Algeria, Libya and Egypt, the northern tip of Mauritania, the entire territories of Morocco, Ceuta, Melilla and Tunisia which in turn are located above the tropic of Cancer, in the northern temperate zone and in the other extreme of the continent southern Namibia, southern Botsuana, great part of South Africa, the entire territories of Lesoto and eSwatini and the southern tips of Mozambique and Madagascar are located below the tropic of Capricorn, in the southern temperate zone.<br /><br />

        Africa is home to much biodiversity; it is the continent with the largest number of megafauna species, as it was least affected by the extinction of the Pleistocene megafauna. However, Africa also is heavily affected by a wide range of environmental issues, including desertification, deforestation, water scarcity, and other issues. These entrenched environmental concerns are expected to worsen as climate change impacts Africa. The UN Intergovernmental Panel on Climate Change has identified Africa as the continent most vulnerable to climate change.<br /><br />

        Africa, particularly Eastern Africa, is widely accepted as the place of origin of humans and the Hominidae clade (great apes), meaning that Africa has a long and complex history. The earliest hominids and their ancestors have been dated to around 7 million years ago, including Sahelanthropus tchadensis, Australopithecus africanus, A. afarensis, Homo erectus, H. habilis and H. ergaster— the earliest Homo sapiens (modern human) remains, found in Ethiopia, South Africa, and Morocco, date to circa 200,000, 259,000, and 300,000 years ago respectively, and Homo sapiens is believed to have originated in Africa around 350,000–260,000 years ago.<br /><br />

        Early human civilizations, such as Ancient Egypt and Phoenicia emerged in North Africa. Following a subsequent long and complex history of civilizations, migration and trade, Africa hosts a large diversity of ethnicities, cultures and languages. The last 400 years have witnessed an increasing European influence on the continent. Starting in the 16th century, this was driven by trade, including the Trans-Atlantic slave trade, which created large African diaspora populations in the Americas. In the late 19th century, European countries colonized almost all of Africa, extracting resources from the continent and exploiting local communities; most present states in Africa emerged from a process of decolonisation in the 20th century.<br /><br />
      </div>

    </div>
  );
};

export default Africa;