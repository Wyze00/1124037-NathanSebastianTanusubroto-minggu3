import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import { useAppSelector } from "../hooks/useAppSelector";

const HomePage = lazy(() => import('./HomePage'));
const LoginPage = lazy(() => import('./account/LoginPage'));
const PostList = lazy(() => import('./post/PostList'));
const PostDetail = lazy(() => import('./post/PostDetail'));
const Logout = lazy(() => import('./account/Logout'));
const Profile = lazy(() => import('./account/Profile'));

export default function App(): React.JSX.Element {
    const { userInfo } = useAppSelector((state) => state.auth);

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    {userInfo && <Route path='/post' element={<PostList />}></Route>}
                    {userInfo && <Route path='/post/:postId' element={<PostDetail />}></Route>}
                    {!userInfo && <Route path='/login' element={<LoginPage />}></Route>}
                    {userInfo && <Route path='/logout' element={<Logout />}></Route>}
                    {userInfo && <Route path='/profile' element={<Profile />}></Route>}
                    <Route path='*' element={<h1>404 Not Found</h1>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}