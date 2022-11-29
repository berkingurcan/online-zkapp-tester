import '../App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from '../codes/codes.js'
import codeBlocks from '../codes/codeblocks';
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { CodeBlock, dracula } from "react-code-blocks";



const Module1 = () => {
  const [code, setCode] = useState(codes[1])
  const [result, setResult] = useState()
  const [spinner, setSpinner] = useState(false)


  const handleSubmit = async () => {
    setSpinner(true)

    const payload = {
      format: 'ts',
      code: code,
      pathname: 'repo/module1/src',
      filename: 'MultiplyTwo.ts'
    }
    console.log(payload.code)

    // TODO create ENV host
    const output = await axios.post(
      "http://localhost:5000/run/module1",
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
            defaultValue= {codes[2]}
            onChange={ (e) => setCode(e)}
          />
        </div>
        <div className="column">
          <h2>
            TASK 1: Double It!
          </h2>
          <br></br>

          <p className='texts'>
            Firstly, please take a look this <a href='https://docs.minaprotocol.com/zkapps/tutorials/hello-world' target="_blank"><span>tutorial.</span></a>
            <br></br>
            First task is:
            <p>Create Smart Contract which you can double your Field state. It is simple: just like the tutorial above you will be double your number instead of take square :) In other words, multiply with 2</p>
            <p>
              <li>Firstly, create Create Field State variable 'num' under the:
              <CodeBlock
                text={codeBlocks[1]}
                language="typescript"
                showLineNumbers={false}
                theme={dracula}
                wrapLines
              />
              </li>
              <li>While deploying your contract set your state value to 4 in your deploy method:
              <CodeBlock
                text={codeBlocks[2]}
                language="typescript"
                showLineNumbers={false}
                theme={dracula}
                wrapLines
              />
              </li>
              <li>
                Lastly, pass the field parameter like the tutorial:
                  <CodeBlock
                  text={codeBlocks[3]}
                  language="typescript"
                  showLineNumbers={false}
                  theme={dracula}
                  wrapLines
                />
              </li>
              <li>and if it is double of 'num' set the value to your new input</li>
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
