import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NorthAmerica_beautiful_place.css';

import "./styles.css";
import "./flickity.css";

import bar1 from "./NorthAmerica_place/bar1.png";
import bar2 from "./NorthAmerica_place/bar2.png";
import bar3 from "./NorthAmerica_place/bar3.png";

import cal1 from "./NorthAmerica_place/cal1.png";
import cal2 from "./NorthAmerica_place/cal2.png";
import cal3 from "./NorthAmerica_place/cal3.png";

import gra1 from "./NorthAmerica_place/gra1.png";
import gra2 from "./NorthAmerica_place/gra2.png";
import gra3 from "./NorthAmerica_place/gra3.png";

import nia1 from "./NorthAmerica_place/nia1.png";
import nia2 from "./NorthAmerica_place/nia2.png";
import nia3 from "./NorthAmerica_place/nia3.png";

import que1 from "./NorthAmerica_place/que1.png";
import que2 from "./NorthAmerica_place/que2.png";
import que3 from "./NorthAmerica_place/que3.png";

import sed1 from "./NorthAmerica_place/sed1.png";
import sed2 from "./NorthAmerica_place/sed2.png";
import sed3 from "./NorthAmerica_place/sed3.png";

import spr1 from "./NorthAmerica_place/spr1.png";
import spr2 from "./NorthAmerica_place/spr2.png";
import spr3 from "./NorthAmerica_place/spr3.png";

import sta1 from "./NorthAmerica_place/sta1.png";
import sta2 from "./NorthAmerica_place/sta2.png";
import sta3 from "./NorthAmerica_place/sta3.png";

import vic1 from "./NorthAmerica_place/vic1.png";
import vic2 from "./NorthAmerica_place/vic2.png";
import vic3 from "./NorthAmerica_place/vic3.png";

import wai1 from "./NorthAmerica_place/wai1.png";
import wai2 from "./NorthAmerica_place/wai2.png";
import wai3 from "./NorthAmerica_place/wai3.png";

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
      <img src={gra1} width='80%' alt='...' />
      <img src={gra2} width='80%' alt='...' />
      <img src={gra3} width='80%' alt='...' />
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
      <img src={nia1} width='80%' alt='...' />
      <img src={nia2} width='80%' alt='...' />
      <img src={nia3} width='80%' alt='...' />
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
      <img src={sta1} width='80%' alt='...' />
      <img src={sta2} width='80%' alt='...' />
      <img src={sta3} width='80%Nat' alt='...' />
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
      <img src={wai1} width='80%' alt='...' />
      <img src={wai2} width='80%' alt='...' />
      <img src={wai3} width='80%' alt='...' />
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
      <img src={spr1} width='80%' alt='...' />
      <img src={spr2} width='80%' alt='...' />
      <img src={spr3} width='80%' alt='...' />
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
      <img src={que1} width='80%' alt='...' />
      <img src={que2} width='80%' alt='...' />
      <img src={que3} width='80%' alt='...' />
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
      <img src={cal1} width='80%' alt='...' />
      <img src={cal2} width='80%' alt='...' />
      <img src={cal3} width='80%' alt='...' />
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
      <img src={vic1} width='80%' alt='...' />
      <img src={vic2} width='80%' alt='...' />
      <img src={vic3} width='80%' alt='...' />
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
      <img src={sed1} width='80%' alt='...' />
      <img src={sed2} width='80%' alt='...' />
      <img src={sed3} width='80%' alt='...' />
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
      <img src={bar1} width='80%' alt='...' />
      <img src={bar2} width='80%' alt='...' />
      <img src={bar3} width='80%' alt='...' />
    </Flickity>
  );
};

