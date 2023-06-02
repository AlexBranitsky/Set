import React from "react";
import {MyPostsConteiner} from './MyPosts/MyPostsConteiner'
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
export const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsConteiner />
        </div>
    )
};