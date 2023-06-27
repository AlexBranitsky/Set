import React from "react";
import {MyPostsConteiner} from './MyPosts/MyPostsConteiner'
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsConteiner />
        </div>
    )
};
export default Profile