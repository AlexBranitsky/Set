import React from "react";
import s from './Users.module.css';
import photo from '../Asseats/images/usersava.png';
import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { userAPI } from "../Api/Api";


const Users = (props) => {
    let total = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= total; i++) {
        pages.push(i)
    }
    
    return (
        <div>
            <div className={s.number}>
                {pages.map(number => {
                    return <span className={props.currentPage === number && s.pages_active} onClick={(e) => props.onChange(number)}>{number}</span>
                })}
            </div>
            <div>{props.users.map(user => <div key={user.id}>
                <div className={s.users}>
                    <div>
                        <div className={s.ava}>
                            <NavLink to={'/profile/' + user.id}><img src={user.photos ? (user.photos.small ? user.photos.small : photo) : photo} alt="foto" /></NavLink>
                        </div>
                        <div>{user.name}</div>
                        <div>{user.followed
                            ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id)
                                // props.toggleIsFollowing(true, user.id)
                                // userAPI.follow(user.id)
                                // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                // //     {
                                // //         withCredentials: true,
                                // //         headers: { 'API-KEY': '99fb8d69-6f94-4d8c-a51d-4ff30cb4fbd3' }
                                // //     })
                                //     .then(response => {
                                //         if (response.data.resultCode === 0) {
                                //             props.follow(user.id)
                                //         }
                                //         props.toggleIsFollowing(false, user.id)
                                //     })
                            }}>Follow</button>
                            : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                props.unFollow(user.id)
                                // props.toggleIsFollowing(true, user.id)
                                // userAPI.unFollow(user.id)
                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': '99fb8d69-6f94-4d8c-a51d-4ff30cb4fbd3',
                                //     }
                                // })
                                    // .then(response => {
                                        
                                    //     if (response.data.resultCode === 0) {
                                    //         props.unFollow(user.id)
                                    //     }
                                    //     props.toggleIsFollowing(false, user.id)
                                    // })
                            }}>UnFollow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>user.location.country</div>
                        <div>user.location.cityname</div>
                    </div>
                </div>
            </div>)}
            </div>
        </div>
    )
}
export default Users