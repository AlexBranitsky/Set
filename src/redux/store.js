import { dialogsReducer } from "./dialogs_reducer";
import { profileReducer } from "./profile_reducer";


// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR = 'UPDATE-NEW-MESSAGE-TEXT';

export let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', message: 'Hi', likes: '11' },
                { id: '2', message: 'Hi', likes: '12' },
                { id: '3', message: 'Hi', likes: '13' },
            ],
            newPostText: 'Yo',
        },
        messagePage: {
            dialogsData: [
                { id: '1', name: 'Alex' },
                { id: '2', name: 'Volha' },
                { id: '3', name: 'Alexandra' },
            ],
            messagesData: [
                { id: '1', message: 'Al' },
                { id: '2', message: 'Vol' },
                { id: '3', message: 'Alexand' },
            ],
            newMessageText: 'Hello',
        }
    },
    _callSuscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSuscriber = observer
    },

    // addPost () {
    //     let newPost = {
    //         id:'4',
    //         message: this._state.profilePage.newPostText,
    //         likes:0,
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText=' ';
    //     this._callSuscriber(this._state);
    // },
    // updateNewPostText(text) {
    //     this._state.profilePage.newPostText = text
    //     this._callSuscriber(this._state)
    // },
    dispatch(action) {

        this._state.messagePage = dialogsReducer(this._state.messagePage,action)
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._callSuscriber(this._state)
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: '4',
        //         message: this._state.profilePage.newPostText,
        //         likes: 0,
        //     }
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSuscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT_ACTION_CREATOR) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSuscriber(this._state)
        // } else if (action.type === ADD_MESSAGE){
        //     let newMessage = {
        //         id: '4',
        //         message: this._state.messagePage.newMessageText,
        //     }
        //     this._state.messagePage.messagesData.push(newMessage)
        //     this._state.messagePage.newMessageText = ''
        //     this._callSuscriber(this._state)
        // } else if(action.type === UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR){
        //     this._state.messagePage.newMessageText = action.newText
        //     this._callSuscriber(this._state)
        // }
    },
}
// export const addPostActionCreator = ()=>{
//     return ({type: ADD_POST})
// }
// export const updateNewPostTextActionCreator = (text)=>{
// return({type: UPDATE_NEW_POST_TEXT_ACTION_CREATOR, newText:text} )
// }
// export const addMessageActionCreator = ()=>{
//     return ({type: ADD_MESSAGE})
// }
// export const updateNewMessageTextActionCreator = (text)=>{
// return({type: UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR, newText:text} )
// }
