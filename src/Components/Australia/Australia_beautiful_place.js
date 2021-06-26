import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Australia_beautiful_place.css';

import "./styles.css";
import "./flickity.css";

import bb1 from './Australia_place/bb1.png';
import bb2 from './Australia_place/bb2.png';
import bb3 from './Australia_place/bb3.png';

import cml1 from './Australia_place/cml1.png';
import cml2 from './Australia_place/cml2.png';
import cml3 from './Australia_place/cml3.png';

import dnp1 from './Australia_place/dnp1.png';
import dnp2 from './Australia_place/dnp2.png';
import dnp3 from './Australia_place/dnp3.png';

import fri1 from './Australia_place/fri1.png';
import fri2 from './Australia_place/fri2.png';
import fri3 from './Australia_place/fri3.png';

import gbr1 from './Australia_place/gbr1.png';
import gbr2 from './Australia_place/gbr2.png';
import gbr3 from './Australia_place/gbr3.png';

import gor1 from './Australia_place/gor1.png';
import gor2 from './Australia_place/gor2.png';
import gor3 from './Australia_place/gor3.png';

import ki1 from './Australia_place/ki1.png';
import ki2 from './Australia_place/ki2.png';
import ki3 from './Australia_place/ki3.png';

import knp1 from './Australia_place/knp1.png';
import knp2 from './Australia_place/knp2.png';
import knp3 from './Australia_place/knp3.png';

import oph1 from './Australia_place/oph1.png';
import oph2 from './Australia_place/oph2.png';
import oph3 from './Australia_place/oph3.png';

import ulu1 from './Australia_place/ulu1.png';
import ulu2 from './Australia_place/ulu2.png';
import ulu3 from './Australia_place/ulu3.png';

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
      <img src={oph1} width='80%' alt='...' />
      <img src={oph2} width='80%' alt='...' />
      <img src={oph3} width='80%' alt='...' />
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
      <img src={gbr1} width='80%' alt='...' />
      <img src={gbr2} width='80%' alt='...' />
      <img src={gbr3} width='80%' alt='...' />
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
      <img src={ulu1} width='80%' alt='...' />
      <img src={ulu2} width='80%' alt='...' />
      <img src={ulu3} width='80%Nat' alt='...' />
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
      <img src={bb1} width='80%' alt='...' />
      <img src={bb2} width='80%' alt='...' />
      <img src={bb3} width='80%' alt='...' />
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
      <img src={dnp1} width='80%' alt='...' />
      <img src={dnp2} width='80%' alt='...' />
      <img src={dnp3} width='80%' alt='...' />
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
      <img src={fri1} width='80%' alt='...' />
      <img src={fri2} width='80%' alt='...' />
      <img src={fri3} width='80%' alt='...' />
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
      <img src={knp1} width='80%' alt='...' />
      <img src={knp2} width='80%' alt='...' />
      <img src={knp3} width='80%' alt='...' />
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
      <img src={gor1} width='80%' alt='...' />
      <img src={gor2} width='80%' alt='...' />
      <img src={gor3} width='80%' alt='...' />
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
      <img src={ki1} width='80%' alt='...' />
      <img src={ki2} width='80%' alt='...' />
      <img src={ki3} width='80%' alt='...' />
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
      <img src={cml1} width='80%' alt='...' />
      <img src={cml2} width='80%' alt='...' />
      <img src={cml3} width='80%' alt='...' />
    </Flickity>
  );
};

