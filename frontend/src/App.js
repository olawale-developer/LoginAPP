import React from  'react'
import Login from './login'
import Signup from './signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} ></Route>
            <Route path="/signup" element={<Signup />} ></Route>
        </Routes>
          
        </BrowserRouter>
    )
}