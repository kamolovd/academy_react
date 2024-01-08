import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuth } from "../../store/features/auth/authSlice";
import { getUsers } from "../../store/features/users/usersSlice";

function Home() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(setIsAuth(false))
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])

    return (
        <>
            <Box>
                Home
            </Box>
            <Box>
                <Button onClick={() => dispatch(getUsers())}>Отправка запроса с токеном</Button>
            </Box>
            <Box>
                <Button onClick={logout}>Выход</Button>
            </Box>
        </>
    )
}

export default Home;

