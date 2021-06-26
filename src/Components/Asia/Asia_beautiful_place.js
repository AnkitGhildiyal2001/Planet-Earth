import React, { useEffect, useState } from "react";

import Flickity from "react-flickity-component";

import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import './Asia_beautiful_place.css';

 

import "./styles.css";

import "./flickity.css";

import Awat1 from './Asia_place/Awat1.png';
import Awat2 from './Asia_place/Awat2.png';
 import Awat3 from './Asia_place/Awat3.png';
import Fc1 from './Asia_place/Fc1.png';
import  Fc2 from './Asia_place/Fc2.png';
import  Fc3 from './Asia_place/Fc3.png';
import GWOC1 from './Asia_place/GWOC1.png';
import GWOC2 from './Asia_place/GWOC2.png';
import GWOC3 from './Asia_place/GWOC3.png';
import Hbay1 from './Asia_place/Hbay1.png';
import Hbay2 from './Asia_place/Hbay2.png';
import Hbay3 from './Asia_place/Hbay3.png';
 import IL1 from './Asia_place/IL1.png';
import IL2 from './Asia_place/IL2.png';
import IL3 from './Asia_place/IL3.png';
import Lisl1 from './Asia_place/Lisl1.png';
import Lisl2  from './Asia_place/Lisl2.png';
import Lisl3  from './Asia_place/Lisl3.png';
import Mbat1 from './Asia_place/Mbat1.png';
import Mbat2 from './Asia_place/Mbat2.png';
import Mbat3 from './Asia_place/Mbat3.png';
import Mki1 from './Asia_place/Mki1.png';
import Mki2 from './Asia_place/Mki2.png';
import Mki3 from './Asia_place/Mki3.png';
import php1 from './Asia_place/php1.png';
import php2 from './Asia_place/php2.png';
import php3 from './Asia_place/php3.png';
import Tmal1 from './Asia_place/Tmal1.png';
import Tmal2 from './Asia_place/Tmal2.png';
import Tmal3 from './Asia_place/Tmal3.png';


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

      <img src={Awat1} width='80%' alt='...' />

      <img src={Awat2} width='80%' alt='...' />

      <img src={Awat3} width='80%' alt='...' />

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

      <img src={Fc1} width='80%' alt='...' />

      <img src={Fc2} width='80%' alt='...' />

      <img src={Fc3} width='80%' alt='...' />

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

      <img src={Hbay1} width='80%' alt='...' />

      <img src={Hbay2} width='80%' alt='...' />

      <img src={Hbay3} width='80%Nat' alt='...' />

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

      <img src={Tmal1} width='80%' alt='...' />

      <img src={Tmal2} width='80%' alt='...' />

      <img src={Tmal3} width='80%' alt='...' />

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

      <img src={Mki1} width='80%' alt='...' />

      <img src={Mki2} width='80%' alt='...' />

      <img src={Mki3} width='80%' alt='...' />

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

      <img src={GWOC1} width='80%' alt='...' />

      <img src={GWOC2} width='80%' alt='...' />

      <img src={GWOC3} width='80%' alt='...' />

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

      <img src={php1} width='80%' alt='...' />

      <img src={php2} width='80%' alt='...' />

      <img src={php3} width='80%' alt='...' />

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

      <img src={IL1} width='80%' alt='...' />

      <img src={IL2} width='80%' alt='...' />

      <img src={IL3} width='80%' alt='...' />

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

      <img src={Mbat1} width='80%' alt='...' />

      <img src={Mbat2} width='80%' alt='...' />

      <img src={Mbat3} width='80%' alt='...' />

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

      <img src={Lisl1} width='80%' alt='...' />

      <img src={Lisl2} width='80%' alt='...' />

      <img src={Lisl3} width='80%' alt='...' />

    </Flickity>

  );

};

 

