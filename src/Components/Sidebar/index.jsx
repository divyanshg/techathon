import React, {useContext} from 'react'
import EditorContext from '../../Contexts/Editor';

import { generateUsername } from "unique-username-generator";

const dummy = [
  {
    id: 1,
    name: `${generateUsername("-", 0, 15)}.py`,
    content: `print("Hello world")`,
    language: "python",
    output: 'There was an error.'
  },
  {
    id: 1,
    name: `${generateUsername("-")}.js`,
    content: `console.log("Hello world 2")`,
    language: "javascript",
    output: ''
  },
];

function Sidebar() {
  const { setEditor } = useContext(EditorContext);
  function switchEditor(file){
    setEditor(file)
  }

  return (
    <div class="w-60 h-screen shadow-md bg-[#12202e] px-1 border-r border-gray-800">
      <button className="border border-purple-600 text-purple-600 w-full my-2 mx-auto rounded-lg py-1 hover:bg-purple-500 hover:text-white mb-4">
        New
      </button>
      <ul class="relative flex flex-col space-y-1">
        {dummy.map((file) => (
          <li  onClick={() => switchEditor(file)} className="flex flex-row items-center justify-between px-2 py-1 hover:bg-gray-700 rounded cursor-pointer">
            <div className="flex flex-row items-center space-x-2">
              <img
                className="h-4 w-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <span className="text-gray-200 text-sm">{file.name}</span>
            </div>
            <button className="text-gray-700 rounded-full w-5 h-5 flex items-center justify-center hover:text-white">
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