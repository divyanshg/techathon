import React, { useContext } from 'react'
import { useSelector } from 'react-redux';

import EditorContext from '../../Contexts/Editor';
import EditorTabBar from '../EditorTabBar'
// import { UnControlled as CodeMirror } from "react-codemirror2";

function CodeEditor() {
  const editor = useSelector(state => state.editor.value)

  let editorOptions = {
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }

  return (
    <div className="h-[65%] flex flex-col">
      {editor ? (
        <>
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
        </>
      ) : (
        <div className='flex flex-1 items-center justify-center'>
          <h1 className='text-gray-500 font-semibold'>Click on new button or select a file to get started.</h1>
        </div>
      )}
    </div>
  );
}

export default CodeEditor