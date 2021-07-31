import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/login";

const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
  },
});

export default store;
