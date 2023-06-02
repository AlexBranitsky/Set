const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

export const dialogsReducer = (state = initialState, action)=>{
   let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            stateCopy={
                ...state,
                messagesData: [...state.messagesData,{id: '4',message: state.newMessageText}],
                newMessageText: '',
            }
            return stateCopy;
            
        case UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR:
            stateCopy={
                ...state,
                newMessageText: action.newText,
            }
            return stateCopy;
            default: return state;
    }
}
export const addMessageActionCreator = ()=>{
    return ({type: ADD_MESSAGE})
}
export const updateNewMessageTextActionCreator = (text)=>{
return({type: UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR, newText:text} )
}
