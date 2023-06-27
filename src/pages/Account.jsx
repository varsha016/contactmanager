import React, { useState, useEffect } from 'react'


import { useDispatch, useSelector } from "react-redux"
import { deletedataAction, getAddUpdateContact, getAllContact } from '../redux/action/contactAction'

export default function Account() {

    const actionDispatch = useDispatch()
    const contactDispatch = useDispatch()

    const { allcontact, updatedata, deletedata } = useSelector(state => state.contact)
    const { reduxUsers, login } = useSelector(state => state.Allusers)


    const [update, setUpDate] = useState({
        show: false,
        name: "john",
        mobile: "888888",
        avatar: 'https://media.istockphoto.com/photos/social-web-concept-picture-id1004202128?b=1&k=20&m=1004202128&s=170667a&w=0&h=SsUyoCKaG515yRw7yZj13Y3rK996dCaD4gODmjaGoYk='

    })





    useEffect(() => {
        actionDispatch(getAllContact(login.id))


    }, [updatedata])



    const handleEditData = arg => {
        setUpDate({ show: true, ...arg })


    }

    const handleUpDate = arg => {
        const xx = { ...update }
        setUpDate({ show: false })
        contactDispatch(getAddUpdateContact(arg.id, xx))
    }

    const deleteDataContacts = id => {
        const xx = { ...update }
        setUpDate({ show: false })
        contactDispatch(deletedataAction(id, xx))

    }

    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 ">

                    {allcontact.map((item, index) => <div className="card mt-3">
                        <div className="card-header"><img src={item.avatar} alt="" width={300} height={200} /></div>
                        <div className="card-body">
                            <h5>Name:-{item.name}</h5>
                            <h5>Contact:-{item.mobile}</h5>
                        </div>
                        <div className='d-flex gap-2'>

                            <button onClick={e => handleEditData(item)} className="btn btn bg-success ">Edit</button>
                            <button onClick={e => deleteDataContacts(item.id)} className="btn btn bg-danger ">delete</button>
                            <button type="button" onClick={e => handleUpDate(item)} className="btn btn-warning ">upDate</button>
                        </div>




                    </div>)}


                </div>
                <div className="col-sm-6 ">



                    {update.show && <div className="card ">


                        <div className="mt-2">
                            <label for="Name" className="form-label">Name</label>
                            <input
                                type="text"
                                value={update.name}
                                onChange={e => setUpDate({ ...update, name: e.target.value })}
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
                                value={update.avatar}
                                onChange={e => setUpDate({ ...update, avatar: e.target.value })}
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
                                value={update.mobile}
                                onChange={e => setUpDate({ ...update, mobile: e.target.value })}
                                className="form-control"
                                id="passwormobile"
                                placeholder="Enter Your Mobile"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a Mobile.</div>
                        </div>

                    </div>}




                </div>
            </div>
        </div>




    </>
}

