import React from 'react'
import { Navigate } from 'react-router'

const Protected = ({ children, user }) => {
  return user ? children : <Navigate to= "login"/>
}

export default Protected;
