import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Features from './component/Features';
import Signup from './component/Signup';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Features/>
    <Signup/>
    <Footer/>
    
    </div>
  );
}

export default App;
