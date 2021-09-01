import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/login";
import userSlice from "./reducers/user";

const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
