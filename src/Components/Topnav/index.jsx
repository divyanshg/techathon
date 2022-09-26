import React from 'react'
import LanguageSelector from '../LanguageSelector';
import RunButton from '../RunButton';
import { useSelector } from "react-redux";

function Topnav() {
  const user = useSelector(state => state.user.value);
  return (
    <div className="bg-[#101e2a] border-b border-gray-800 flex flex-row h-10 items-center px-4 py-1">
      <h1 className="font-semibold text-white w-60">
        Team <span className="text-purple-600">219</span> |{" "}
        <span className="text-gray-500">CodeCompiler</span>
      </h1>
      <div className="flex flex-row w-full items-center ml-10 justify-between">
        <div className="space-x-2">
          <LanguageSelector />
          <RunButton />
        </div>
        <div className='flex flex-row'>
          <img
            className="w-6 h-6 bg-red-400 mx-3"
            src={
              "https://s01.sgp1.digitaloceanspaces.com/large/879108-vbjtzcqwrq-1526385694.jpeg"
            }
          />
          <div className="bg-gray-600 rounded-full px-2 space-x-3 flex fllex-row">
            <span className="text-white">{user}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav