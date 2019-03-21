import React from 'react';
import './resources/styles.css'
import {Element} from 'react-scroll'
import Header from './components/header_footer/Header'
import Featured from './components//featured'
import VenueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location'
import Footer from './components/Footer'

const App = () => {
  
    return (
      <div className="App" style={{ height: '1500px', background: 'cornflowerblue'}}>
        <Element name='header'>
          <Header />
        </Element>
        <Featured />
        
        <Element name='venueNfo'>
          <VenueNfo />
        </Element>

        <Element name='highlights'>
          <Highlights />
        </Element>

        <Element name='pricing'>
          <Pricing />
        </Element>
        
        <Element name='location'>
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }


export default App;
