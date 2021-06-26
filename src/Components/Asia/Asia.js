import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Asia.css';
import { Navbar, Nav } from 'react-bootstrap';


const Asia = () => {
  return (
    <div className="bodyAsiapage">

      <Navbar className="nav_continents_asia" collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_cont_asia">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_cont_asia">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_cont_asia">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_cont_asia">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_cont_asia">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="heading_cont_asia">ASIA</div>

      <div className="Further_asia">
        GO TO : &nbsp;
        <Link to="Asia_beautiful_place" className="FurtherLink_asia">10 of the most beautiful places in Asia</Link>
      </div>

      <div className="content_cont">
        Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Its 4.5 billion people (as of June 2019) constitute roughly 60% of the world's population.<br /><br />
      </div>

      <img className="cont_map_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/1024px-Asia_%28orthographic_projection%29.svg.png" alt="..." /><br /><br />

      <div className="content_cont">
        In general terms, Asia is bounded on the east by the Pacific Ocean, on the south by the Indian Ocean, and on the north by the Arctic Ocean. The border of Asia with Europe is a historical and cultural construct, as there is no clear physical and geographical separation between them. It is somewhat arbitrary and has moved since its first conception in classical antiquity. The division of Eurasia into two continents reflects East–West cultural, linguistic, and ethnic differences, some of which vary on a spectrum rather than with a sharp dividing line. The most commonly accepted boundaries place Asia to the east of the Suez Canal separating it from Africa; and to the east of the Turkish Straits, the Ural Mountains and Ural River, and to the south of the Caucasus Mountains and the Caspian and Black Seas, separating it from Europe.<br /><br />

        China and India alternated in being the largest economies in the world from 1 to 1800 CE. China was a major economic power and attracted many to the east, and for many the legendary wealth and prosperity of the ancient culture of India personified Asia, attracting European commerce, exploration and colonialism. The accidental discovery of a trans-Atlantic route from Europe to America by Columbus while in search for a route to India demonstrates this deep fascination. The Silk Road became the main east–west trading route in the Asian hinterlands while the Straits of Malacca stood as a major sea route. Asia has exhibited economic dynamism (particularly East Asia) as well as robust population growth during the 20th century, but overall population growth has since fallen. Asia was the birthplace of most of the world's mainstream religions including Hinduism, Zoroastrianism, Judaism, Jainism, Buddhism, Confucianism, Taoism, Christianity, Islam, Sikhism, as well as many other religions<br /><br />

        Given its size and diversity, the concept of Asia—a name dating back to classical antiquity—may actually have more to do with human geography than physical geography. Asia varies greatly across and within its regions with regard to ethnic groups, cultures, environments, economics, historical ties and government systems. It also has a mix of many different climates ranging from the equatorial south via the hot desert in the Middle East, temperate areas in the east and the continental centre to vast subarctic and polar areas in Siberia.<br /><br />
      </div>

    </div>
  );
};

export default Asia;