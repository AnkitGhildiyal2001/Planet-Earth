import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './SouthAmerica_beautiful_place.css';

import "./styles.css";
import "./flickity.css";

import ang1 from "./SouthAmerica_place/ang1.png";
import ang2 from "./SouthAmerica_place/ang2.png";
import ang3 from "./SouthAmerica_place/ang3.png";

import bue1 from "./SouthAmerica_place/bue1.png";
import bue2 from "./SouthAmerica_place/bue2.png";
import bue3 from "./SouthAmerica_place/bue3.png";

import eas1 from "./SouthAmerica_place/eas1.png";
import eas2 from "./SouthAmerica_place/eas1.png";
import eas3 from "./SouthAmerica_place/eas3.png";

import gal1 from "./SouthAmerica_place/gal1.png";
import gal2 from "./SouthAmerica_place/gal2.png";
import gal3 from "./SouthAmerica_place/gal3.png";

import igu1 from "./SouthAmerica_place/igu1.png";
import igu2 from "./SouthAmerica_place/igu2.png";
import igu3 from "./SouthAmerica_place/igu3.png";

import lak1 from "./SouthAmerica_place/lak1.png";
import lak2 from "./SouthAmerica_place/lak2.png";
import lak3 from "./SouthAmerica_place/lak3.png";

import mac1 from "./SouthAmerica_place/mac1.png";
import mac2 from "./SouthAmerica_place/mac2.png";
import mac3 from "./SouthAmerica_place/mac3.png";

import rio1 from "./SouthAmerica_place/rio1.png";
import rio2 from "./SouthAmerica_place/rio2.png";
import rio3 from "./SouthAmerica_place/rio3.png";

import tay1 from "./SouthAmerica_place/tay1.png";
import tay2 from "./SouthAmerica_place/tay2.png";
import tay3 from "./SouthAmerica_place/tay3.png";

import ush1 from "./SouthAmerica_place/ush1.png";
import ush2 from "./SouthAmerica_place/ush2.png";
import ush3 from "./SouthAmerica_place/ush3.png";

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
      <img src={mac1} width='80%' alt='...' />
      <img src={mac2} width='80%' alt='...' />
      <img src={mac3} width='80%' alt='...' />
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
      <img src={rio1} width='80%' alt='...' />
      <img src={rio2} width='80%' alt='...' />
      <img src={rio3} width='80%' alt='...' />
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
      <img src={igu1} width='80%' alt='...' />
      <img src={igu2} width='80%' alt='...' />
      <img src={igu3} width='80%Nat' alt='...' />
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
      <img src={gal1} width='80%' alt='...' />
      <img src={gal2} width='80%' alt='...' />
      <img src={gal3} width='80%' alt='...' />
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
      <img src={bue1} width='80%' alt='...' />
      <img src={bue2} width='80%' alt='...' />
      <img src={bue3} width='80%' alt='...' />
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
      <img src={eas1} width='80%' alt='...' />
      <img src={eas2} width='80%' alt='...' />
      <img src={eas3} width='80%' alt='...' />
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
      <img src={lak1} width='80%' alt='...' />
      <img src={lak2} width='80%' alt='...' />
      <img src={lak3} width='80%' alt='...' />
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
      <img src={ang1} width='80%' alt='...' />
      <img src={ang2} width='80%' alt='...' />
      <img src={ang3} width='80%' alt='...' />
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
      <img src={tay1} width='80%' alt='...' />
      <img src={tay2} width='80%' alt='...' />
      <img src={tay3} width='80%' alt='...' />
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
      <img src={ush1} width='80%' alt='...' />
      <img src={ush2} width='80%' alt='...' />
      <img src={ush3} width='80%' alt='...' />
    </Flickity>
  );
};

