import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

type LoginFormProps = {
    onLogin: () => void;
}

export default function LoginForm({onLogin}: LoginFormProps): React.JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {

        const response = await fetch('http://localhost:5173/api/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email, password
            })
        })
        
        if(response.status === 200){
            localStorage.setItem('login', 'true');
            onLogin();
        }
    }

    return (
        <div className="flex min-h-[400px] items-center justify-center p-4">
            <Paper elevation={3} className="w-full max-w-md p-8 flex flex-col gap-6">
                <Box className="text-center">
                    <Typography variant="h5" component="h1" fontWeight="bold">
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Please enter your details
                    </Typography>
                </Box>

                <Box component="form" className="flex flex-col gap-4">
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button 
                        variant="contained" 
                        size="large"
                        fullWidth
                        onClick={handleClick}
                        className="bg-blue-600 hover:bg-blue-700 py-3 mt-2"
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}