const NorthAmerica_beautiful_place = () => {

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
      <h2 className="Super">10 OF THE MOST BEAUTIFUL PLACES IN NORTH AMERICA</h2>
      <br />

      <h4 className="heading">Grand Canyon</h4>
      <Carousel1 /><br />
      <p className="para">
        The Grand Canyon  is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters).

        The canyon and adjacent rim are contained within Grand Canyon National Park, the Kaibab National Forest, Grand Canyon–Parashant National Monument, the Hualapai Indian Reservation, the Havasupai Indian Reservation and the Navajo Nation.
      </p><br /><br />

      <h4 className="heading">Niagara Falls</h4>
      <Carousel2 /><br />
      <p className="para">
        Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, also known as Canadian Falls, which straddles the international border of the two countries. The smaller American Falls and Bridal Veil Falls lie within the United States. Bridal Veil Falls is separated from Horseshoe Falls by Goat Island and from American Falls by Luna Island, with both islands situated in New York.
      </p><br /><br />

      <h4 className="heading">Statue of Liberty</h4>
      <Carousel3 /><br />
      <p className="para">
        The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.
      </p><br /><br />

      <h4 className="heading">Wailea, Hawaii</h4>
      <Carousel4 /><br />
      <p className="para">
        Wailea is a census-designated place (CDP) in Maui County, Hawaiʻi, United States. As of the 2010 census, it had a population of 5,938. Prior to 2010, the area was part of the Wailea-Makena census-designated place. The community was developed in 1971 by a partnership of Alexander & Baldwin and Northwestern Mutual.
      </p><br /><br />

      <h4 className="heading">Springdale, Utah</h4>
      <Carousel5 /><br />
      <p className="para">
        Springdale is a town in Washington County, Utah, United States. The population was 529 at the 2010 census. It is located immediately outside the boundaries of Zion National Park, and is oriented around the resulting tourist industry. It was originally settled as a Mormon farming community in 1862 by evacuees from the flooding of nearby Northrop. Springdale was named one of the 20 'prettiest towns' in the United States by Forbes Traveler in 2008.
      </p><br /><br />

      <h4 className="heading">Quebec City, Quebec</h4>
      <Carousel6 /><br />
      <p className="para">
        Quebec City is the capital city of the Canadian province of Quebec. As of July 2016 the city had a population of 531,902, and the metropolitan area had a population of 800,296. It is the eleventh-largest city and the seventh-largest metropolitan area in Canada. It is also the second-largest city in the province after Montreal.
        The Algonquian people had originally named the area Kébec, an Algonquin word meaning "where the river narrows", because the Saint Lawrence River narrows proximate to the promontory of Quebec and its Cape Diamant.
      </p><br /><br />

      <h4 className="heading">Calgary, Alberta</h4>
      <Carousel7 /><br />
      <p className="para">
        Calgary is a city in the western Canadian province of Alberta. It is situated at the confluence of the Bow River and the Elbow River in the south of the province, in an area of foothills and prairie, about 80 km (50 mi) east of the front ranges of the Canadian Rockies, roughly 299 km (186 mi) south of the provincial capital of Edmonton and approximately 240 km (150 mi) north of the Canada–United States border. The city anchors the south end of the Statistics Canada-defined urban area, the Calgary–Edmonton Corridor.
      </p><br /><br />

      <h4 className="heading">Victoria, British Columbia</h4>
      <Carousel8 /><br />
      <p className="para">
        Victoria is the capital city of the Canadian province of British Columbia, on the southern tip of Vancouver Island off Canada's Pacific coast. The city has a population of 85,792, and the Greater Victoria Area has a population of 367,770. Victoria is the 7th-most densely populated city in Canada with 4,405.8 inhabitants per square kilometre (11,411/sq mi).

        Victoria is the southernmost major city in Western Canada and is about 100 km (60 mi) southwest from British Columbia's largest city of Vancouver on the mainland.
      </p><br /><br />

      <h4 className="heading">Sedona, Arizona</h4>
      <Carousel9 /><br />
      <p className="para">
        Sedona is a city that straddles the county line between Coconino and Yavapai counties in the northern Verde Valley region of the U.S. state of Arizona. As of the 2010 census, its population was 10,031. It lies within the Coconino National Forest.

        Sedona's main attraction is its array of red sandstone formations. The formations appear to glow in brilliant orange and red when illuminated by the rising or setting sun. The red rocks form a popular backdrop for many activities, ranging from spiritual pursuits to the hundreds of hiking and mountain biking trails.
      </p><br /><br />

      <h4 className="heading">Bar Harbor, Maine</h4>
      <Carousel10 /><br />
      <p className="para">
        Bar Harbor is a town on Mount Desert Island in Hancock County, Maine, United States. As of the 2010 census, its population is 5,235. Bar Harbor is a popular tourist destination in the Down East region of Maine and home to the College of the Atlantic, Jackson Laboratory, Bar Harbor Bank & Trust, and MDI Biological Laboratory (Salisbury Cove village). Until a catastrophic fire in 1947, the town was a noted summer colony for the wealthy.
      </p><br /><br />
    </div>
  );
};

export default NorthAmerica_beautiful_place;