import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// ストアの状態の型を定義
export type RootState = ReturnType<typeof store.getState>;

// ディスパッチ関数の型を定義
export type AppDispatch = typeof store.dispatch;
