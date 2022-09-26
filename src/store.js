import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./slice/editor";
import editorsReducer from "./slice/editors";
import userReducer from "./slice/user";

export default configureStore({
  reducer: {
    editor: editorReducer,
    editors: editorsReducer,
    user: userReducer,
  },
});
