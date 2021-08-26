import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

/**
 * @param {string} token 用户标识
 * @param {boolean} loginModalVisible 登录窗口是否显示
 * @param {string} avatar 用户头像地址
 */
export interface LoginInitialState {
  token: string;
  loginModalVisible: boolean;
  avatar: "";
}

export const logoutThunk = createAsyncThunk("login/logout", async (_, { dispatch }) => {
  Cookies.remove("token");
  dispatch(loginSlice.actions.updateState({ token: "", avatar: "" }));
});

const initialState: LoginInitialState = { token: "", loginModalVisible: false, avatar: "" };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateState(state, action: PayloadAction<Partial<LoginInitialState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export default loginSlice;
