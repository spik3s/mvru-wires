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
import Capabilities from './pages/Capabilities';
import ResearchSpotlight from './pages/ResearchSpotlight';
import People from './pages/People';
import Students from './pages/Students';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import SingleJob from './pages/SingleJob';
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
        <Route exact path="/capabilities" component={Capabilities} />
        <Route path="/research/:id" component={SingleStory} />
        <Route exact path="/research" component={ResearchSpotlight} />
        <Route exact path="/people" component={People} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/careers/:id" component={SingleJob} />
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
