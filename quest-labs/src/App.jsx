import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CircularAnimation from './components/circleAnimation';
import CustomUI from './components/customUI';
import FeaturesSection from './components/featuresSections';
import Mid from './components/mid';
import Miid from './components/mid2';
import Cover from './components/call';
import Features from './components/features';
import CustomerReviews from './components/slider';
import InteractiveUI from './components/InteractiveUI';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomUI />
      <InteractiveUI/>
      <Mid/>
      <Miid/>
      <Features/>
      <FeaturesSection/>
      <CustomerReviews/>
      <CircularAnimation/>
      <Cover/>
     
      <Footer />
    </div>
  );
}

export default App;
