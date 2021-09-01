import Service from "@/services";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * @param {string} nickName 用户名
 * @param {string} address 地址
 * @param {string} gender 性别 1-男,2-女
 * @param {string} industry 行业
 */
export interface UserInitialState {
  avatar: string;
  nickName: string;
  address: string;
  gender: string;
  industry: string;
}

export const getUserInfoThunk = createAsyncThunk("login/getUserInfoThunk", async (_, { dispatch }) => {
  Service({ url: "getUserInfo", data: {} }).then(({ data }) => {
    const { avatar, nickName, address, gender, industry } = data;
    dispatch(userSlice.actions.updateState({ avatar, nickName, address, gender, industry }));
  });
});

const initialState: UserInitialState = { avatar: "", nickName: "", address: "", gender: "1", industry: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateState(state, action: PayloadAction<Partial<UserInitialState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export default userSlice;
