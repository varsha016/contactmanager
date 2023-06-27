import {
    ADD_CONTACT_FAIL, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS,
    DELETE_CONTACT_FAIL,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    GET_CONTACT_FAIL, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS, GET_CONTACT_UPDATE_FAIL, GET_CONTACT_UPDATE_REQUEST, GET_CONTACT_UPDATE_SUCCESS
} from "../constants/contactReducer"

export const userContact = (state = { allcontact: [] }, { type, payload }) => {
    switch (type) {
        case ADD_CONTACT_REQUEST: return { ...state, loading: true }
        case ADD_CONTACT_SUCCESS: return { ...state, contact: true, loading: false }
        case ADD_CONTACT_FAIL: return { ...state, loading: false, error: payload }

        case GET_CONTACT_REQUEST: return { ...state, loading: true }
        case GET_CONTACT_SUCCESS: return { ...state, allcontact: payload, loading: false, }
        case GET_CONTACT_FAIL: return { ...state, loading: false, error: payload }


        case GET_CONTACT_UPDATE_REQUEST: return { ...state, loading: true }
        case GET_CONTACT_UPDATE_SUCCESS: return { ...state, updatedata: payload, loading: false, }
        case GET_CONTACT_UPDATE_FAIL: return { ...state, loading: false, error: payload }



        case DELETE_CONTACT_REQUEST: return { ...state, loading: true }
        case DELETE_CONTACT_FAIL: return { ...state, deletedata: true, loading: false, }
        case DELETE_CONTACT_SUCCESS: return { ...state, error: payload, loading: false }
        default: return state
    }


}

