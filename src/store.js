import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./slice/editor";
import editorsReducer from "./slice/editors";

export default configureStore({
  reducer: {
    editor: editorReducer,
    editors: editorsReducer,
  },
});