const Australia_beautiful_place = () => {

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
      <h2 className="Super">10 OF THE MOST BEAUTIFUL PLACES IN AUSTRALIA</h2>
      <br />

      <h4 className="heading">Sydney Opera House</h4>
      <Carousel1 /><br />
      <p className="para">
        The Sydney Opera House is a multi-venue performing arts centre on Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.

        Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed by Peter Hall, the building was formally opened on 20 October 1973 after a gestation beginning with Utzon's 1957 selection as winner of an international design competition.
      </p><br /><br />

      <h4 className="heading">Great Barrier Reef Marine Park</h4>
      <Carousel2 /><br />
      <p className="para">
        The Great Barrier Reef Marine Park protects a large part of Australia's Great Barrier Reef from damaging activities. It is a vast multiple-use Marine Park which supports a wide range of uses, including commercial marine tourism, fishing, ports and shipping, recreation, scientific research and Indigenous traditional use. Fishing and the removal of artefacts or wildlife (fish, coral, seashells, etc.) is strictly regulated, and commercial shipping traffic must stick to certain specific defined shipping routes that avoid the most sensitive areas of the park. The Great Barrier Reef is the largest and best known coral reef ecosystem in the world. Its reefs, almost 3000 in total, represent about 10 per cent of all the coral reef areas in the world. It supports an amazing variety of biodiversity, providing a home to thousands of coral and other invertebrate species, bony fish, sharks, rays, marine mammals, marine turtles, sea snakes, as well as algae and other marine plants.
      </p><br /><br />

      <h4 className="heading">Uluru-Kata Tjuta National Park</h4>
      <Carousel3 /><br />
      <p className="para">
        Uluṟu-Kata Tjuṯa National Park is a protected area in the Northern Territory of Australia. The park is home to both Uluru and Kata Tjuta. It is located 1,943 kilometres (1,207 mi) south of Darwin by road and 440 kilometres (270 mi) south-west of Alice Springs along the Stuart and Lasseter Highways. The park covers 1,326 square kilometres (512 sq mi) and includes the features it is named after: Uluru and, 40 kilometres (25 mi) to its west, Kata Tjuta. The location is listed with UNESCO World Heritage sites for natural and cultural landscape.
      </p><br /><br />

      <h4 className="heading">Bondi Beach</h4>
      <Carousel4 /><br />
      <p className="para">
        Bondi Beach is a popular beach and the name of the surrounding suburb in Sydney, New South Wales, Australia. Bondi Beach is located 7 km (4 mi) east of the Sydney central business district, in the local government area of Waverley Council, in the Eastern Suburbs. It has a population of 11,656 residents. Its post code is 2026. Bondi, North Bondi, and Bondi Junction are neighbouring suburbs. Bondi Beach is one of the most visited tourist sites in Australia.
      </p><br /><br />

      <h4 className="heading">Daintree National Park</h4>
      <Carousel5 /><br />
      <p className="para">
        The Daintree rainforest is a national park in Far North Queensland, Australia, 1,757 km (1,092 mi) northwest of Brisbane and 100 km (62 mi) northwest of Cairns. It was founded in 1981 and is part of the Wet Tropics of Queensland. In 1988 it became a World Heritage Site. The park consists of two sections, with a settled agricultural area between them which includes the towns of Mossman and Daintree Village.
      </p><br /><br />

      <h4 className="heading">Fraser Island</h4>
      <Carousel6 /><br />
      <p className="para">
        Fraser Island or K'gari is the traditional land of the Butchulla people, and a heritage-listed island located along the southeastern coast in the Wide Bay–Burnett region, Queensland, Australia. It is approximately 250 kilometres (160 mi) north of the state capital, Brisbane, and is a locality within the Fraser Coast Region local government area. In the 2016 census, the island had a population of 182 people.
      </p><br /><br />

      <h4 className="heading">Kakadu National Park</h4>
      <Carousel7 /><br />
      <p className="para">
        Kakadu National Park is a protected area in the Northern Territory of Australia, 171 km (106 mi) southeast of Darwin. It is a World Heritage Site.

        The park is located within the Alligator Rivers Region of the Northern Territory. It covers an area of 19,804 km2 (7,646 sq mi), extending nearly 200 kilometres (124 mi) from north to south and over 100 kilometres (62 mi) from east to west. It is the size of Wales, about one-third the size of Tasmania, and nearly half the size of Switzerland. The Ranger Uranium Mine, one of the most productive uranium mines in the world, is surrounded by the park.
      </p><br /><br />

      <h4 className="heading">Great Ocean Road</h4>
      <Carousel8 /><br />
      <p className="para">
        The Great Ocean Road is an Australian National Heritage listed 243-kilometre (151 mi) stretch of road along the south-eastern coast of Australia between the Victorian cities of Torquay and Allansford. Built by returned soldiers between 1919 and 1932 and dedicated to soldiers killed during World War I, the road is the world's largest war memorial. Winding through varying terrain along the coast and providing access to several prominent landmarks, including the Twelve Apostles limestone stack formations, the road is an important tourist attraction in the region.
      </p><br /><br />

      <h4 className="heading">Kangaroo Island</h4>
      <Carousel9 /><br />
      <p className="para">
        Kangaroo Island, also known as Karta Pintingga (literally 'Island of the Dead' in the language of the Kaurna people), is Australia's third-largest island, after Tasmania and Melville Island. It lies in the state of South Australia, 112 km (70 mi) southwest of Adelaide. Its closest point to the mainland is Snapper Point in Backstairs Passage, which is 13.5 km (8.4 mi) from the Fleurieu Peninsula.
      </p><br /><br />

      <h4 className="heading">Cradle Mountain-Lake St. Clair National Park</h4>
      <Carousel10 /><br />
      <p className="para">
        Cradle Mountain-Lake St Clair National Park is located in the Central Highlands area of Tasmania (Australia), 165 kilometres (103 mi) northwest of Hobart. The park contains many walking trails, and is where hikes along the well-known Overland Track usually begin. Major features are Cradle Mountain and Barn Bluff in the northern end, Mount Pelion East, Mount Pelion West, Mount Oakleigh and Mount Ossa in the middle and Lake St Clair in the southern end of the park. The park is part of the Tasmanian Wilderness World Heritage Area.
      </p><br /><br />
    </div>
  );
};

export default Australia_beautiful_place;