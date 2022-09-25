import { createContext, useState } from "react";

const EditorsContext = createContext();
export default EditorsContext;

//provider

export function EditorsProvider({ children }) {
    const [editors, setEditors] = useState([
      {
        id: 1,
        name: `manchaster.py`,
        content: `print("Hello world")`,
        language: "python",
        output: "There was an error.",
      },
    ]);
    const [activeEditor, setActiveEditor] = useState(null);
    
    const addEditor = (editor) => {
        setEditors([...editors, editor]);
    };
    
    const updateEditor = (editor) => {
        const newEditors = editors.map((e) => {
        if (e.id === editor.id) {
            return editor;
        }
        return e;
        });
        setEditors(newEditors);
    };
    
    const deleteEditor = (id) => {
        const newEditors = editors.filter((e) => e.id !== id);
        setEditors(newEditors);
    };
    
    const setActive = (id) => {
        const newActiveEditor = editors.find((e) => e.id === id);
        setActiveEditor(newActiveEditor);
    };

    return (
        <EditorsContext.Provider
        value={{
            editors,
            activeEditor,
            addEditor,
            updateEditor,
            deleteEditor,
            setActive,
        }}
        >
        {children}
        </EditorsContext.Provider>
    );
}