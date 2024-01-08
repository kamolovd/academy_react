import { createSlice } from "@reduxjs/toolkit"


export const getToken = (() => Boolean(localStorage.getItem('token')));

const initialState = {
    isAuth: getToken(),
    loading: false,
}


export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: ({
        changeLoading: (state, { payload }) => {
            state.loading = payload
        },
        setIsAuth: (state, {payload}) => {
            state.isAuth = payload;
        }
    })
})

export const { changeLoading,setIsAuth } = authSlice.actions;


export const handleLogin = (login,password, navigate) => {
    return async (dispatch) => {
        try {
            dispatch(changeLoading(true))
            const bodyJson = {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            }
            
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                body: JSON.stringify(bodyJson),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const responseJson = await response.json();
            localStorage.setItem('token', responseJson.token);
            dispatch(setIsAuth(true))
            navigate('/')
            dispatch(changeLoading(false))
            console.log(responseJson)
            
        } catch (e) {
            dispatch(changeLoading(false))
            console.log(e)
        }
    }
}