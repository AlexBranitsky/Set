const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: '1', message: 'Hi', likes: '11' },
        { id: '2', message: 'Hi', likes: '12' },
        { id: '3', message: 'Hi', likes: '13' },
    ],
    newPostText: 'Yo',
}

export const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            stateCopy = {
                ...state,
                posts: [...state.posts,{id: '4',message: state.newPostText,likes: '1',
            }],
                newPostText: '',
            }
            return stateCopy;
        case UPDATE_NEW_POST_TEXT_ACTION_CREATOR:
            stateCopy ={
                ...state,
                newPostText: action.newText,
            }
            return stateCopy;
        default: return state;
    }


}
export const addPostActionCreator = () => {
    return ({ type: ADD_POST })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({ type: UPDATE_NEW_POST_TEXT_ACTION_CREATOR, newText: text })
}