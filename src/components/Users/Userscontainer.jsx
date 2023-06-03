import { connect } from "react-redux";
import { followAC, setUsers, unFollowAC } from "../../redux/users_redux";
import { Users } from "./Users";

let mapStatetoProps = (state)=>{
    console.log(state)
    return{
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        FOLLOW: (userId)=>{
            dispatch(followAC(userId));
        },
        UNFOLLOW: (userId)=>{
            dispatch(unFollowAC(userId));
        },
        SET_USERS: (users)=>{
            dispatch(setUsers(users));
        }
    }
};

export const UsersContainer = connect(mapStatetoProps,mapDispatchToProps)(Users)