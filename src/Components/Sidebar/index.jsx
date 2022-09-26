import { useSelector, useDispatch } from "react-redux";

import { setEditor, removeEditor as deleteCurrentEditor } from '../../slice/editor';
import { addEditor, removeEditor as deleteEditor } from '../../slice/editors';


import { generateUsername } from "unique-username-generator";
import getFileIcon from '../../function/getFileIcon';
import { VscTrash } from 'react-icons/vsc';

function Sidebar() {
  const dispatch = useDispatch();
  const editors = useSelector(state => state.editors.value);

  function switchEditor(file){
    dispatch(setEditor(file))
  }

  function newEditor(){
    dispatch(addEditor({
      id: Math.floor(Math.random() * 100000000),
      name: `${generateUsername("-")}.js`,
      content: `//Write your code`,
      language: "javascript",
      output: ''
    }))
  }

  function removeEditor(id){
    switchEditor(null)
    dispatch(deleteEditor(id))
    dispatch(deleteCurrentEditor())
  }

  return (
    <div class="w-60 h-[100%] shadow-md bg-[#12202e] px-1 border-r border-gray-800">
      <button
        onClick={newEditor}
        className="border border-purple-600 text-purple-600 w-full my-2 mx-auto rounded-lg py-1 hover:bg-purple-500 hover:text-white mb-4"
      >
        New
      </button>
      <ul class="relative flex flex-col space-y-1">
        {editors.map((file) => (
          <li
            title="Click to open editor"
            onClick={() => switchEditor(file)}
            className="flex flex-row items-center justify-between px-2 py-1 hover:bg-gray-700 rounded cursor-pointer group"
          >
            <div className="flex flex-row items-center space-x-2">
              <img
                className="h-4 w-4"
                src={getFileIcon(file.language)}
              />
              <span className="text-gray-200 text-sm">{file.name}</span>
            </div>
            <button title="Delete editor" onClick={() => removeEditor(file.id)} className="text-gray-400 group-hover:block hidden rounded-full w-5 h-5 flex items-center justify-center hover:text-white">
              <VscTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar