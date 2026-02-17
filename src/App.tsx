import { lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import Header from "./Header";

const LoginForm = lazy(() => import('./LoginForm'));
const PostList = lazy(() => import('./PostList'));
const PostDetail = lazy(() => import('./PostDetail'));
const Logout = lazy(() => import('./Logout'));

export default function App(): React.JSX.Element {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<LoginForm />}></Route>
                <Route path='/post' element={<PostList />}></Route>
                <Route path='/post/:postId' element={<PostDetail />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='*' element={<h1>404 Not Found</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}