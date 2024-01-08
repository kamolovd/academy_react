import { createSlice } from "@reduxjs/toolkit"
import { getToken } from "../auth/authSlice";


const initialState = {
    usersList: [],
    loading: false,
    selectUser: null,
    selectUsersToCart: [],
}


export const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {
        setUsers: (state, {payload}) => {
            state.usersList = payload;
        },
        setSelectUser: (state, {payload}) => {
            state.selectUser = payload;
        },
        setSelectUsersToCart: (state, {payload}) => {
            state.selectUsersToCart.push(payload);
        },
        deleteUsersToCart:(state, {payload}) => {
            state.selectUsersToCart = state.selectUsersToCart.filter((item) => item.id !== payload.id)
        },
        changeLoading: (state, {payload}) => {
            state.loading = payload
        } 
    },
})


export const {setUsers,setSelectUser,setSelectUsersToCart, deleteUsersToCart, changeLoading} = usersSlice.actions;


export const getUsers = () => {
    return async(dispatch) => {
        try {   
            // ------ start pending status
            dispatch(changeLoading(true))
            const response = await fetch(`https://reqres.in/api/users`, {
                method: 'GET',
                headers: {
                    "Authorization" : `${localStorage.getItem('token')}`
                }
            });
            const responseJson = await response.json();
            // ------ end pending status
            // success
            dispatch(setUsers(responseJson.data))
            dispatch(changeLoading(false))
        } catch(e) {
            // error
            dispatch(changeLoading(false))
            console.log(e)
        }
    }
}

export const getUserById = (id) => {
    return async(dispatch) => {
        try {   
            // ------ start pending status
            dispatch(changeLoading(true))
            const response = await fetch(`https://reqres.in/api/users?id=${id}`);
            const responseJson = await response.json();
            // ------ end pending status
            // success
            dispatch(setSelectUser(responseJson.data))
            dispatch(changeLoading(false))
        } catch(e) {
            // error
            dispatch(changeLoading(false))
            console.log(e)
        }
    }
}