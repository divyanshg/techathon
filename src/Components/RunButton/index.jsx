import { useSelector, useDispatch } from 'react-redux';
import { updateOutput } from '../../slice/editor';
import { VscPlay } from 'react-icons/vsc';

function RunButton() {
  const editor = useSelector(state => state.editor.value)
  const dispatch = useDispatch();


  async function runCode() {
    try{
        await fetch(
          "http://ec2-65-2-180-129.ap-south-1.compute.amazonaws.com:9010/api/run",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code: editor?.content,
              lang: editor?.language,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            dispatch(updateOutput(data.message));
          })
          .catch((err) => {
            console.log(err);
          });
    }catch(err){
        alert("There was a problem processing your request")
        console.log(err)
    }
  }

  return (
    <>
      {editor && (
        <button
          className="text-purple-600 border border-purple-600 font-semibold px-4 py-1 rounded hover:bg-purple-700 hover:text-white cursor-pointer"
          onClick={runCode}
        >
          <VscPlay className="inline-block mr-1" />
          <span className='text-white'>Run</span>
        </button>
      )}
    </>
  );
}

export default RunButton
