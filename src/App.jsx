import Topnav from './Components/Topnav'
import Sidebar from "./Components/Sidebar";

import CodeEditor from './Components/CodeEditor'
import Console from './Components/Console'

import { EditorProvider } from './Contexts/Editor';

function App() {
  return (
    <EditorProvider>
      <div className="App flex flex-col flex-1">
        <Topnav />
        <div className="flex flex-1">
          <div className="flex flex-row flex-1 h-full bg-[#12202e]">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <CodeEditor />
              <Console />
            </div>
          </div>
        </div>
      </div>
    </EditorProvider>
  );
}

export default App
