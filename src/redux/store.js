import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userContact } from './reducers/contactReducer'
import { userRegester } from './reducers/userReducer'
const localData = JSON.parse(localStorage.getItem("auth"))


const rootReducer = combineReducers({

    Allusers: userRegester,
    contact: userContact
})



export const reduxStore = createStore(
    rootReducer,
    {
        Allusers: {
            login: localData,
            allcontact: []
        }
    },
    composeWithDevTools(applyMiddleware(thunk)))