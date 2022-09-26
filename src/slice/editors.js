import { createSlice } from '@reduxjs/toolkit'
import getExtenstion from '../function/getExtenstion'

export const editorsSlice = createSlice({
  name: "editors",
  initialState: {
    value: JSON.parse(localStorage.getItem("editors")) || [
      {
        id: 1,
        name: `manchaster.c`,
        content: `
          #include <stdio.h>
          int main() {
            int a;
            printf("Hello World!");
            scanf("%d", &a);
            printf("%d", a);
            return 0;
          }
        `,
        language: "c",
        output: "",
      },
    ],
  },
  reducers: {
    addEditor: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("editors", JSON.stringify(state.value));
    },
    removeEditor: (state, action) => {
      state.value = state.value.filter(
        (editor) => editor.id !== action.payload
      );
      localStorage.setItem("editors", JSON.stringify(state.value));
    },
    updateContent: (state, action) => {
      state.value = state.value.map((editor) => {
        if (editor.id === action.payload.id) {
          editor.content = `${action.payload.content}`;
        }
        return editor;
      });
      localStorage.setItem("editors", JSON.stringify(state.value));
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
      localStorage.setItem("editors", JSON.stringify(state.value));
    },
  },
});

export const { addEditor, removeEditor, updateLanguage, updateContent } =
  editorsSlice.actions;
export default editorsSlice.reducer