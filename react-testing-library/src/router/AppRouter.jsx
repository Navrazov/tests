import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import Users from '../Users/Users'
import UsersPage from '../pages/UsersPage'
import ErrorPage from '../pages/ErrorPage'

const AppRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path='/users' element={<Users/>}/>
    <Route path="/users/:id" element={<UsersPage/>}/>
    <Route path="/*" element={<ErrorPage />}/>
  </Routes>
  )
}

export default AppRouter
