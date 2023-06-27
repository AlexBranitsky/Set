import React from "react";
import { Preloader } from "../../Common/Preloader/Preloader";
import { ProfileStatus } from "./Profilestatus";
import s from './ProfileInfo.module.css';
export const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.content_info}>
            <div><img src='https://klike.net/uploads/posts/2019-06/medium/1559370679_19.jpg' alt='foto'></img></div>
            <div><img src={props.profile.photos.small} alt="foto" /></div>
            <div><ProfileStatus status='Hello my friends'/></div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.fullName}</div>
        </div>
    )
};