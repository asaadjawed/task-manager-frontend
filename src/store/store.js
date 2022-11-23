import { configureStore } from "@reduxjs/toolkit";
import { taskManagerApi } from "../api/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [taskManagerApi.reducerPath]: taskManagerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskManagerApi.middleware),
});

setupListeners(store.dispatch);
