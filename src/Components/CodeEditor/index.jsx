import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {updateContent} from '../../slice/editor'
import {updateContent as updateCode} from '../../slice/editors'

import EditorTabBar from '../EditorTabBar'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor() {
  const editor = useSelector(state => state.editor.value)
  const dispatch = useDispatch()
  
  function onChange(newValue) {
    dispatch(updateContent(newValue))
    dispatch(updateCode({id: editor.id, content: newValue}))
  }

  let editorOptions = {
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }

  return (
    <div className="h-[65%] flex flex-col">
      {editor ? (
        <div className="w-full h-full">
          <EditorTabBar />
          <AceEditor
            placeholder="Write your code here"
            mode={editor?.language}
            theme="xcode"
            name={editor?.name}
            onChange={onChange}
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={editor?.content}
            height={"96%"}
            width={"100%"}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 4,
            }}
          />
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-gray-500 font-semibold">
            Click on new button or select a file to get started.
          </h1>
        </div>
      )}
    </div>
  );
}

export default CodeEditor