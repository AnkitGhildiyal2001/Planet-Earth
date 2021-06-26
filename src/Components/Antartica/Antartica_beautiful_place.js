import React, { useEffect, useState } from "react";

import Flickity from "react-flickity-component";

import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import './Antartica_beautiful_place.css';

import './Antartica.css';



import "./styles.css";

import "./flickity.css";

import Apen1 from './Antartica_place/Apen1.png';
import Apen2 from './Antartica_place/Apen2.png';
import Apen3 from './Antartica_place/Apen3.png';
import Dis1 from './Antartica_place/Apen1.png';
import Dis2 from './Antartica_place/Disland1.png';
import Dis3 from './Antartica_place/Disland2.png';
import dra1 from './Antartica_place/dra1.png';
import dra2 from './Antartica_place/dra2.png';
import dra3 from './Antartica_place/dra3.png';
import Fis1 from './Antartica_place/Fislands1.png';
import Fis2 from './Antartica_place/Fislands2.png';
import Fis3 from './Antartica_place/Fislands3.png';
import geo1 from './Antartica_place/geo1.png';
import geo2 from './Antartica_place/geo2.png';
import geo3 from './Antartica_place/geo3.png';
import lem1 from './Antartica_place/lem1.png';
import lem2 from './Antartica_place/lem2.png';
import lem3 from './Antartica_place/lem3.png';
import ros1 from './Antartica_place/ros1.png';
import ros2 from './Antartica_place/ros2.png';
import ros3 from './Antartica_place/ros3.png';
import Soi1 from './Antartica_place/So-islands1.png';
import Soi2 from './Antartica_place/So-islands2.png';
import Soi3 from './Antartica_place/So-islands3.png';
import ssi1 from './Antartica_place/ssislands1.png';
import ssi2 from './Antartica_place/ssislands2.png';
import ssi3 from './Antartica_place/ssislands3.png';
import zav1 from './Antartica_place/zav1.png';
import zav2 from './Antartica_place/zav2.png';
import zav3 from './Antartica_place/zav3.png';



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

      <img src={geo1} width='80%' alt='...' />

      <img src={geo2} width='80%' alt='...' />

      <img src={geo3} width='80%' alt='...' />

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

      <img src={zav1} width='80%' alt='..' />

      <img src={zav2} width='80%' alt='...' />

      <img src={zav3} width='80%' alt='...' />

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

      <img src={dra1} width='80%' alt='...' />

      <img src={dra2} width='80%' alt='...' />

      <img src={dra3} width='80%Nat' alt='...' />

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

      <img src={lem1} width='80%' alt='...' />

      <img src={lem2} width='80%' alt='...' />

      <img src={lem3} width='80%' alt='...' />

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

      <img src={ros1} width='80%' alt='...' />

      <img src={ros2} width='80%' alt='...' />

      <img src={ros3} width='80%' alt='...' />

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

      <img src={ssi1} width='80%' alt='...' />

      <img src={ssi2} width='80%' alt='...' />

      <img src={ssi3} width='80%' alt='...' />

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

      <img src={Dis1} width='80%' alt='...' />

      <img src={Dis2} width='80%' alt='...' />

      <img src={Dis3} width='80%' alt='...' />

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

      <img src={Apen1} width='80%' alt='...' />

      <img src={Apen2} width='80%' alt='...' />

      <img src={Apen3} width='80%' alt='..' />

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

      <img src={Soi1} width='80%' alt='...' />

      <img src={Soi2} width='80%' alt='...' />

      <img src={Soi3} width='80%' alt='...' />

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

      <img src={Fis1} width='80%' alt='...' />

      <img src={Fis2} width='80%' alt='...' />

      <img src={Fis3} width='80%' alt='...' />

    </Flickity>

  );

};



