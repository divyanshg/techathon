import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice({
    name: "editor",
    initialState: {
        value: null,
    },
    reducers: {
        setEditor: (state, action) => {
            state.value = action.payload;
        },
        updateLanguage: (state, action) => {
            state.value.language = action.payload;
        },
        updateOutput: (state, action) => {
            state.value.output = action.payload;
        }
    }
})

export const { setEditor, updateLanguage, updateOutput } = editorSlice.actions;
export default editorSlice.reducer;