import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};
export const getDataPayment = createAsyncThunk(
  "Payments/getDataPayment",
  () => {
    return axios
      .get(" http://localhost:3000/statusPayment")
      .then((res) => res.data);
  }
);
const PaymentSlice = createSlice({
  name: "Payments",
  initialState,
  extraReducers: (bulider) => {
    bulider.addCase(getDataPayment.pending, (state) => {
      state.loading = true;
    });
    bulider.addCase(getDataPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    bulider.addCase(getDataPayment.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export default PaymentSlice.reducer;
