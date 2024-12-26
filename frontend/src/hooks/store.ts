import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  //   tax: taxSlice,
  //   main: mainSlice,
  //   account: accountSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
