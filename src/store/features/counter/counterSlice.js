import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    loading: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state)=> {
            state.value -= 1;
        },
        incrementByValue: (state, {payload}) => {
            state.value += payload;
        },
        changeLoader: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const {increment, decrement,changeLoader,incrementByValue} = counterSlice.actions;