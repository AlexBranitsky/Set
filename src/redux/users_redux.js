import { userAPI } from "../components/Api/Api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';




let initialState = {
    users: [
        // {
        //     id: '1',
        //     followed:true,
        //     avaphoto: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpZJ2nKhVHQM_pzQB5EUvI-az29L-pduU4YearTRMig&s" alt="foto"/>,
        //     fullname: 'Alex',
        //     status: 'I am boss',
        //     location: { cityname: 'Minsk', country: 'Belarus' },
        // },
        // {
        //     id: '2',
        //     followed:false,
        //     avaphoto: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpZJ2nKhVHQM_pzQB5EUvI-az29L-pduU4YearTRMig&s" alt="foto"/>,
        //     fullname: 'Alexfolf',
        //     status: 'I am boss really',
        //     location: { cityname: 'Minsk', country: 'Belarus' },
        // },
        // {
        //     id: '3',
        //     followed:true,
        //     avaphoto: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpZJ2nKhVHQM_pzQB5EUvI-az29L-pduU4YearTRMig&s" alt="foto"/>,
        //     fullname: 'Alexandra',
        //     status: 'I am boss too',
        //     location: { cityname: 'Minsk', country: 'Belarus' },
        // },
    ],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],


}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.page }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFetching ? [...state.isFollowing, action.userId] : state.isFollowing.filter(id => id !== action.userId)
            }
        }
        default: return state;
    }
}
export const followSaccsec = (userId) => ({ type: FOLLOW, userId })

export const unFollowSaccsec = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (numberPage) => ({ type: SET_CURRENT_PAGE, page: numberPage })

export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow =(userId)=> {
    return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    userAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSaccsec(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}
}

export const unFollow =(userId)=> {
    return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    userAPI.unFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowSaccsec(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}
}