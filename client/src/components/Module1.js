import './App.css';
import Editor, { useMonaco, loader, EditorProps } from "@monaco-editor/react";
import React, {useState} from 'react';
import codes from './codes/codes.js'

function Module1() {
  return (
    <div className="App">
      <div className="column">
        <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="typescript"
          defaultValue= {codes[1]}
        />
      </div>
      <div className="column">
        <h2>
          MODULE 0: Hello zkApps
        </h2>
      </div>
    </div>
  );
}

export default Module1;
