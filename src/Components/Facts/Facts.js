import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Facts.css';
import { Navbar, Nav } from 'react-bootstrap';

const Facts = () => {
  return (
    <div className="bod_Facts">

      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_conta_Facts">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_conta_Facts">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_conta_Facts">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_conta_Facts">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_conta_Facts">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="SuperHead">SOME AMAZING FACTS</div>

      <div className="subHead">Andromeda–Milky Way collision:</div>

      <div className="Facts_content">
        The Andromeda–Milky Way collision is a galactic collision predicted to occur in about 4.5 billion years between the two largest galaxies in the Local Group—the Milky Way (which contains the Solar System and Earth) and the Andromeda Galaxy. The stars involved are sufficiently far apart that it is improbable that any of them will individually collide. Some stars will be ejected from the resulting galaxy, nicknamed Milkomeda or Milkdromeda.
        The Andromeda Galaxy is approaching the Milky Way at about 110 kilometres per second (68 mi/s) as indicated by blueshift. However, the lateral speed (measured as proper motion) is very difficult to measure with a precision to draw reasonable conclusions: a lateral speed of only 7.7 km/s would mean that the Andromeda Galaxy is moving toward a point 177,800 light-years to the side of the Milky Way ((7.7 km/s) / (110 km/s) × (2,540,000 ly)), and such a speed over an eight-year timeframe amounts to only 1/3,000th of a Hubble Space Telescope pixel (Hubble's resolution≈0.05 arcsec: (7.7 km/s)/(300,000 km/s)×(8 y)/(2,540,000 ly)×180°/π×3600 = 0.000017 arcsec). Until 2012, it was not known whether the possible collision was definitely going to happen or not. In 2012, researchers concluded that the collision is sure to happen using Hubble to track the motion of stars in Andromeda between 2002 and 2010 with sub-pixel accuracy. Andromeda's tangential or sideways velocity with respect to the Milky Way was found to be much smaller than the speed of approach and therefore it is expected that it will directly collide with the Milky Way in around four and a half billion years. Such collisions are relatively common, considering galaxies' long lifespans. Andromeda, for example, is believed to have collided with at least one other galaxy in the past, and several dwarf galaxies such as Sgr dSph are currently colliding with the Milky Way and being merged into it.
      </div>

      <br />

      <img className="adjust" src="https://64.media.tumblr.com/404ff7a97b40dbdd382644b36fc81b3f/tumblr_poqu946qLY1sivjtn_400.gifv" alt="..." />

      <br /><br />

      <div className="subHead">Expansion of Sun:</div>

      <br />

      <div className="Facts_content">
        The future looks bright—maybe too bright. The sun is slowly expanding and brightening, and over the next few billion years it will eventually desiccate Earth, leaving it hot, brown and uninhabitable. About 7.6 billion years from now, the sun will reach its maximum size as a red giant: its surface will extend beyond Earth’s orbit today by 20 percent and will shine 3,000 times brighter. In its final stage, the sun will collapse into a white dwarf. Although scientists agree on the sun’s future, they disagree about what will happen to Earth. Since 1924, when British mathematician James Jeans first considered Earth’s fate during the sun’s red giant phase, a bevy of scientists have reached oscillating conclusions. In some scenarios, our planet escapes vaporization; in the latest analyses, however, it does not.
      </div>

      <br />

      <img className="adjust" src="http://www.nasa.gov/sites/default/files/thumbnails/image/kepler-snburp-point1second-nograph-1280x720-shorter-10lossy.gif" alt="..." />

      <br /><br />

      <div className="subHead">Moon is getting further away from Earth:</div>

      <div className="Facts_content">
        The Moon continues to spin away from the Earth, at the rate of 3.78cm (1.48in) per year, at about the same speed at which our fingernails grow.Without the Moon, the Earth could slow down enough to become unstable, but this would take billions of years and it may never happen at all.The migration of the Moon away from the Earth is mainly due to the action of the Earth's tides.The Moon is kept in orbit by the gravitational force that the Earth exerts on it, but the Moon also exerts a gravitational force on our planet and this causes the movement of the Earth's oceans to form a tidal bulge.Due to the rotation of the Earth, this tidal bulge actually sits slightly ahead of the Moon. Some of the energy of the spinning Earth gets transferred to the tidal bulge via friction.This drives the bulge forward, keeping it ahead of the Moon. The tidal bulge feeds a small amount of energy into the Moon, pushing it into a higher orbit like the faster, outside lanes of a test track.
      </div>

      <br />

      <img className="adjust" src="https://www.nasa.gov/sites/default/files/thumbnails/image/moon_satellite.gif" alt="..." />

      <br /><br /><br /><br />

      <div className="SuperHead">SOME CONCERNING FACTS</div>

      <div className="subHead">Pollution:</div>

      <div className="Facts_content">
        Pollution is the introduction of contaminants into the natural environment that cause adverse change. Pollution can take the form of chemical substances or energy, such as noise, heat, or light. Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed 9 million people worldwide. Air pollution has always accompanied civilizations. Pollution started from prehistoric times, when man created the first fires. According to a 1983 article in the journal Science, "soot" found on ceilings of prehistoric caves provides ample evidence of the high levels of pollution that was associated with inadequate ventilation of open fires. "Metal forging appears to be a key turning point in the creation of significant air pollution levels outside the home. Core samples of glaciers in Greenland indicate increases in pollution associated with Greek, Roman, and Chinese metal production.
      </div>

      <br />

      <img className="adjust" src="https://thumbs.gfycat.com/AmpleBelatedDrongo-size_restricted.gif" alt="..." />

      <br /><br />

      <div className="subHead">Global Warming:</div>

      <div className="Facts_content">
        Global warming is the slow increase in the average temperature of the earth’s atmosphere because an increased amount of the energy (heat) striking the earth from the sun is being trapped in the atmosphere and not radiated out into space. The earth’s atmosphere has always acted like a greenhouse to capture the sun’s heat, ensuring that the earth has enjoyed temperatures that permitted the emergence of life forms as we know them, including humans. Without our atmospheric greenhouse the earth would be very cold. Global warming, however, is the equivalent of a greenhouse with high efficiency reflective glass installed the wrong way around. Ironically, the best evidence of this may come from a terrible cooling event that took place some 1,500 years ago. Two massive volcanic eruptions, one year after another placed so much black dust into the upper atmosphere that little sunlight could penetrate. Temperatures plummeted. Crops failed. People died of starvation and the Black Death started its march. As the dust slowly fell to earth, the sun was again able to warn the world and life returned to normal.
      </div>

      <br />

      <img className="adjust" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Global_warming_spiral_2018.gif" alt="..." />

      <br /><br />

      <div className="subHead">Over Population:</div>

      <div className="Facts_content">
        Overpopulation is a major cause of most of the world’s problems. Whether it is a question of food shortage, lack of drinking water or energy shortages, every country in the world is affected by it – or will be. Partly thanks to the import of goods from abroad, any particular country is able to maintain its own welfare. But this cannot go on in an unlimited way. In fact, the number of inhabitants is rising in every country. The world population is threatening to rise in the next few decades to 8 or 10 billion. There is a good chance that more and more countries will need their own products themselves. Our planet can offer a quality of life comparable to that enjoyed in the European Union to no more than 2 billion people. With a population of 8 to 10 billion, welfare per person on a world scale will drop to that of a poor farmer who can scarcely provide sufficient food for himself and knows nothing of welfare. And thus we will have to share everything fairly in order to avoid disputes or war.
      </div>

      <br />

      <img className="adjust" src="https://i.pinimg.com/originals/89/59/6c/89596ce80a2f8578e3537eda52682579.gif" alt="..." />

      <br /><br />

    </div >
  );
};

export default Facts;