import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { NavLink } from "react-router";
import { Logout as LogoutIcon, Login as LoginIcon, AddTask, PostAdd, Home} from "@mui/icons-material";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect, type PropsWithChildren } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { authAction } from "../redux/authSlice";
import type { UserInfo } from "../type/UserInfo";

export default function Layout(props: PropsWithChildren): React.JSX.Element {
    const isLogin = useAppSelector((state) => state.auth.userInfo); 
    const dispatch = useAppDispatch();

    useEffect(() => {

        const tryLogin = async () => {
            const response = await fetch('http://localhost:5173/api/auth/me');

            // Gabisa logout gegara cookienya httpOnly jadi pake localStorage
            if(response.status === 200 && localStorage.getItem('login') === 'true'){
                const profieData: {user: UserInfo} = await response.json();
                dispatch(authAction.setUserInfo(profieData.user));
            }
        }

        tryLogin();
    }, []);
    
    return (
        <>
            <AppBar position="static" className="bg-white text-slate-800 shadow-sm">
                <Container maxWidth="lg">
                    <Toolbar className="flex justify-between px-0">
                        <Typography variant="h6" component="div" className="font-bold text-blue-600">
                            MyApps
                        </Typography>

                        <div className="flex items-center">
                            {isLogin ? (
                                <>  
                                    <NavLink to="/" className="mx-2">
                                        <Button 
                                            variant="text" 
                                            color="inherit" 
                                            size="small"
                                            startIcon={<Home />}
                                            className="bg-white text-black hover:bg-red-50"
                                        >
                                            Home
                                        </Button>
                                    </NavLink>
                                    <NavLink to="/post" className="mx-2">
                                        <Button 
                                            variant="text" 
                                            color="inherit" 
                                            size="small"
                                            startIcon={<PostAdd/>}
                                            className="bg-white text-black hover:bg-red-50"
                                        >
                                            PostList
                                        </Button>
                                    </NavLink>
                                    <NavLink to="/profile" className="mx-2">
                                        <Button 
                                            variant="text" 
                                            color="inherit" 
                                            size="small"
                                            startIcon={<AddTask/>}
                                            className="bg-white text-black hover:bg-red-50"
                                        >
                                            Profile
                                        </Button>
                                    </NavLink>
                                    <NavLink to="/logout" className="mx-2">
                                        <Button 
                                            variant="text" 
                                            color="inherit" 
                                            size="small"
                                            startIcon={<LogoutIcon />}
                                            className="bg-white text-black hover:bg-red-50"
                                        >
                                            Logout
                                        </Button>
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink to="/login" className="mx-2">
                                        <Button 
                                            variant="text" 
                                            color="inherit" 
                                            size="small"
                                            startIcon={<LoginIcon/>}
                                            className="bg-white text-black hover:bg-red-50"
                                        >
                                            Login
                                        </Button>
                                    </NavLink>
                                </>
                                
                            )}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            {props.children}
        </>
    );
}