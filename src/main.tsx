import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = lazy(() => import('./App'));
const PostList = lazy(() => import('./PostList'));

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/postlist' element={<PostList />}></Route>
    </Routes>
  </BrowserRouter>
)