const Asia_beautiful_place = () => {

 

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

      <h2 className="Super">10 OF THE MOST BEAUTIFUL PLACES IN ASIA</h2>

      <br />

 

      <h4 className="heading">Angkor Wat</h4>

      <Carousel1 /><br />

      <p className="para">

        Angkor Wat, located in northwest Cambodia, is the largest religious structure (temple complex) in the world by land area, measuring 162.6 hectares (1.626 km2; 402 acres). At the centre of the temple stands a quincunx of four towers surrounding a central spire that rises to a height of 65 m (213 ft) above the ground. The temple has three rectangular galleries, each raised above the next. It lies within an outer wall 3.6 kilometres (2.2 mi) long and a moat more than 5 kilometres (3 mi) long

      </p><br /><br />

 

      <h4 className="heading">Forbidden City</h4>

      <Carousel2 /><br />

      <p className="para">

        The Forbidden City is a palace complex in Dongcheng District, Beijing, China, at the center of the Imperial City of Beijing. It is surrounded by numerous opulent imperial gardens and temples including the 22-hectare (54-acre) Zhongshan Park, the sacrificial Imperial Ancestral Temple, the 69-hectare (171-acre) Beihai Park, and the 23-hectare (57-acre) Jingshan Park.

 

        The Forbidden City was constructed from 1406 to 1420, and was the former Chinese imperial palace and winter residence of the Emperor of China from the Ming dynasty (since the Yongle Emperor) to the end of the Qing dynasty, between 1420 and 1924.

      </p><br /><br />

 

      <h4 className="heading">Ha Long Bay</h4>

      <Carousel3 /><br />

      <p className="para">

        Hạ Long Bay or Halong Bay is a UNESCO World Heritage Site and popular travel destination in Quảng Ninh Province, Vietnam. The name Hạ Long means "descending dragon". Administratively, the bay belongs to Hạ Long city, Cẩm Phả city, and is a part of Vân Đồn District. The bay features thousands of limestone karsts and isles in various shapes and sizes. Ha Long Bay is a center of a larger zone which includes Bai Tu Long Bay to the northeast, and Cát Bà Island to the southwest. These larger zones share a similar geological, geographical, geomorphological, climate, and cultural characters.

      </p><br /><br />

 

      <h4 className="heading">Taj Mahal</h4>

      <Carousel4 /><br />

      <p className="para">

        The Taj Mahal originally the Rauza-i-munawwara is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.

      </p><br /><br />

 

      <h4 className="heading">Mount Kinabalu</h4>

      <Carousel5 /><br />

      <p className="para">

        Mount Kinabalu is the highest mountain in Borneo, the Malay Archipelago and Malaysia. With an elevation of 13,435 ft (4,095 m), it is third-highest peak of an island on Earth, and 20th most prominent mountain in the world by topographic prominence. The mountain is located in Ranau district, West Coast Division of Sabah, Malaysia. It is protected as Kinabalu Park, a World Heritage Site.

        The mountain and its surroundings are among the most important biological sites in the world, with between 5,000 and 6,000 species of plants, 326 species of birds, and more than 100 mammalian species identified. Among this rich collection of wildlife are famous species such as the gigantic Rafflesia plants and orangutans. Mount Kinabalu has been accorded UNESCO World Heritage status.

      </p><br /><br />

 

      <h4 className="heading">Great Wall of China</h4>

      <Carousel6 /><br />

      <p className="para">

        The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The most well-known sections of the wall were built by the Ming dynasty (1368–1644).

      </p><br /><br />

 

      <h4 className="heading">Phi Phi Islands</h4>

      <Carousel7 /><br />

      <p className="para">

        The Phi Phi Islands are an island group in Thailand between the large island of Phuket and the Straits of Malacca coast of Thailand. The islands are administratively part of Krabi Province. Ko Phi Phi Don is the largest and most populated island of the group, although the beaches of the second largest island, Ko Phi Phi Le are visited by many people as well. The rest of the islands in the group, including Bida Nok, Bida Nai, and Bamboo Island (Ko Mai Phai), are not much more than large limestone rocks jutting out of the sea. The islands are reachable by speedboats or long-tail boats most often from Krabi town or from piers in Phuket Province.

      </p><br /><br />

 

      <h4 className="heading">Inle Lake</h4>

      <Carousel8 /><br />

      <p className="para">

        Inle Lake, a freshwater lake located in the Nyaungshwe Township of Shan State, part of Shan Hills in Myanmar (Burma). It is the second largest lake in Myanmar with an estimated surface area of 44.9 square miles (116 km2), and one of the highest at an elevation of 2,900 feet (880 m). During the dry season, the average water depth is 7 feet (2.1 m), with the deepest point being 12 feet (3.7 m). During the rainy season, this can increase by 5 feet (1.5 m).

      </p><br /><br />

 

      <h4 className="heading">Mount Batur</h4>

      <Carousel9 /><br />

      <p className="para">

        Mount Batur (Gunung Batur) is an active volcano located at the center of two concentric calderas north west of Mount Agung on the island of Bali, Indonesia. The south east side of the larger 10×13 km caldera contains a caldera lake. The inner 7.5-kilometer-wide caldera, which was formed during emplacement of the Bali (or Ubud) ignimbrite, has been dated at about 23,670 and 28,500 years ago.

 

        The first documented eruption was in 1804 and the most recent was in 2000.

      </p><br /><br />

 

      <h4 className="heading">Lantau Island</h4>

      <Carousel10 /><br />

      <p className="para">

        Lantau Island (also Lantao Island, Lan Tao) is the largest island in Hong Kong, located West of Hong Kong Island and the Kowloon Peninsula, and is part of the New Territories. Administratively, most of Lantau Island is part of the Islands District of Hong Kong. A small northeastern portion of the island is located in the Tsuen Wan District.

 

        Originally an island with fishing villages, it has been developed since the late 20th century with the construction of Tung Chung New Town on its north-western coast and the completion of several major infrastructure projects, including Lantau Link (1997), Hong Kong International Airport (1998), Hong Kong Disneyland (2005) and Ngong Ping 360 (2006).

      </p><br /><br />

    </div>

  );

};

 

export default Asia_beautiful_place;
