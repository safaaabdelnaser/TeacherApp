import { configureStore } from "@reduxjs/toolkit";
import PaymentSlice from '../Features/StatusPayment'
import ProfitSlice  from "../Features/StatusProfit"

export const store = configureStore({
  reducer: {
    payments: PaymentSlice,
    profits: ProfitSlice,
    
  },
});
