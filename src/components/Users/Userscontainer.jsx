import { connect } from "react-redux";
import { setCurrentPage, toggleIsFollowing,  getUsers, follow, unFollow } from "../../redux/users_redux";

import s from './../Users/Users.module.css';

import React from "react";
import Users from './Users';
import { Preloader } from "../Common/Preloader/Preloader";

import { WithAuthRedirect } from "../Hoc/WithAuthRegister";
import { compose } from "redux";

// import { userAPI } from "../Api/Api";

class UsersApiContainer extends React.Component {
    // constructor(props) {
    //     super(props)
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(response => {
    //             props.setUsers(response.data.items)
    //         })
    // }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }
    onChange = (number) => {
        this.props.getUsers(number, this.props.pageSize)
        // this.props.setCurrentPage(number)
        // this.props.toggleIsFetching(true)
        // userAPI.getUsers(number, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }
    render() {
        return <>
            <div className={s.preloader}>{this.props.isFetching ? <Preloader /> : null}</div>


            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChange={this.onChange}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                isFollowing={this.props.isFollowing}
                toggleIsFollowing={this.props.toggleIsFollowing}
                
            />
        </>
    }
}

// export const Users = (props) => {
//     const getUsers = () => {
//         if (props.users.lenght === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.SET_USERS(response.data.item)
//                 })
//         }
//     }

//     return (
//         <>
//             <button onClick={getUsers}>Get users</button>
//             <div>{props.users.map(user => <div key={user.id}>
//                 <div className={s.users}>
//                     <div>
//                         <div className={s.ava}>
//                             <img src={photo} alt="foto" />
//                         </div>
//                         <div>{user.name}</div>
//                         <div>{user.followed
//                             ? <button onClick={() => props.FOLLOW(user.id)}>Follow</button>
//                             : <button onClick={() => props.UNFOLLOW(user.id)}>UnFollow</button>}</div>
//                     </div>
//                     <div>
//                         <div>{user.status}</div>
//                     </div>
//                     <div>
//                         <div>{user.location.country}</div>
//                         <div>{user.location.cityname}</div>
//                     </div>
//                 </div>

//             </div>)}</div></>
//     )
// }



let mapStatetoProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (number) => {
//             dispatch(setCurrentPageAC(number))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalCountUsers(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         },

//     }
// };
// let CheckRegister = WithAuthRedirect(UsersApiContainer)
export default compose(
    connect(mapStatetoProps, {
        follow,unFollow,setCurrentPage,toggleIsFollowing,getUsers
    }),
    WithAuthRedirect
)(UsersApiContainer)

// const UsersContainer = connect(mapStatetoProps, {
//     follow,
//     unFollow,
//     // setUsers,
//     setCurrentPage,
//     // setTotalUsersCount,
//     // toggleIsFetching,
//     toggleIsFollowing,
//     getUsers,
// },
// )(CheckRegister)

