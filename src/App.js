import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Capacity from './pages/Capacity';
import Impact from './pages/Impact';
import People from './pages/People';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Publications from './pages/Publications';
import News from './pages/News';
import SingleStory from './pages/SingleStory';


const App = () => (
  <Router>
     <ScrollToTop>
    <div className="App">

      <MainHeader />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/capacity" component={Capacity} />
        <Route path="/impact/:id" component={SingleStory} />
        <Route exact path="/impact" component={Impact} />
        <Route exact path="/people" component={People} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Homepage} />
      </Switch>

      <MainFooter />
    </div>
    </ScrollToTop>
  </Router>
);


export default App;
