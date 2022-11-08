import './App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from './codes/codes.js'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'

function App() {

  const [code, setCode] = useState(codes[1])

  const handleSubmit = async () => {
    const payload = {
      module: 0,
      task: 1,
      format: 'ts',
      code: code
    }
    console.log(payload.code)

    // TODO create ENV host
    const output = await axios.post(
      "http://localhost:5000/run",
      payload
    )

    console.log(output.data.result.results.success)
  }

  return (
    <ChakraProvider>
      <div className="App">
        <div className="column">
          <Editor
            height="90vh"
            theme="vs-dark"
            defaultLanguage="typescript"
            defaultValue= {codes[1]}
            onChange={ (e) => setCode(e)}
          />
        </div>
        <div className="column">
          <h2>
            MODULE 0: Hello zkApps
          </h2>
          <Button onClick={handleSubmit} colorScheme='teal' size='md'>
            Test Code
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
