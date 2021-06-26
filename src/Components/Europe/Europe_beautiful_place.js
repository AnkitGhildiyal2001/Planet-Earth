import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Europe_beautiful_place.css';

import "./styles.css";
import "./flickity.css";

import acr1 from "./Europe_place/acr1.png";
import acr2 from "./Europe_place/acr2.png";
import acr3 from "./Europe_place/acr3.png";

import alh1 from "./Europe_place/alh1.png";
import alh2 from "./Europe_place/alh2.png";
import alh3 from "./Europe_place/alh3.png";

import cli1 from "./Europe_place/cli1.png";
import cli2 from "./Europe_place/cli2.png";
import cli3 from "./Europe_place/cli3.png";

import ven1 from "./Europe_place/ven1.png";
import ven2 from "./Europe_place/ven2.png";
import ven3 from "./Europe_place/ven3.png";

import col1 from "./Europe_place/col1.png";
import col2 from "./Europe_place/col2.png";
import col3 from "./Europe_place/col3.png";

import eft1 from "./Europe_place/eft1.png";
import eft2 from "./Europe_place/eft2.png";
import eft3 from "./Europe_place/eft3.png";

import fjo1 from "./Europe_place/fjo1.png";
import fjo2 from "./Europe_place/fjo2.png";
import fjo3 from "./Europe_place/fjo3.png";

import hag1 from "./Europe_place/hag1.png";
import hag2 from "./Europe_place/hag2.png";
import hag3 from "./Europe_place/hag3.png";

import nc1 from "./Europe_place/nc1.png";
import nc2 from "./Europe_place/nc2.png";
import nc3 from "./Europe_place/nc3.png";

import stpb1 from "./Europe_place/stpb1.png";
import stpb2 from "./Europe_place/stpb2.png";
import stpb3 from "./Europe_place/stpb3.png";

const Carousel1 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={col1} width='80%' alt='...' />
      <img src={col2} width='80%' alt='...' />
      <img src={col3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel2 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={acr1} width='80%' alt='...' />
      <img src={acr2} width='80%' alt='...' />
      <img src={acr3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel3 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={hag1} width='80%' alt='...' />
      <img src={hag2} width='80%' alt='...' />
      <img src={hag3} width='80%Nat' alt='...' />
    </Flickity>
  );
};

