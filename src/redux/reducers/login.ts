import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  token: string;
  loginModalVisible: boolean;
}

const initialState: InitialState = { token: "", loginModalVisible: false };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateState(state, action: PayloadAction<Partial<InitialState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export default loginSlice;
