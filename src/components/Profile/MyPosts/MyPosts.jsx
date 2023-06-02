
import React from "react";
import { Post } from "./Post/Post";
import s from './MyPosts.module.css';
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile_reducer";


export const MyPosts = (props) => {
    let postsElement = props.posts.map((post)=><Post id={post.id} key={post.id} message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let addPost = ()=>{
        // props.dispatch(addPostActionCreator())
        props.addPostActionCreator()
    }

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        // let action = 
        props.updateNewPostTextActionCreator(text)
        // props.dispatch(action)
    }
    return (
        <div className={s.myPosts}>
            My Posts
            <div>
                <textarea cols="50" rows="5" ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <div><button onClick={addPost}>Add</button></div>
            </div>
                {postsElement}
        </div>
    )
};