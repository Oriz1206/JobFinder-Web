// src/Assets/Approute/AppRouter.js
import React from 'react';
import {Routes, Route,  Outlet, useNavigate, json, Navigate } from "react-router-dom";
import Login from '../Page/UserAuth/Login';
import Signup from '../Page/UserAuth/Signup';
import { RoleProvider } from '../Page/UserAuth/Role';


function AppRouter () {
  return (
    <RoleProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        {/* <PrivateRoute path="/recruiter/*" element={<RecruiterRoutes />} />
        <PrivateRoute path="/seeker/*" element={<SeekerRoutes />} /> */}
      </Routes>
    </RoleProvider>

    
  );
}

function PrivateRoute() {

}

function RecruiterRoutes() {

}

function SeekerRoutes() {

}

export default AppRouter;
