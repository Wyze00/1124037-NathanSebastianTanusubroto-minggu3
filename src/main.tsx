import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Header';

const App = lazy(() => import('./App'));
const PostList = lazy(() => import('./PostList'));
const PostDetail = lazy(() => import('./PostDetail'));
const Logout = lazy(() => import('./Logout'));

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/post' element={<PostList />}></Route>
      <Route path='/post/:postId' element={<PostDetail />}></Route>
      <Route path='/logout' element={<Logout />}></Route>
    </Routes>
  </BrowserRouter>
)
