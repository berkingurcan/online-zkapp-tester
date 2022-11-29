import '../App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from '../codes/codes.js'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { CodeBlock, dracula } from "react-code-blocks";
import codeBlocks from '../codes/codeblocks';


const Module1 = () => {
  const [code, setCode] = useState(codes[1])
  const [result, setResult] = useState()
  const [spinner, setSpinner] = useState(false)

  const handleSubmit = async () => {
    setSpinner(true)
    const payload = {
      format: 'ts',
      code: code,
      pathname: 'repo/module2/src',
      filename: 'Password.ts'
    }
    console.log(payload.code)

    // TODO create ENV host
    const output = await axios.post(
      "http://localhost:5000/run/module2",
      payload
    )

    console.log(output.data.result.results.success)
    setSpinner(false)

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
            defaultValue= {codes[3]}
            onChange={ (e) => setCode(e)}
          />
        </div>
        <div className="column">
          <h2>
            MODULE 2: Password
          </h2>
          <br></br>

          <p className='texts'>
            Before dive into private inputs and hash functions please study this tutorial carefully: <a href='https://docs.minaprotocol.com/zkapps/tutorials/private-inputs-hash-functions' target="_blank"><span>tutorial.</span></a>
            <br></br>

            Task is:
            <p>Create a smart contract which you can set private state and update it if you know it :).</p>
            <p>
              <li>Firstly, create Create Field State variable 'x'
              </li>
              <li>Write initState method that you will assign your secret to x, do not forget to add salting :) Also do not forget add input parameters:
              </li>
              <li>
                Lastly, write update method, pass input parameters like here:
                  <CodeBlock
                  text={codeBlocks[4]}
                  language="typescript"
                  showLineNumbers={false}
                  theme={dracula}
                  wrapLines
                />
              </li>
              <li>and if user knows salt and current secret they can update their secret.</li>
            </p>
          </p>
          <Button onClick={handleSubmit} colorScheme='teal' size='md'>
            Test Code
          </Button>
          <div>
             {spinner ? <Spinner /> : result}
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Module1;
