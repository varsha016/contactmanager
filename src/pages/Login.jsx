import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getAllUserAction, userLoginAction } from '../redux/action/userAction'



export default function Login() {

    const { reduxStore, login } = useSelector(state => state.Allusers)
    const navigate = useNavigate()
    const actionDispatch = useDispatch()
    const [logindData, setlogindData] = useState({
        email: "john@gmail.com",
        password: "123"
    })
    useEffect(() => {
        if (login) {
            navigate("/account")
        }


        // actionDispatch(getAllUserAction())
    }, [login])


    const handleLogin = () => {
        actionDispatch(userLoginAction(logindData))
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">


                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <div>
                            <label htmlFor="email" className="form-label">First Email</label>
                            <input
                                type="text"
                                value={logindData.email}
                                onChange={e => setlogindData({ ...logindData, email: e.target.value })}
                                className="form-control"
                                id="email"
                                placeholder="Enter Your Email"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                value={logindData.password}
                                onChange={e => setlogindData({ ...logindData, password: e.target.value })}
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="btn btn-primary w-100 mt-3">
                            Login
                        </button>
                        <p className="text-center mt-3">
                            Dont Have Account? <a href="#">Create Account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}