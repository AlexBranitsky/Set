
import React from "react";
import { Post } from "./Post/Post";
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form'
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile_reducer";

export const MyPosts = (props) => {
    let postsElement = props.posts.map((post) => <Post id={post.id} key={post.id} message={post.message} likes={post.likes} />)

    // let newPostElement = React.createRef();

    // let addPost = () => {
    //     // props.dispatch(addPostActionCreator())
    //     props.addPostActionCreator()
    // }

    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     //     // let action = 
    //     props.updateNewPostTextActionCreator(text)
    //     //     // props.dispatch(action)
    // }
    const onSubmit = (formData)=>{
        console.log(formData)
    }
    return (
        <div className={s.myPosts}>
            My Posts
            <div>
                <PostReduxForm onSubmit={onSubmit}/>
                {/* <textarea cols="50" rows="5" ref={newPostElement} value={props.newPostText} onChange={onPostChange}/> */}
                {/* <div><button onClick={addPost}>Add</button></div> */}
            </div>
            {postsElement}
        </div>
    )
};

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"Post"} component={'textarea'} placeholder={'Enter your post'}></Field>
            </div>
            <div>
                <button>Send</button>
            </div>
            
        </form>
    )
}
const PostReduxForm = reduxForm({ form: 'Post' })(PostForm)