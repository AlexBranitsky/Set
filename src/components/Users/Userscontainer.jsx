import { connect } from "react-redux";
import { followAC, setUsers, unFollowAC } from "../../redux/users_redux";
import { Users } from "./Users";

let mapStatetoProps = (state)=>{
    return{
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unFollowAC(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsers(users));
        }
    }
};

export const UsersContainer = connect(mapStatetoProps,mapDispatchToProps)(Users)