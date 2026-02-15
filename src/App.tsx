import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";
import { useNavigate } from "react-router";

export default function App(): React.JSX.Element {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('login') === 'true'){
            setIsLogin(true);
            navigate('/postlist');
        }

    }, [isLogin]);

    const handleLogin = () => {
        setIsLogin(true);
    }

    return (
        <>
            <Header isLogin={isLogin} />
            <LoginForm onLogin={handleLogin} />
        </>
    );
}