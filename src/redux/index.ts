import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/login";

const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