const SouthAmerica_beautiful_place = () => {

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
      <h2 className="Super">10 OF THE MOST BEAUTIFUL PLACES IN SOUTH AMERICA</h2>
      <br />

      <h4 className="heading">Machu Picchu, Peru</h4>
      <Carousel1 /><br />
      <p className="para">
        Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.
      </p><br /><br />

      <h4 className="heading">Rio de Janeiro, Brazil</h4>
      <Carousel2 /><br />
      <p className="para">
        Rio de Janeiro, or simply Rio, is the second-most populous city in Brazil and the sixth-most populous in the Americas. Rio de Janeiro is the capital of the state of Rio de Janeiro, Brazil's third-most populous state, after São Paulo and Minas Gerais. Part of the city has been designated as a World Heritage Site, named "Rio de Janeiro: Carioca Landscapes between the Mountain and the Sea", by UNESCO on 1 July 2012 as a Cultural Landscape.
      </p><br /><br />

      <h4 className="heading">Iguazu Falls ,Brazil & Argentina</h4>
      <Carousel3 /><br />
      <p className="para">
        Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; however, most of the falls are on the Argentine side. Below its confluence with the San Antonio River, the Iguazu River forms the border between Argentina and Brazil.
      </p><br /><br />

      <h4 className="heading">Galapagos Islands, Ecuador</h4>
      <Carousel4 /><br />
      <p className="para">
        The Galápagos Islands, part of the Republic of Ecuador, are an archipelago of volcanic islands distributed on either side of the equator in the Pacific Ocean surrounding the centre of the Western Hemisphere. Located 906 km (563 mi) west of continental Ecuador, the islands are known for their large number of endemic species that were studied by Charles Darwin during the second voyage of HMS Beagle. His observations and collections contributed to the inception of Darwin's theory of evolution by means of natural selection.
      </p><br /><br />

      <h4 className="heading">Buenos Aires, Argentina</h4>
      <Carousel5 /><br />
      <p className="para">
        Buenos Aires, officially Autonomous City of Buenos Aires, is the capital and largest city of Argentina. The city is located on the western shore of the Río de la Plata, on South America's southeastern coast. "Buenos Aires" can be translated as "fair winds" or "good airs", but the former was the meaning intended by the founders in the 16th century, by the use of the original name "Real de Nuestra Señora Santa María del Buen Ayre", named after the Madonna of Bonaria in Sardinia, Italy.
      </p><br /><br />

      <h4 className="heading">Easter Island, Chile</h4>
      <Carousel6 /><br />
      <p className="para">
        Easter Island is an island and special territory of Chile in the southeastern Pacific Ocean, at the southeasternmost point of the Polynesian Triangle in Oceania. The island is most famous for its nearly 1,000 extant monumental statues, called moai, which were created by the early Rapa Nui people. In 1995, UNESCO named Easter Island a World Heritage Site, with much of the island protected within Rapa Nui National Park.
      </p><br /><br />

      <h4 className="heading">Lake Titicaca, Peru & Bolivia</h4>
      <Carousel7 /><br />
      <p className="para">
        Lake Titicaca is a large, deep, freshwater lake in the Andes on the border of Bolivia and Peru, often called the "highest navigable lake" in the world. By volume of water and by surface area, it is the largest lake in South America. (Lake Maracaibo has a larger surface area, but it is a tidal bay, not a lake.)
        Lake Titicaca has a surface elevation of 3,812 m (12,507 ft).The "highest navigable lake" claim is generally considered to refer to commercial craft. Numerous smaller bodies of water around the world are at higher elevations.
      </p><br /><br />

      <h4 className="heading">Angel Falls, Venezuela</h4>
      <Carousel8 /><br />
      <p className="para">
        Angel Falls is a waterfall in Venezuela. It is the world's tallest uninterrupted waterfall, with a height of 979 metres (3,212 ft) and a plunge of 807 m (2,648 ft). The waterfall drops over the edge of the Auyán-tepui mountain in the Canaima National Park (Spanish: Parque Nacional Canaima), a UNESCO World Heritage site in the Gran Sabana region of Bolívar State. The height figure, 979 m (3,212 ft), mostly consists of the main plunge but also includes about 400 metres (1,300 ft) of sloped cascade and rapids below the drop and a 30-metre (98 ft) high plunge downstream of the talus rapids.
      </p><br /><br />

      <h4 className="heading">Tayrona National Park, Colombia</h4>
      <Carousel9 /><br />
      <p className="para">
        The Tayrona National Natural Park is a protected area in the Colombian northern Caribbean region and within the jurisdiction of the city of Santa Marta, 34 kilometres (21 mi) from the city centre. The park presents a biodiversity endemic to the area of the Sierra Nevada de Santa Marta mountain range, featuring a variety of climates (mountain climate) and geography that ranges from arid sea level to 900 meters above sea level. The park covers approximately 30 square kilometres (12 sq mi) of maritime area in the Caribbean sea and approximately 150 square kilometres (58 sq mi) of land.
      </p><br /><br />

      <h4 className="heading">Ushuaia, Argentina</h4>
      <Carousel10 /><br />
      <p className="para">
        Ushuaia is the capital of Tierra del Fuego, Antártida e Islas del Atlántico Sur Province, Argentina, and the southernmost city of the country. Ushuaia claims the title of world's southernmost city. Ushuaia is located in a wide bay on the southern coast of Isla Grande de Tierra del Fuego, bounded on the north by the Martial mountain range and on the south by the Beagle Channel. It is the only municipality in the Department of Ushuaia, which has an area of 9,390 km2 (3,625 sq mi). It was founded on October 12, 1884, by Augusto Lasserre and is located on the shores of the Beagle Channel surrounded by the mountain range of the Martial Glacier, in the Bay of Ushuaia. Besides being an administrative center, it is a light industrial port and tourist hub.
      </p><br /><br />
    </div>
  );
};

export default SouthAmerica_beautiful_place;