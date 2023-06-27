import { authAPI } from "../components/Api/Api";

const SET_DATA_USER = 'SET_DATA_USER';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default: return state;
    }


}
export const setDataUser = (userid, login, email) => ({ type: SET_DATA_USER, data: { userid, login, email } })

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setDataUser(id, login, email))
            }
        })
}}



