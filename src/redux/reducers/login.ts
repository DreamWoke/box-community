import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = { token: "" }

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
})

export default loginSlice
