import { useSelector } from "react-redux";

function Console() {
    const editor = useSelector((state) => state.editor.value);

  return (
    <div className="border-t border-gray-800 p-2">
      <div className="flex flex-col space-x-1">
        <h1 className="text-gray-500 font-semibold text-sm">CONSOLE</h1>
        <span className="text-white">Note : This console is not interactive i.e. functions like scanf, cin, input, and similar functions that require user's input won't work.</span>
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