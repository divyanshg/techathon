import { createSlice } from '@reduxjs/toolkit'
import getExtenstion from '../function/getExtenstion'

export const editorsSlice = createSlice({
  name: "editors",
  initialState: {
    value: [
      {
        id: 1,
        name: `manchaster.py`,
        content: `print("Hello world")`,
        language: "python",
        output: "",
      },
    ],
  },
  reducers: {
    addEditor: (state, action) => {
      state.value.push(action.payload);
    },
    removeEditor: (state, action) => {
      state.value = state.value.filter(
        (editor) => editor.id !== action.payload
      );
    },
    updateLanguage: (state, action) => {
      state.value = state.value.map((editor) => {
        if (editor.id === action.payload.id) {
          editor.language = action.payload.language;
          //update extension in name
          editor.name =
            editor.name.split(".")[0] +
            "." +
            getExtenstion(action.payload.language);
        }
        return editor;
      });
    },
  },
});

export const { addEditor, removeEditor, updateLanguage } = editorsSlice.actions
export default editorsSlice.reducer