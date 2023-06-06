import axios from "axios";
import React from "react";
import s from './Users.module.css';
import photo from '../Asseats/images/usersava.png';

export class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.item)
                debugger
            })
    }
    render() {
        return (
            <>
                <div>{this.props.users.map(user => <div key={user.id}>
                    <div className={s.users}>
                        <div>
                            <div className={s.ava}>
                                <img src={photo} alt="foto" />
                            </div>
                            <div>{user.name}</div>
                            <div>{user.followed
                                ? <button onClick={() => this.props.follow(user.id)}>Follow</button>
                                : <button onClick={() => this.props.unfollow(user.id)}>UnFollow</button>}</div>
                        </div>
                        <div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{user.location.country}</div>
                            <div>{user.location.cityname}</div>
                        </div>
                    </div>
                </div>)}</div></>
        )
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