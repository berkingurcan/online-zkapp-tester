import '../App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from '../codes/codes.js'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import codeBlocks from '../codes/codeblocks';
import { CodeBlock, dracula } from 'react-code-blocks';



const Module1 = () => {
  const [code, setCode] = useState(codes[1])
  const [result, setResult] = useState()
  const [spinner, setSpinner] = useState(false)


  const handleSubmit = async () => {
    setSpinner(true)

    const payload = {
      format: 'ts',
      code: code,
      pathname: 'repo/module3/src',
      filename: 'SendMINAExample.ts'
    }
    console.log(payload.code)

    // TODO create ENV host
    const output = await axios.post(
      "http://localhost:5000/run/module3",
      payload
    )

    console.log(output.data.result.results.success)
    setSpinner(false)
//WORKING EVERYTHING
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
            defaultValue= {codes[4]}
            onChange={ (e) => setCode(e)}
          />
        </div>
        <div className="column">
          <h2>
            MODULE 3: Send MINA with zkapp
          </h2>
          <p className='texts'>
            We will learn how to send MINA via smart contracts in this section.
            <br></br>

            Task is:
            <p>Create a smart contract which you can send x amount MINA to y address. Do not forget to load some balance(20 MINA for this task) to smart contract while deploying.</p>
            <p>
              <li>Firstly, while deploying send 20 MINA to contract like this(Change amount):
                <CodeBlock
                  text={codeBlocks[5]}
                  language="typescript"
                  showLineNumbers={false}
                  theme={dracula}
                  wrapLines
                />
              </li>
              <li>
                Please look at here what happens here? Why there is editSequenceState
                <CodeBlock
                  text={codeBlocks[6]}
                  language="typescript"
                  showLineNumbers={false}
                  theme={dracula}
                  wrapLines
                />
              </li>
              <li>
                Then create a method which you can send amount Mina to receiverAddress.
              </li>
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
