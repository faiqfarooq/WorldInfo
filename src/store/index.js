import { configureStore } from "@reduxjs/toolkit";
import { getCreataDataSlice } from "../redux/reducers/Reducer";

const store = configureStore({
  reducer: { country: getCreataDataSlice.reducer },
});

export default store;
