import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { authAction } from "../redux/authSlice";
import type { UserInfo } from "../type/UserInfo";

export default function Header(): React.JSX.Element {
    const navigate = useNavigate();
    const isLogin = useAppSelector((state) => state.auth.userInfo); 
    const dispatch = useAppDispatch();

    useEffect(() => {

        const tryLogin = async () => {
            const response = await fetch('http://localhost:5173/api/auth/me');

            // Gabisa logout gegara cookienya httpOnly jadi pake localStorage
            if(response.status === 200 && localStorage.getItem('login') == 'true'){
                const profieData: {user: UserInfo} = await response.json();
                dispatch(authAction.setUserInfo(profieData.user));
            }
        }

        tryLogin();
    }, []);
    
    const handleLogout = () => {
        navigate('/logout');
    };

    return (
        <AppBar position="static" className="bg-white text-slate-800 shadow-sm">
            <Container maxWidth="lg">
                <Toolbar className="flex justify-between px-0">
                    <Typography variant="h6" component="div" className="font-bold text-blue-600">
                        MyApps
                    </Typography>

                    <div className="flex items-center">
                        {isLogin ? (
                            <Button 
                                variant="text" 
                                color="inherit" 
                                size="small"
                                startIcon={<LogoutIcon />}
                                onClick={handleLogout}
                                className="bg-white text-black hover:bg-red-50"
                            >
                                Logout
                            </Button>
                        ) : (
                            <Typography variant="body2" className="text-white-500 italic">
                                Please Login
                            </Typography>
                        )}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}