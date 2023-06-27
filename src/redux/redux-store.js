import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './auth_reducer';

import { dialogsReducer } from './dialogs_reducer';
import { profileReducer } from './profile_reducer';
import { usersReducer } from './users_redux';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));