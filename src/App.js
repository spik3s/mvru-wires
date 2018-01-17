import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainHeader from './components/MainHeader';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Capacity from './pages/Capacity';
import Impact from './pages/Impact';


const App = () => (
  <Router>
    <div className="App">

      <MainHeader />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/capacity" component={Capacity} />
      <Route exact path="/impact" component={Impact} />

      <footer className="container">
        <p>&copy; Company 2017</p>
      </footer>
    </div>
  </Router>
);


export default App;
