import './App.css';
import React from 'react';
import Module0 from './components/Module0';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink
} from "react-router-dom";
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';



function App() {

  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Module0 />}></Route>
          <Route path="/module1" element={<Module1 />}></Route>
          <Route path="/module2" element={<Module2 />}></Route>
          <Route path="/module3" element={<Module3 />}></Route>

        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
