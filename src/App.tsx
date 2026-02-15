import { useEffect } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router";

export default function App(): React.JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('login') === 'true'){
            navigate('/post');
        }
    }, []);

    const handleLogin = () => {
        localStorage.setItem('login', 'true');
        navigate('/post');
    }

    return (
        <>
            <LoginForm onLogin={handleLogin} />
        </>
    );
}