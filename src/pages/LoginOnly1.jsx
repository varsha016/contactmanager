import React from 'react'
import { useSelector } from 'react-redux'

export default function LoginOnly1({ element }) {
    const { login } = useSelector(state => state.Allusers)
    return login
        ? login.admin
            ? "DashBoard page"
            : element
        : "unathorized access"








}
