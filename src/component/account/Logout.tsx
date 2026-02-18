import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { authAction } from "../../redux/authSlice";

export default function Logout(): React.JSX.Element {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authAction.setUserInfo(undefined));
        localStorage.setItem('login', 'true');
        navigate('/', { replace: true });
    }, []);

    return (
        <>
        </>
    );
}