import React from 'react'
import LanguageSelector from '../LanguageSelector';
import RunButton from '../RunButton';


function Topnav() {
  return (
    <div className="bg-[#101e2a] border-b border-gray-800 flex flex-row h-10 items-center px-4 py-1">
      <h1 className="font-semibold text-white">
        Team <span className="text-purple-600">219</span> |{" "}
        <span className="text-gray-500">
          CodeCompiler 
        </span>
      </h1>
      <div className='flex flex-row items-center ml-10 space-x-4'>
        <LanguageSelector />
        <RunButton />
      </div>
    </div>
  );
}

export default Topnav