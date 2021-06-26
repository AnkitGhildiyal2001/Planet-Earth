import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Continents from './Components/Continents/Continents';
import Africa from './Components/Africa/Africa';
import SouthAmerica from './Components/SouthAmerica/SouthAmerica';
import NorthAmerica from './Components/NorthAmerica/NorthAmerica';
import Europe from './Components/Europe/Europe';
import Asia from './Components/Asia/Asia';
import Australia from './Components/Australia/Australia';
import Antartica from './Components/Antartica/Antartica';
import Africa_beautiful_place from './Components/Africa/Africa_beautiful_place';
import Antartica_beautiful_place from './Components/Antartica/Antartica_beautiful_place';
import Asia_beautiful_place from './Components/Asia/Asia_beautiful_place';
import Australia_beautiful_place from './Components/Australia/Australia_beautiful_place';
import Europe_beautiful_place from './Components/Europe/Europe_beautiful_place';
import NorthAmerica_beautiful_place from './Components/NorthAmerica/NorthAmerica_beautiful_place';
import SouthAmerica_beautiful_place from './Components/SouthAmerica/SouthAmerica_beautiful_place';
import Map from './Components/Map/Map';
import AboutUs from './Components/AboutUs/AboutUs';
import Facts from './Components/Facts/Facts';

function App () {
  return (

    <HashRouter basename="/">

    <div className="App">
      <Switch>


        <Route path={['/', '/home']} exact component={Home} />

        <Route path="/Continents" component={Continents} />

        <Route path="/Map" component={Map} />

        <Route path="/AboutUs" component={AboutUs} />

        <Route path="/Facts" component={Facts} />

        <Route path="/Africa" component={Africa} />
        <Route path="/SouthAmerica" component={SouthAmerica} />
        <Route path="/NorthAmerica" component={NorthAmerica} />
        <Route path="/Europe" component={Europe} />
        <Route path="/Asia" component={Asia} />
        <Route path="/Australia" component={Australia} />
        <Route path="/Antartica" component={Antartica} />

        <Route path="/Africa_beautiful_place" component={Africa_beautiful_place} />
        <Route path="/Antartica_beautiful_place" component={Antartica_beautiful_place} />
        <Route path="/Asia_beautiful_place" component={Asia_beautiful_place} />
        <Route path="/Australia_beautiful_place" component={Australia_beautiful_place} />
        <Route path="/Europe_beautiful_place" component={Europe_beautiful_place} />
        <Route path="/NorthAmerica_beautiful_place" component={NorthAmerica_beautiful_place} />
        <Route path="/SouthAmerica_beautiful_place" component={SouthAmerica_beautiful_place} />

      </Switch>
    </div>
  </HashRouter>
  );
}

export default App;