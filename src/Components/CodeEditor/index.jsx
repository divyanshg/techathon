import React, { useContext } from 'react'
import EditorContext from '../../Contexts/Editor';
import EditorTabBar from '../EditorTabBar'
// import { UnControlled as CodeMirror } from "react-codemirror2";

function CodeEditor() {

  const { editor } = useContext(EditorContext);

  let editorOptions = {
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }

  return (
    <div className="h-[65%] flex flex-col">
      <EditorTabBar />
      {/* <CodeMirror
        value={"<h1>I ♥ react-codemirror2</h1>"}
        options={editorOptions}
        onChange={(editor, data, value) => {}}
      /> */}
      <pre className='px-2 text-white py-2'>
        <code>
          <h1>
            {editor && editor.content}
          </h1>
        </code>
      </pre>
    </div>
  );
}

export default CodeEditor