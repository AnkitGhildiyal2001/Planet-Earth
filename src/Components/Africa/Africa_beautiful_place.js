import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { Link, NavLink } from 'react-router-dom';
import './Africa.css';
import { Navbar, Nav } from 'react-bootstrap';
import './Africa_beautiful_place.css';

import "./styles.css";
import "./flickity.css";

import nam1 from "./Africa_place/nam1.png";
import nam2 from "./Africa_place/nam2.png";
import nam3 from "./Africa_place/nam3.png";

import bly1 from "./Africa_place/bly1.png";
import bly2 from "./Africa_place/bly2.png";
import bly3 from "./Africa_place/bly3.png";

import Fra1 from "./Africa_place/Fra1.png";
import Fra2 from "./Africa_place/Fra2.png";
import Fra3 from "./Africa_place/Fra3.png";

import Nat1 from "./Africa_place/Nat1.png";
import Nat2 from "./Africa_place/Nat2.png";
import Nat3 from "./Africa_place/Nat3.png";

import ngo1 from "./Africa_place/ngo1.png";
import ngo2 from "./Africa_place/ngo2.png";
import ngo3 from "./Africa_place/ngo3.png";

import oka1 from "./Africa_place/oka1.png";
import oka2 from "./Africa_place/oka2.png";
import oka3 from "./Africa_place/oka3.png";

import pyra1 from "./Africa_place/pyra1.png";
import pyra2 from "./Africa_place/pyra2.png";
import pyra3 from "./Africa_place/pyra3.png";

import ser1 from "./Africa_place/ser1.png";
import ser2 from "./Africa_place/ser2.png";
import ser3 from "./Africa_place/ser3.png";

import tabmo1 from "./Africa_place/tabmo1.png";
import tabmo2 from "./Africa_place/tabmo2.png";
import tabmo3 from "./Africa_place/tabmo3.png";

import Zan1 from "./Africa_place/Zan1.png";
import Zan2 from "./Africa_place/Zan2.png";
import Zan3 from "./Africa_place/Zan3.png";


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
      <img src={nam1} width='80%' alt='...' />
      <img src={nam2} width='80%' alt='...' />
      <img src={nam3} width='80%' alt='...' />
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
      <img src={ngo1} width='80%' alt='...' />
      <img src={ngo2} width='80%' alt='...' />
      <img src={ngo3} width='80%' alt='...' />
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
      <img src={tabmo1} width='80%' alt='...' />
      <img src={tabmo2} width='80%' alt='...' />
      <img src={tabmo3} width='80%Nat' alt='...' />
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
      <img src={Nat1} width='80%' alt='...' />
      <img src={Nat2} width='80%' alt='...' />
      <img src={Nat3} width='80%' alt='...' />
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
      <img src={pyra1} width='80%' alt='...' />
      <img src={pyra2} width='80%' alt='...' />
      <img src={pyra3} width='80%' alt='...' />
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
      <img src={oka1} width='80%' alt='...' />
      <img src={oka2} width='80%' alt='...' />
      <img src={oka3} width='80%' alt='...' />
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
      <img src={bly1} width='80%' alt='...' />
      <img src={bly2} width='80%' alt='...' />
      <img src={bly3} width='80%' alt='...' />
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
      <img src={Fra1} width='80%' alt='...' />
      <img src={Fra2} width='80%' alt='...' />
      <img src={Fra3} width='80%' alt='...' />
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
      <img src={ser1} width='80%' alt='...' />
      <img src={ser2} width='80%' alt='...' />
      <img src={ser3} width='80%' alt='...' />
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
      <img src={Zan1} width='80%' alt='...' />
      <img src={Zan2} width='80%' alt='...' />
      <img src={Zan3} width='80%' alt='...' />
    </Flickity>
  );
};

