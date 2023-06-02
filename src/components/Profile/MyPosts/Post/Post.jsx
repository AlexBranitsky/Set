import React from "react";
import s from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={s.post}>
                <img src='' alt='foto' />
                {props.message}
            <div>likes: {props.likes}</div>
        </div>
    )
};