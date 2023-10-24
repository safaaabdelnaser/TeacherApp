import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};
export const getDataProfit = createAsyncThunk("Profits/getDataProfit", () => {
  return axios
    .get("http://localhost:3000/statusProfit")
    .then((res) => res.data);
});
const ProfitSlice = createSlice({
  name: "Profits",
  initialState,
  extraReducers: (bulider) => {
    bulider.addCase(getDataProfit.pending, (state) => {
      state.loading = true;
    });
    bulider.addCase(getDataProfit.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    bulider.addCase(getDataProfit.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export default ProfitSlice.reducer;