const Antartica_beautiful_place = () => {



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

      <h2 className="Super">10 OF THE MOST BEAUTIFUL PLACES IN ANTARTICA</h2>

      <br />



      <h4 className="heading">South Georgia Island</h4>

      <Carousel1 /><br />

      <p className="para">

        South Georgia and the South Sandwich Islands (SGSSI) is a British Overseas Territory in the southern Atlantic Ocean. It is a remote and inhospitable collection of islands, consisting of South Georgia Island and a chain of smaller islands known as the South Sandwich Islands. South Georgia is 165 kilometres (103 mi) long and 35 kilometres (22 mi) wide and is by far the largest island in the territory. The South Sandwich Islands lie about 700 kilometres (430 mi) southeast of South Georgia. The territory's total land area is 3,903 km2 (1,507 sq mi). The Falkland Islands are about 1,300 kilometres (810 mi) west from its nearest point.

      </p><br /><br />



      <h4 className="heading">Zavodovski Island</h4>

      <Carousel2 /><br />

      <p className="para">

        Zavodovski Island is an uninhabited volcanic island in the Traversay Islands subgroup of the South Sandwich Islands. It lies 350 kilometres (217 mi) southeast of South Georgia Island. It is the northernmost of the South Sandwich Islands and the nearest to South Georgia.



        The island is home to around a million pairs of breeding chinstrap penguins, which is the largest besides Antarctica.

      </p><br /><br />



      <h4 className="heading">Drake Passage</h4>

      <Carousel3 /><br />

      <p className="para">

        The Drake Passage (referred to as Mar de Hoces ["Hoces Sea"] in Spain and other Spanish speaking countries) is the body of water between South America's Cape Horn, Chile and the South Shetland Islands of Antarctica. It connects the southwestern part of the Atlantic Ocean (Scotia Sea) with the southeastern part of the Pacific Ocean and extends into the Southern Ocean.



        The Drake Passage is considered one of the most treacherous voyages for ships to make. Currents at its latitude meet no resistance from any landmass, and waves top 40 feet (12 m), hence its reputation as "the most powerful convergence of seas".

      </p><br /><br />



      <h4 className="heading">Lemaire Channel</h4>

      <Carousel4 /><br />

      <p className="para">

        Lemaire Channel is a strait off Antarctica, between Kiev Peninsula in the mainland's Graham Land and Booth Island. Nicknamed "Kodak Gap" by some, it is one of the top tourist destinations in Antarctica; steep cliffs hem in the iceberg-filled passage, which is 11 km long and just 1,600 metres wide at its narrowest point.



        It was first seen by the German expedition of 1873-74, but not traversed until December 1898, when the Belgica of the Belgian Antarctic Expedition passed through. Expedition leader Adrien de Gerlache named it for Charles Lemaire (1863-1925), a Belgian explorer of the Congo.

      </p><br /><br />



      <h4 className="heading">Ross Ice Shelf</h4>

      <Carousel5 /><br />

      <p className="para">

        The Ross Ice Shelf is the largest ice shelf of Antarctica (as of 2013 an area of roughly 500,809 square kilometres (193,363 sq mi) and about 800 kilometres (500 mi) across: about the size of France). It is several hundred metres thick. The nearly vertical ice front to the open sea is more than 600 kilometres (370 mi) long, and between 15 and 50 metres (50 and 160 ft) high above the water surface. Ninety percent of the floating ice, however, is below the water surface.



        Most of Ross Ice Shelf is in the Ross Dependency claimed by New Zealand. It floats in, and covers, a large southern portion of the Ross Sea and the entire Roosevelt Island located in the west of the Ross Sea.

      </p><br /><br />



      <h4 className="heading">The South Shetland Islands</h4>

      <Carousel6 /><br />

      <p className="para">

        The South Shetland Islands are a group of Antarctic islands with a total area of 3,687 km2 (1,424 sq mi). They lie about 120 km (75 mi) north of the Antarctic Peninsula, and between 430 km (270 mi) to 900 km (560 mi) southwest from the nearest point of the South Orkney Islands. By the Antarctic Treaty of 1959, the islands' sovereignty is neither recognized nor disputed by the signatories and they are free for use by any signatory for non-military purposes.



        The islands have been claimed by the United Kingdom since 1908 and as part of the British Antarctic Territory since 1962.

      </p><br /><br />



      <h4 className="heading">Deception Island</h4>

      <Carousel7 /><br />

      <p className="para">

        Deception Island is an island in the South Shetland Islands close to the Antarctic Peninsula with a large and safe natural harbour. This island is the caldera of an active volcano, which seriously damaged local scientific stations in 1967 and 1969. The island previously held a whaling station; it is now a tourist destination and scientific outpost, with Argentine and Spanish research bases. While various countries have asserted sovereignty, it is still administered under the Antarctic Treaty System.

      </p><br /><br />



      <h4 className="heading">Antarctic Peninsula</h4>

      <Carousel8 /><br />

      <p className="para">

        The Antarctic Peninsula, known as O'Higgins Land in Chile and Tierra de San Martin in Argentina, and originally as the Palmer Peninsula in the US and Graham Land in the United Kingdom, is the northernmost part of the mainland of Antarctica.



        The Antarctic Peninsula is part of the larger peninsula of West Antarctica, protruding 1,300 km (810 miles) from a line between Cape Adams (Weddell Sea) and a point on the mainland south of Eklund Islands.

      </p><br /><br />



      <h4 className="heading">South Orkney Islands</h4>

      <Carousel9 /><br />

      <p className="para">

        The South Orkney Islands are a group of islands in the Southern Ocean, about 604 kilometres (375 mi) north-east of the tip of the Antarctic Peninsula and 844 kilometres (524 mi) south-west of South Georgia Island. They have a total area of about 620 square kilometres (240 sq mi). The islands are claimed both by Britain (as part of the British Antarctic Territory since 1962, previously as a Falkland Islands Dependency), and by Argentina as part of Argentine Antarctica. Under the 1959 Antarctic Treaty, sovereignty claims are held in abeyance.

      </p><br /><br />



      <h4 className="heading">Falkland Islands</h4>

      <Carousel10 /><br />

      <p className="para">

        The Falkland Islands is an archipelago in the South Atlantic Ocean on the Patagonian Shelf. The principal islands are about 300 miles (483 kilometres) east of South America's southern Patagonian coast and about 752 miles (1,210 kilometres) from the northern tip of the Antarctic Peninsula, at a latitude of about 52°S. The archipelago, with an area of 4,700 square miles (12,000 square kilometres), comprises East Falkland, West Falkland, and 776 smaller islands. As a British overseas territory, the Falklands have internal self-governance, and the United Kingdom takes responsibility for their defence and foreign affairs. The capital and largest settlement is Stanley on East Falkland.

      </p><br /><br />

    </div>

  );

};



export default Antartica_beautiful_place;
