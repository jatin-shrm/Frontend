import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    // Add more reducers here as your app grows
  },
});

// Types for use across app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
