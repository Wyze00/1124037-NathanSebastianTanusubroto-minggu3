import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";

type HeaderProps = {
    isLogin: boolean;
}

export default function Header({ isLogin = false }: HeaderProps): React.JSX.Element {
    const navigate = useNavigate();
    
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