import React, { useContext } from 'react'
import EditorContext from '../../Contexts/Editor';

function Console() {
  let { editor } = useContext(EditorContext);
  return (
    <div className="border-t border-gray-800 p-2">
      <div className="flex flex-row space-x-1">
        <h1 className="text-gray-500 font-semibold text-sm">CONSOLE</h1>
        <button className='h-4 w-4'>
          x
        </button>
      </div>
      <div className='my-2'>
        <pre className='text-gray-300'>
          {editor?.output}
        </pre>
      </div>
    </div>
  );
}

export default Console