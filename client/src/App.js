import './App.css';
import Editor, { useMonaco, loader } from "@monaco-editor/react";


function App() {
  return (
    <div className="App">
      <div className="column">
        <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="typescript"
          defaultValue= "// Some codes"
        />
      </div>
      <div className="column">
        <h2>
          MODULE 0
        </h2>
      </div>
    </div>
  );
}

export default App;
