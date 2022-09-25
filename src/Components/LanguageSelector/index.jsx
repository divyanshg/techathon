import {useContext, useState} from 'react'
import EditorContext from '../../Contexts/Editor';

const languages = [
    { label: 'C++', value: 'cpp' },
    { label: 'C', value: 'c' },
    { label: 'Java', value: 'java' },
    { label: 'Python', value: 'python' },
    { label: 'Javascript', value: 'javascript' },
]

function LanguageSelector({ onChange }) {
  let { editor, updateEditorLanguage } = useContext(EditorContext);

  function onChange(event){
    updateEditorLanguage(event.target.value);
    editor.language = event.target.value;
  }

  return (
    <select
      className="border border-gray-800 bg-[#101e2a] rounded p-1 text-white focus:border-purple-500 focus:outline-none"
      value={editor?.language}
      onChange={onChange}
    >
      {languages.map((option) => (
        <option value={option.value} className="text-white">
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector