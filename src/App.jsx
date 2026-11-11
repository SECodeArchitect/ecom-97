import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* route ma path apni marzi sa da sakta hain */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* jo repeat hota hain unhain routes sa bahir rakhtain hain  */}
   
    <Footer/>

      
    </BrowserRouter>
  )
}

export default App
