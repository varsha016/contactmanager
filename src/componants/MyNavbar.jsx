import React from 'react'
import { useSelector } from 'react-redux'

import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { LogoutAction } from '../redux/action/userAction'
export default function MyNavbar() {
    const navigete = useNavigate()
    const actionDispacth = useDispatch()
    const { login, logout } = useSelector(state => state.Allusers)
    const { getcontacts } = useSelector(state => state.contact)

    const logoutData = () => {
        actionDispacth(LogoutAction())
        navigete("/register")
    }

    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand" >SKILLHUB</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active" >
                        Home
                    </Link>

                    {login && login.admin && <>

                        <Link to="/dashboard" className="nav-link" >
                            Dashboard
                        </Link>

                    </>}



                    {login && !login.admin && <>
                        <Link to="/addcontact" className="nav-link" >
                            Addcontact
                        </Link>
                        <Link to="/account" className="nav-link" >
                            Account
                        </Link>


                    </>
                    }


                    {login && <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            {login.name}

                        </button>
                        <ul class="dropdown-menu bg-secondary">
                            <li><Link class="dropdown-item" to='/logout'>something</Link></li>
                            <li><Link class="dropdown-item" to=''>Another action</Link></li>
                            <li><Link class="dropdown-item" to=''>Something else here</Link></li>
                            <button className='btn btn-outline-dark m-2' onClick={logoutData}>Logout</button>
                        </ul>
                    </div>}

                    {!login && <>
                        <Link to="/login" className="nav-link" >
                            Login
                        </Link>
                        <Link to="/register" className="nav-link" >
                            register
                        </Link>

                    </>}





                    {/* <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            {getcontacts && getcontacts.name}

                        </button>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to=''>Action</Link></li>
                            <li><Link class="dropdown-item" to=''>Another action</Link></li>
                            <li><Link class="dropdown-item" to=''>Something else here</Link></li>
                        </ul>
                    </div> */}

                </div>
            </div>
        </div>
    </nav >
}