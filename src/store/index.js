import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/authSlice";
import { counterSlice } from "./features/counter/counterSlice";
import { usersSlice } from "./features/users/usersSlice";


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        users: usersSlice.reducer,
        auth: authSlice.reducer,
    }
})