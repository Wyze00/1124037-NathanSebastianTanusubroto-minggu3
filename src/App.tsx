import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Header";

const LoginForm = lazy(() => import('./component/account/LoginForm'));
const PostList = lazy(() => import('./component/post/PostList'));
const PostDetail = lazy(() => import('./component/post/PostDetail'));
const Logout = lazy(() => import('./component/account/Logout'));

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