import { configureStore } from "@reduxjs/toolkit";

//example
const store = configureStore({
  reducer: toString,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
