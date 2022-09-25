import React, {useContext} from 'react'
import EditorContext from '../../Contexts/Editor'
import getFileIcon from '../../function/getFileIcon';

function EditorTabBar() {
    const { editor } = useContext(EditorContext);
  return (
    <div className="border-b border-gray-800">
        {editor && (
          <div className="flex flex-row space-x-1 py-1 px-3 items-center">
            <img
              className="h-3 w-3"
              src={getFileIcon(editor.language)}
            />
            <h1 className="text-white text-xs font-semibold">{editor && editor.name}</h1>
          </div>
        )}
    </div>
  );
}

export default EditorTabBar