const Africa_beautiful_place = () => {

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
      <h2 className="Super">10 OF THE MOST BEAUTIFUL PLACES IN AFRICA</h2>
      <br />

      <h4 className="heading">Sossusvlei Dunes & Deadvlei, Namibia</h4>
      <Carousel1 /><br />
      <p className="para">
        Sossusvlei (sometimes written Sossus Vlei) is a salt and clay pan surrounded by high red dunes, located in the southern part of the Namib Desert, in the Namib-Naukluft National Park of Namibia. The name "Sossusvlei" is often used in an extended meaning to refer to the surrounding area (including other neighbouring vleis such as Deadvlei and other high dunes), which is one of the major visitor attractions of Namibia.
      </p><br /><br />

      <h4 className="heading">Ngorongoro Crater, Tanzania</h4>
      <Carousel2 /><br />
      <p className="para">
        The Ngorongoro Conservation Area is a protected area and a World Heritage Site located 180 km (110 mi) west of Arusha in the Crater Highlands area of Tanzania. The area is named after Ngorongoro Crater, a large volcanic caldera within the area. The conservation area is administered by the Ngorongoro Conservation Area Authority, an arm of the Tanzanian government, and its boundaries follow the boundary of the Ngorongoro Division of the Arusha Region.
      </p><br /><br />

      <h4 className="heading">Table Mountain, South Africa </h4>
      <Carousel3 /><br />
      <p className="para">
        Table Mountain is a flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa. It is a significant tourist attraction, with many visitors using the cableway or hiking to the top. The mountain forms part of the Table Mountain National Park, and part of the lands formerly ranged by Khoe-speaking clans, such as the !Uriǁʼaes (the "High Clan"). It is home to a large array of mostly endemic fauna and flora.
      </p><br /><br />

      <h4 className="heading">Virunga National Park, DRC</h4>
      <Carousel4 /><br />
      <p className="para">
        Virunga National Park is a national park in the Albertine Rift Valley in the eastern part of the Democratic Republic of the Congo. It was created in 1925 and is among the first protected areas in Africa. In elevation, it ranges from 680 m (2,230 ft) in the Semliki River valley to 5,109 m (16,762 ft) in the Rwenzori Mountains. From north to south it extends about 300 km (190 mi), largely along the international borders with Uganda and Rwanda in the east. It covers an area of 8,090 km2 (3,120 sq mi).
      </p><br /><br />

      <h4 className="heading">Giza Pyramids, Egypt</h4>
      <Carousel5 /><br />
      <p className="para">
        The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.

        Egyptologists conclude that the pyramid was built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu and estimate that it was built in the 26th century BC during a period of around 27 years.
      </p><br /><br />

      <h4 className="heading">Okavango Delta, Botswana</h4>
      <Carousel6 /><br />
      <p className="para">
        The Okavango Delta (or Okavango Grassland) (formerly spelled "Okovango" or "Okovanggo") in Botswana is a swampy inland delta formed where the Okavango River reaches a tectonic trough at an altitude of 930–1,000 m in the central part of the endorheic basin of the Kalahari. All the water reaching the delta is ultimately evaporated and transpired and does not flow into any sea or ocean. Each year, about 11 cubic kilometres (2.6 cu mi) of water spread over the 6,000–15,000 km2 (2,300–5,800 sq mi) area. Some flood waters drain into Lake Ngami. The area was once part of Lake Makgadikgadi, an ancient lake that had mostly dried up by the early Holocene.
      </p><br /><br />

      <h4 className="heading">Blyde River Canyon, South Africa</h4>
      <Carousel7 /><br />
      <p className="para">
        The Blyde River Canyon is a 26km long Canyon located in Mpumalanga, South Africa. It is the one of the larger canyons on Earth but much smaller than those of Asia , the Grand Canyon and the Fish River Canyon. Unlike the Grand and Fish River Canyon, the Blyde River Canyon is a "green canyon" which is dominated by subtropical vegetation.

        The Blyde River Canyon passes a rock formation known as the "Three Rondavels". So named as the formation resembles three African-style houses or rondavels. This canyon is part of the Panorama Route. This route starts at the town Graskop and includes God's Window, the Pinnacle and Bourke's Luck Potholes.
      </p><br /><br />

      <h4 className="heading">Franschhoek, South Africa</h4>
      <Carousel8 /><br />
      <p className="para">
        Franschhoek is a small town in the Western Cape Province and one of the oldest towns of the Republic of South Africa. It is about 75 kilometres from Cape Town and has a population of slightly over 17,000 people. Since 2000, it has been incorporated into Stellenbosch Municipality.
        Franschhoek is notable for having some of the top restaurants in the country within its borders. This fact, together with the strong wine culture, and pristine natural and architectural beauty has made Franschhoek into what many describe as the "food and wine capital" of South Africa.
      </p><br /><br />

      <h4 className="heading">Serengeti National Park, Tanzania</h4>
      <Carousel9 /><br />
      <p className="para">
        The Serengeti National Park is a national park in Tanzania that stretches over 14,763 km2 (5,700 sq mi). It is located in the Mara and Simiyu regions and contains 1.5 million ha of savanna. It is well known for the largest annual migration of over 1.5 million blue wildebeest and 250,000 zebra and for its numerous Nile crocodile and honey badger. The park is the centerpiece of the Serengeti Ecosystem which is twice as large and includes the neighboring Ngorongoro Conservation Area, and Maasai Mara National Reserve in bordering Kenya.
      </p><br /><br />

      <h4 className="heading">Zanzibar, Tanzania</h4>
      <Carousel10 /><br />
      <p className="para">
        Zanzibar is an insular autonomous region of Tanzania. It is composed of the Zanzibar Archipelago in the Indian Ocean, 25–50 kilometres (16–31 mi) off the coast of the mainland, and consists of many small islands and two large ones: Unguja (the main island, referred to informally as Zanzibar) and Pemba Island. The capital is Zanzibar City, located on the island of Unguja. Its historic centre is Stone Town, a World Heritage Site.
      </p><br /><br />
    </div>
  );
};

export default Africa_beautiful_place;