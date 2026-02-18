import { Link } from "react-router";
import { useAppSelector } from "../hooks/useAppSelector";

export default function HomePage(): React.JSX.Element {
    const { userInfo } = useAppSelector(state => state.auth);

    return (
        <>
            <p>Welcome !</p>
            {userInfo ? <button><Link to="/logout">Logout</Link></button> : <button><Link to="/login">Login</Link></button>}
        </>
    );
}