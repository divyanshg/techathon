import { useSelector, useDispatch } from 'react-redux';
import {updateLanguage} from '../../slice/editor';
import { updateLanguage as updateEditorLanguage } from '../../slice/editors';

const languages = [
    { label: 'C++', value: 'cpp' },
    { label: 'C', value: 'c' },
    { label: 'Java', value: 'java' },
    { label: 'Python', value: 'python' },
    { label: 'Javascript', value: 'javascript' },
]

function LanguageSelector({ onChange }) {
  const editor = useSelector(state => state.editor.value)
  const dispatch = useDispatch();

  function onChange(event){
    dispatch(updateLanguage(event.target.value));
    dispatch(updateEditorLanguage({
      id: editor.id,
      language: event.target.value
    }));
  }

  return (
    <>
      {editor && (
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
      )}
    </>
  );
}

export default LanguageSelector