import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './pages/mainPage'
import EditInformationPage from './pages/editInformationPage'
import MyPostListPage from './pages/myPostListPage'
import PostPage from './pages/postPage'
import SignInPage from './pages/signInPage'
import WritePostPage from './pages/writePostPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/me" element={<EditInformationPage/>} />
          <Route path="/me/posts" element={<MyPostListPage/>} />
          <Route path="/write-post" element={<WritePostPage/>} />
          <Route path="/post" element={<PostPage/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
