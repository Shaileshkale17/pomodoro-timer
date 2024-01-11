import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Timer from '../Timer/Timer'

function Protected() {
    const token = localStorage.getItem("token");
    return (
      <div>
        {token ? <Outlet /> : <Navigate to="/" />}
      </div>
    );
  }
  

export default Protected
