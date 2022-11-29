import '../App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from '../codes/codes.js'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'



const Module1 = () => {
  const [code, setCode] = useState(codes[1])
  const [result, setResult] = useState()

  const handleSubmit = async () => {
    const payload = {
      format: 'ts',
      code: code,
      pathname: 'repo/module0/src',
      filename: 'Add.ts'
    }
    console.log(payload.code)

    // TODO create ENV host
    const output = await axios.post(
      "http://localhost:5000/run",
      payload
    )

    console.log(output.data.result.results.success)
    if (output.data.result.results.success) {
      setResult('Congratulations! You Passed all tests! Go to next task')
    } else {
      setResult('Sorry, your code is incorrect! Please try again')
    }
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
          <h3>{result}</h3>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Module1;
