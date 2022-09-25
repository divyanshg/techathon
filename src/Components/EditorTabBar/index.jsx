import React, {useContext} from 'react'
import EditorContext from '../../Contexts/Editor'

function EditorTabBar() {
    const { editor } = useContext(EditorContext);
  return (
    <div className="border-b border-gray-800">
        {editor && (
          <div className="flex flex-row space-x-1 py-1 px-3 items-center">
            <img
              className="h-3 w-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            />
            <h1 className="text-white text-xs font-semibold">{editor && editor.name}</h1>
          </div>
        )}
    </div>
  );
}

export default EditorTabBar