const Carousel4 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={alh1} width='80%' alt='...' />
      <img src={alh2} width='80%' alt='...' />
      <img src={alh3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel5 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={fjo1} width='80%' alt='...' />
      <img src={fjo2} width='80%' alt='...' />
      <img src={fjo3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel6 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={cli1} width='80%' alt='...' />
      <img src={cli2} width='80%' alt='...' />
      <img src={cli3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel7 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={ven1} width='80%' alt='...' />
      <img src={ven2} width='80%' alt='...' />
      <img src={ven3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel8 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={stpb1} width='80%' alt='...' />
      <img src={stpb2} width='80%' alt='...' />
      <img src={stpb3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel9 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={eft1} width='80%' alt='...' />
      <img src={eft2} width='80%' alt='...' />
      <img src={eft3} width='80%' alt='...' />
    </Flickity>
  );
};

const Carousel10 = (props) => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={(c) => (flkty = c)}
      options={{ initialIndex: props.initialIndex, wrapAround: true, autoPlay: true }}
    >
      <img src={nc1} width='80%' alt='...' />
      <img src={nc2} width='80%' alt='...' />
      <img src={nc3} width='80%' alt='...' />
    </Flickity>
  );
};

const Europe_beautiful_place = () => {

  return (
    <div className="body_beautiful_place">

      <Navbar className="navbea" collapseOnSelect expand="lg" variant="dark">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="Planet">
            Planet <span id="erth">Earth&nbsp;</span>
          </span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }}><span className="nav_cont_pla">Home&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Continents" style={{ textDecoration: 'none' }}><span className="nav_cont_pla">Continents&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Map" style={{ textDecoration: 'none' }}><span className="nav_cont_pla">Map&nbsp;&nbsp;</span></NavLink>
            <NavLink to="/Facts" style={{ textDecoration: 'none' }}><span className="nav_cont_pla">Facts&nbsp;&nbsp;</span></NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Know More</Nav.Link> */}
            <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><span className="nav_cont_pla">About us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <br />
      <h2 className="Super">10 OF THE MOST BEAUTIFUL PLACES IN EUROPE</h2>
      <br />

      <h4 className="heading">Colosseum</h4>
      <Carousel1 /><br />
      <p className="para">
        The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72 and was completed in 80 AD under his successor and heir, Titus (r. 79–81). Further modifications were made during the reign of Domitian (r. 81–96). The three emperors that were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre by later classicists and archaeologists for its association with their family name (Flavius).
      </p><br /><br />

      <h4 className="heading">Acropolis</h4>
      <Carousel2 /><br />
      <p className="para">
        The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historical significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον (akron, "highest point, extremity") and πόλις (polis, "city"). The term acropolis is generic and there are many other acropoleis in Greece. During ancient times it was known also more properly as Cecropia, after the legendary serpent-man, Cecrops, the supposed first Athenian king.
      </p><br /><br />

      <h4 className="heading">Hagia Sophia</h4>
      <Carousel3 /><br />
      <p className="para">
        Hagia Sophia , officially the Hagia Sophia Holy Grand Mosque (Turkish: Ayasofya-i Kebir Cami-i Şerifi), and formerly the Church of Hagia Sophia, is a Late Antique place of worship in Istanbul, designed by the Greek geometers Isidore of Miletus and Anthemius of Tralles. Built in 537 as the patriarchal cathedral of the imperial capital of Constantinople, it was the largest Christian church of the eastern Roman Empire (the Byzantine Empire) and the Eastern Orthodox Church, except during the Latin Empire from 1204 to 1261, when it became the city's Latin Catholic cathedral.
      </p><br /><br />

      <h4 className="heading">Alhambra</h4>
      <Carousel4 /><br />
      <p className="para">
        The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain. It was originally constructed as a small fortress in 889 CE on the remains of ancient Roman fortifications, and then largely ignored until its ruins were renovated and rebuilt in the mid-13th century by the Arab Nasrid emir Mohammed ben Al-Ahmar of the Emirate of Granada, who built its current palace and walls.
      </p><br /><br />

      <h4 className="heading">Fjords of Norway</h4>
      <Carousel5 /><br />
      <p className="para">
        The fjords were formed by the giant glacier tongues that through several ice ages have shaped the landscape. A fjord is thus a U-shaped undersea valley, and on the west coast, this valley is often surrounded by dramatic mountain scenery.

        In front of the glacier arm, there was deposited a moraine of gravel and sand that formed an underwater barrier, often called "sea thresholds" or "ra". Places where the fjord is shallow.
      </p><br /><br />

      <h4 className="heading">Cliffs of Moher</h4>
      <Carousel6 /><br />
      <p className="para">
        The Cliffs of Moher are sea cliffs located at the southwestern edge of the Burren region in County Clare, Ireland. They run for about 14 kilometres (9 miles). At their southern end, they rise 120 metres (390 ft) above the Atlantic Ocean at Hag's Head, and, 8 kilometres (5 miles) to the north, they reach their maximum height of 214 metres (702 ft) just north of O'Brien's Tower,a round stone tower near the midpoint of the cliffs, built in 1835 by Sir Cornelius O'Brien, then continue at lower heights. The closest settlements are the villages of Liscannor 6 km (4 miles) to the south, and Doolin 7 km (4 miles) to the north.
      </p><br /><br />

      <h4 className="heading">Canals of Venice</h4>
      <Carousel7 /><br />
      <p className="para">
        The Grand Canal is a channel in Venice, Italy. It forms one of the major water-traffic corridors in the city.

        One end of the canal leads into the lagoon near the Santa Lucia railway station and the other end leads into the basin at San Marco; in between, it makes a large reverse-S shape through the central districts (sestieri) of Venice. It is 3.8 km (2.4 mi) long, and 30 to 90 m (98 to 295 ft) wide, with an average depth of 5 metres (16 feet).
      </p><br /><br />

      <h4 className="heading">St. Peter's Basilica</h4>
      <Carousel8 /><br />
      <p className="para">
        The Papal Basilica of Saint Peter in the Vatican, or simply Saint Peter's Basilica (Latin: Basilica Sancti Petri), is a church built in the Renaissance style located in Vatican City, the papal enclave that is within the city of Rome.

        Designed principally by Donato Bramante, Michelangelo, Carlo Maderno and Gian Lorenzo Bernini, St. Peter's is the most renowned work of Renaissance architecture and the largest church in the world by interior measure
      </p><br /><br />

      <h4 className="heading">Eiffel Tower</h4>
      <Carousel9 /><br />
      <p className="para">
        The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.

        Locally nicknamed "La dame de fer" (French for "Iron Lady"), it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair and was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.
      </p><br /><br />

      <h4 className="heading">Neuschwanstein Castle</h4>
      <Carousel10 /><br />
      <p className="para">
        Neuschwanstein Castle is a 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by King Ludwig II of Bavaria as a retreat and in honour of Richard Wagner. Ludwig chose to pay for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. Construction began in 1869, but was never fully completed.
      </p><br /><br />
    </div>
  );
};

export default Europe_beautiful_place;