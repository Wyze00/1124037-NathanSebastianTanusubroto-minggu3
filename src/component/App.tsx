import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Header";
import { useAppSelector } from "../hooks/useAppSelector";

const HomePage = lazy(() => import('./HomePage'));
const LoginPage = lazy(() => import('./account/LoginPage'));
const PostList = lazy(() => import('./post/PostList'));
const PostDetail = lazy(() => import('./post/PostDetail'));
const Logout = lazy(() => import('./account/Logout'));

export default function App(): React.JSX.Element {
    const { userInfo } = useAppSelector((state) => state.auth);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/post' element={<PostList />}></Route>
                <Route path='/post/:postId' element={<PostDetail />}></Route>
                {!userInfo && <Route path='/login' element={<LoginPage />}></Route>}
                {userInfo && <Route path='/logout' element={<Logout />}></Route>}
                <Route path='*' element={<h1>404 Not Found</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}