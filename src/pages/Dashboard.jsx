import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllContact } from '../redux/action/contactAction'

export default function Dashboard() {
    const actionDispatch = useDispatch()
    const [getid, setGetid] = useState()
    const { allcontact } = useSelector(state => state.contact)
    const { login } = useSelector(state => state.Allusers)



    useEffect(() => {
        actionDispatch(getAllContact(login.id))

    }, [])

    return (<>
        <pre>{JSON.stringify(allcontact)}</pre>

        <div className="container bg-dark">
            <div className="row">
                <div className="col-sm-6 ">

                    {allcontact.map(item => <div className="card mt-3 bg-light mt-2">
                        <div className="card-header"><img src={item.avatar} alt="" width={300} height={200} /></div>
                        <div className="card-body">
                            <h5>Name:- {item.name}</h5>
                            <h5>Mobail :- {item.mobile}</h5>
                        </div>

                        {/* <button type="button" onClick={e => setGetid(item.id)} className="btn btn-success">click</button> */}
                    </div>)}


                </div>
            </div>
        </div>


    </>

    )
}
