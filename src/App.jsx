import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import './styles/custom.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Nav from './components/Nav';
import Works from './screens/Works';
import Locations from './screens/Locations';
import Services from './screens/Services';
import Contact from './screens/Contact';
import Splash from './screens/Splash';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="bg">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Works" element={<Works />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Locations" element={<Locations />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
