import './App.css';
import React from 'react';
import Module0 from './components/Module0';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';

import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'



function App() {

  return (
    <ChakraProvider>

      <Button colorScheme='teal' size='md'>MODULE 0</Button>
      <Button colorScheme='teal' size='md'>MODULE 1</Button>
      <Button colorScheme='teal' size='md'>MODULE 2</Button>
      <Button colorScheme='teal' size='md'>MODULE 3</Button>

      <Module2 />
    </ChakraProvider>
  );
}

export default App;
