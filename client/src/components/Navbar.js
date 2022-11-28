import React from 'react'
import Module0 from './Module0';
import Module1 from './Module1';
import Module2 from './Module2';
import Module3 from './Module3';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink
} from "react-router-dom";
import { Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div>
      <nav>
          <RouteLink to="/">
            <Button colorScheme='teal' size='md'>MODULE 0</Button>
          </RouteLink>
          <RouteLink to="/module1">
            <Button colorScheme='teal' size='md'>MODULE 1</Button>
          </RouteLink>
          <RouteLink to="/module2">
            <Button colorScheme='teal' size='md'>MODULE 2</Button>
          </RouteLink>
          <RouteLink to="/module3">
            <Button colorScheme='teal' size='md'>MODULE 3</Button>
          </RouteLink>
        </nav>
    </div>
  )
}

export default Navbar
