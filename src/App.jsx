import Topnav from './Components/Topnav'
import Sidebar from "./Components/Sidebar";

import CodeEditor from './Components/CodeEditor'
import Console from './Components/Console'

import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App flex flex-col flex-1 h-screen">
        <Topnav />
        <div className="flex flex-1 h-[100%]">
          <div className="flex flex-row flex-1 h-full bg-[#12202e]">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <CodeEditor />
              <Console />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App
