// src/Assets/Approute/AppRouter.js
import React from 'react';
import {Routes, Route, Outlet, useNavigate, json,} from "react-router-dom";import Login from '../Page/UserAuth/Login';
import Signup from '../Page/UserAuth/Signup';

function AppRouter () {
  return (
    <>
        <Routes>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
    </>

    
  );
}

export default AppRouter;
