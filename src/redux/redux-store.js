import { combineReducers, legacy_createStore as createStore } from 'redux';
import { dialogsReducer } from './dialogs_reducer';
import { profileReducer } from './profile_reducer';
import { usersReducer } from './users_redux';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
})
export let store = createStore(reducers);