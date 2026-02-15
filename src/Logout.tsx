import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Logout(): React.JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('login');
        navigate('/', { replace: true });
    }, [navigate]);

    return (
        <>
        </>
    );
}