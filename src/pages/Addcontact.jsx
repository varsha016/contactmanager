import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postaddContact } from '../redux/action/contactAction'


export default function Addcontact() {
    const cantactAction = useDispatch()
    const { login } = useSelector(state => state.Allusers)

    const [addcontact, setaddcontact] = useState({
        name: "john",
        mobile: "8888888888",
        avatar: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',

    })

    const handleContact = () => {
        cantactAction(postaddContact({ ...addcontact, userId: login.id }))
    }


    return (<>

        <div className="container">
            <div className="row">
                <div className="col0sm-6 offset-3">
                    <div className="mt-2">
                        <label for="Name" className="form-label">Name</label>
                        <input
                            type="text"
                            value={addcontact.name}
                            onChange={e => setaddcontact({ ...addcontact, name: e.target.value })}
                            className="form-control"
                            id="name"
                            placeholder="Enter Your Password"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a Name.</div>
                    </div>
                    <div className="mt-2">
                        <label for="image" className="form-label">Image</label>
                        <input
                            type="text"
                            value={addcontact.avatar}
                            onChange={e => setaddcontact({ ...addcontact, avatar: e.target.value })}
                            className="form-control"
                            id="image"
                            placeholder="Enter Your image"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a image.</div>
                    </div>
                    <div className="mt-2">
                        <label for="mobile" className="form-label">Mobile</label>
                        <input
                            type="text"
                            value={addcontact.mobile}
                            onChange={e => setaddcontact({ ...addcontact, mobile: e.target.value })}
                            className="form-control"
                            id="passwormobile"
                            placeholder="Enter Your Mobile"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a Mobile.</div>
                    </div>

                    <button type="button" onClick={handleContact} className="btn btn-primary">Add Contact</button>


                </div>
            </div>
        </div>

    </>

    )
}
