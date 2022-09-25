import { useSelector, useDispatch } from "react-redux";

import { setEditor } from '../../slice/editor';
import { addEditor, removeEditor as deleteEditor } from '../../slice/editors';


import { generateUsername } from "unique-username-generator";
import getFileIcon from '../../function/getFileIcon';

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
            onClick={() => switchEditor(file)}
            className="flex flex-row items-center justify-between px-2 py-1 hover:bg-gray-700 rounded cursor-pointer"
          >
            <div className="flex flex-row items-center space-x-2">
              <img
                className="h-4 w-4"
                src={getFileIcon(file.language)}
              />
              <span className="text-gray-200 text-sm">{file.name}</span>
            </div>
            <button onClick={() => removeEditor(file.id)} className="text-gray-700 rounded-full w-5 h-5 flex items-center justify-center hover:text-white">
              x
            </button>
          </li>
        ))}
        {/* <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
          >
            Sidenav link 1
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar