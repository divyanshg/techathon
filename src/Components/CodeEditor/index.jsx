import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {updateContent} from '../../slice/editor'
import {updateContent as updateCode} from '../../slice/editors'

import EditorTabBar from '../EditorTabBar'
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const editor = useSelector(state => state.editor.value)
  const dispatch = useDispatch()
  
  function onChange(newValue) {
    dispatch(updateContent(newValue))
    dispatch(updateCode({id: editor.id, content: newValue}))
  }

  return (
    <div className="h-[65%] flex flex-col">
      {editor ? (
        <div className="w-full h-full">
          <EditorTabBar />
          <Editor
            height="96%"
            defaultLanguage={editor?.language}
            defaultValue={editor?.content}
            onChange={onChange}
            theme="vs-dark"
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