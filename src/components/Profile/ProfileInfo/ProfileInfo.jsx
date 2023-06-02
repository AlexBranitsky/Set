import React from "react";
import s from './ProfileInfo.module.css';
export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div><img src='https://klike.net/uploads/posts/2019-06/medium/1559370679_19.jpg' alt='foto'></img></div>
            <div>Ava+descriprion</div>
        </div>
    )
};