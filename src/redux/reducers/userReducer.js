import {


    GET_ALL_USER_FAIL, GET_ALL_USER_REGESTER, GET_ALL_USER_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REGESTER,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER__REGISTER, USER__REGISTER_FAIL, USER__REGISTER_REQUEST
} from "../constants/userConstants";

export const userRegester = (state = {reduxUsers:[]}, { type, payload }) => {
    switch (type) {
        case USER__REGISTER_REQUEST: return { ...state, loading: true }
        case USER__REGISTER: return { ...state, registered: true, loading: false }
        case USER__REGISTER_FAIL: return { ...state, error: payload, loading: false }


        case GET_ALL_USER_REGESTER: return { ...state, loading: true }
        case GET_ALL_USER_SUCCESS: return { ...state, loading: false, reduxUsers: payload }
        case GET_ALL_USER_FAIL: return { ...state, loading: false, error: payload }


        case USER_LOGIN_REGESTER: return { ...state, loading: true }
        case USER_LOGIN_SUCCESS: return { ...state, loading: false, login: payload }
        case USER_LOGIN_FAIL: return { ...state, loading: false, error: payload }


        case USER_LOGOUT: return { ...state, login: false }



        default: return state

    }

}



