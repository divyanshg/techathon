import { createContext, useState, useMemo } from "react";

const EditorContext = createContext();
export default EditorContext;

export function EditorProvider({ children }) {
  const [editor, setEditor] = useState(null);

  function updateEditorContent(content) {
    let _editor = editor;
    _editor.content = content;
    setEditor(_editor);
  }

  function updateEditorLanguage(language) {
    let _editor = editor
    _editor.language = language
    setEditor(_editor);
  }

  function updateEditorOutput(content){
    let _editor = editor
    _editor.output = content
    setEditor(_editor);
  }

  const value = useMemo(
    () => ({
      editor,
      setEditor,
      updateEditorContent,
      updateEditorLanguage,
      updateEditorOutput,
    }),
    [editor]
  );

  return (
    <EditorContext.Provider
      value={value}
    >
      {children}
    </EditorContext.Provider>
  );
}