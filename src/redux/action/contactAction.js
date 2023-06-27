import axios from "axios"

import {
    ADD_CONTACT_FAIL, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS,
    DELETE_CONTACT_FAIL,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    GET_CONTACT_FAIL, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS,
    GET_CONTACT_UPDATE_FAIL, GET_CONTACT_UPDATE_REQUEST, GET_CONTACT_UPDATE_SUCCESS
} from "../constants/contactReducer"



export const postaddContact = getcontact => async dispatch => {
    try {

        dispatch({ type: ADD_CONTACT_REQUEST })
        const { data } = await axios.post("http://localhost:5000/contacts", getcontact)
        dispatch({ type: ADD_CONTACT_SUCCESS })
    } catch (error) {
        dispatch({ type: ADD_CONTACT_FAIL, payload: error.message })
    }

}

export const getAllContact = (id )=> async dispatch => {

    try {
        dispatch({ type: GET_CONTACT_REQUEST })
        const { data } = await axios.get("http://localhost:5000/contacts")
        console.log(data);

        const filteredData = data.filter(item => item.userId === id)
        console.log(filteredData);
        dispatch({ type: GET_CONTACT_SUCCESS, payload: filteredData })

    } catch (error) {
        dispatch({ type: GET_CONTACT_FAIL, payload: error.message })

    }
}
export const getAddUpdateContact = (id, xx) => async (dispatch, getState) => {
    try {

        dispatch({ type: GET_CONTACT_UPDATE_REQUEST })
        const { data } = await axios.put(`http://localhost:5000/contacts/${id}`, xx)
        dispatch({ type: GET_CONTACT_UPDATE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_CONTACT_UPDATE_FAIL, payload: error.message })

    }
}


export const deletedataAction = (id, xx) => async dispatch => {
    try {
        dispatch({ type: DELETE_CONTACT_REQUEST })

        const { data } = await axios.delete(`http://localhost:5000/contacts/${id}`, xx)
        dispatch({ type: DELETE_CONTACT_SUCCESS,  })

    } catch (error) {
        dispatch({ type: DELETE_CONTACT_FAIL, payload: error.message })
    }
}
