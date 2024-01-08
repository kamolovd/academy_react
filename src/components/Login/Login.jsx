import { Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../store/features/auth/authSlice";

const useStyles = makeStyles({
    container: {
        minHeight: '100vh'
    },
    contentBlock: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        gap: '20px',
    },
    title: {
        fontSize: '2rem',
    },
    inpBlock: {
        width: 250,
    }
});


const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const [login, setLogin] = useState('') 
    const [password, setPassword] = useState('') 
    const navigate = useNavigate();

    console.log(isAuth)
    return (
        <>
            <Container className={classes.container} maxWidth={false}>
                <Box className={classes.contentBlock} textAlign={'center'}>
                    <Typography className={classes.title} variant="h5" component="h3">
                        Вход
                    </Typography>
                    <Box className={classes.inpBlock}>
                        <TextField value={login} onChange={e=> setLogin(e.target.value)} fullWidth id="filled-basic" label="Логин" variant="filled" />
                    </Box>
                    <Box className={classes.inpBlock}>
                        <TextField value={password} onChange={e => setPassword(e.target.value)} type={"password"} fullWidth id="filled-basic" label="Пароль" variant="filled" />
                    </Box>
                    <Box>
                        <Button onClick={() => dispatch(handleLogin(login, password,navigate))} color="inherit" disabled={loading} variant="contained">{loading ? <CircularProgress size={20} type="inherit" /> : 'Вход'}</Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Login;