import { useSelector, useDispatch } from 'react-redux';
import { updateOutput } from '../../slice/editor';

function RunButton() {
  const editor = useSelector(state => state.editor.value)
  const dispatch = useDispatch();


  async function runCode() {
    try{
        await fetch('http://localhost:9010/api/run', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: editor?.content,
                lang: editor?.language
            })
        }).then(res => res.json())
        .then(data => {
            dispatch(updateOutput(data.message));
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
    <>
      {editor && (
        <button
          className="bg-purple-500 text-white font-semibold px-4 py-1 rounded hover:bg-purple-700 cursor-pointer"
          onClick={runCode}
        >
          Run Code
        </button>
      )}
    </>
  );
}

export default RunButton