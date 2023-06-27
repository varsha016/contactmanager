import axios from "axios"
import {


    GET_ALL_USER_FAIL, GET_ALL_USER_REGESTER, GET_ALL_USER_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REGESTER,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,

    USER__REGISTER, USER__REGISTER_FAIL, USER__REGISTER_REQUEST
} from "../constants/userConstants"

export const registerUserAction = userData => async dispatch => {
    try {
        dispatch({ type: USER__REGISTER_REQUEST })
        const { data } = await axios.post("http://localhost:5000/users", userData)
        dispatch({ type: USER__REGISTER })

    } catch (error) {
        dispatch({ type: USER__REGISTER_FAIL, payload: error.message })
    }
}

export const getAllUserAction = () => async dispatch => {
    try {

        dispatch({ type: GET_ALL_USER_REGESTER })
        const { data } = await axios.get("http://localhost:5000/users",)
        dispatch({ type: GET_ALL_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_USER_FAIL, payload: error.message })
    }
}
export const userLoginAction = loginData => async dispatch => {
    try {

        dispatch({ type: USER_LOGIN_REGESTER })
        const { data } = await axios.get("http://localhost:5000/users")
        const result = data.find(item => item.email == loginData.email &&
            item.password === loginData.password)

        if (!result) {
            dispatch({ type: USER_LOGIN_FAIL, payload: "invalid Email Or password" })
            return
        }
        localStorage.setItem("auth", JSON.stringify(result))
        dispatch({ type: USER_LOGIN_SUCCESS, payload: result })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
    }
}


export const LogoutAction = () => dispatch => {
    dispatch({ type: USER_LOGOUT })
}


