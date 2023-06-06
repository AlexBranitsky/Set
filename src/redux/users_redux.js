const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: '1',
            followed:true,
            avaphoto: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpZJ2nKhVHQM_pzQB5EUvI-az29L-pduU4YearTRMig&s" alt="foto"/>,
            fullname: 'Alex',
            status: 'I am boss',
            location: { cityname: 'Minsk', country: 'Belarus' },
        },
        {
            id: '2',
            followed:false,
            avaphoto: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpZJ2nKhVHQM_pzQB5EUvI-az29L-pduU4YearTRMig&s" alt="foto"/>,
            fullname: 'Alexfolf',
            status: 'I am boss really',
            location: { cityname: 'Minsk', country: 'Belarus' },
        },
        {
            id: '3',
            followed:true,
            avaphoto: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpZJ2nKhVHQM_pzQB5EUvI-az29L-pduU4YearTRMig&s" alt="foto"/>,
            fullname: 'Alexandra',
            status: 'I am boss too',
            location: { cityname: 'Minsk', country: 'Belarus' },
        },
    ],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users:state.users.map(user=>{
                    if(user.id === action.userId){
                        return{...user, followed:false}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map(user=>{
                    if(user.id === action.userId){
                        return{...user, followed:true}
                    }
                    return user;
                })
            }
        case SET_USERS:{
            return{...state, users:[...state.users, ...action.users]}
        }
            
        default: return state;
    }


}
export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unFollowAC = (userId) =>({ type: UNFOLLOW, userId })

export const setUsers = (users) =>({type: SET_USERS, users})