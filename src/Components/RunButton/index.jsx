import React, {useContext} from 'react'
import EditorContext from '../../Contexts/Editor'

function RunButton() {
  let { editor, updateEditorOutput } = useContext(EditorContext);


  async function runCode() {
    try{
        await fetch('http://localhost:9010/api/run', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: editor?.code,
                lang: editor?.language
            })
        }).then(res => res.json())
        .then(data => {
            updateEditorOutput(data.message);
        })
        .catch(err => {
            console.log(err);
        })
    }catch(err){
        alert("There was a problem processing your request")
        console.log(err)
    }
  }

  return (
    <button className='bg-purple-500 text-white font-semibold px-4 py-1 rounded hover:bg-purple-700 cursor-pointer' onClick={runCode}>Run Code</button>
  )
}

export default RunButton