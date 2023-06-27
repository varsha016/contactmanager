
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserAction } from '../redux/action/userAction'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const { error, registered, loading, x } = useSelector(state => state.Allusers)

    const actionDispatch = useDispatch()
    const [userData, setuserData] = useState({
        name: "john",
        email: "john@gmail.com",
        password: "123",
        cpassword: "123"
    })
    const registerUser = () => {
        actionDispatch(registerUserAction({ ...userData, admin: false }))
        setTimeout(() => {

            navigate("/login")
        }, 3000);

    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                {error && <div className='alert alert-danger'>{error}</div>}
                {registered && <h1 className='alert alert-success'>Registered successfully</h1>}
                {loading && <div className=' spinner-border'></div>}
                <div className="card ">
                    <div className="card-header">Signup</div>
                    <div className="card-body">
                        <div>
                            <label htmlFor="name" className="form-label">First name</label>
                            <input
                                type="text"
                                value={userData.name}
                                onChange={e => setuserData({ ...userData, name: e.target.value })}
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="email" className="form-label">First Email</label>
                            <input
                                type="text"
                                value={userData.email}
                                onChange={e => setuserData({ ...userData, email: e.target.value })}
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
                                type="text"
                                value={userData.password}
                                onChange={e => setuserData({ ...userData, password: e.target.value })}
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a password.</div>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="cpassword" className="form-label"
                            >Confirm Password</label
                            >
                            <input
                                type="text"
                                value={userData.cpassword}
                                onChange={e => setuserData({ ...userData, cpassword: e.target.value })}
                                className="form-control"
                                id="cpassword"
                                placeholder="Confirm Your Password"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                                Please Recheck Your Password.
                            </div>
                        </div>
                        <button onClick={registerUser} type="button" className="btn btn-primary w-100 mt-3">
                            Signup
                        </button>
                        <p className="text-center mt-3">
                            Already Have Account? <a href="#">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
