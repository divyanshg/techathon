import { createSlice } from "@reduxjs/toolkit";
import getExtenstion from "../function/getExtenstion";

export const editorSlice = createSlice({
    name: "editor",
    initialState: {
        value: JSON.parse(localStorage.getItem("editor")) || null,
    },
    reducers: {
        setEditor: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("editor", JSON.stringify(state.value));
        },
        updateLanguage: (state, action) => {
            state.value.language = action.payload;
            state.value.name =
              state.value.name.split(".")[0] +
              "." +
              getExtenstion(action.payload);
            localStorage.setItem("editor", JSON.stringify(state.value));
        },
        updateOutput: (state, action) => {
            state.value.output = action.payload;
            localStorage.setItem("editor", JSON.stringify(state.value));
        }
    }
})

export const { setEditor, updateLanguage, updateOutput } = editorSlice.actions;
export default editorSlice.reducer;