import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    const token = localStorage.getItem('Bearer')

    if(!token) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default Protected