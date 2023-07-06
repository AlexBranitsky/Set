
import { MyPosts } from './MyPosts'
import { addPostActionCreator } from "../../../redux/profile_reducer";
import { connect } from "react-redux";


// export const MyPostsConteiner = (props) => {
//     // let state = props.store.getState();
    
//     // let postsElement = props.posts.map((post) => <Post id={post.id} message={post.message} likes={post.likes} />)
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }

//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action)
//     }
//     return (
//         <MyPosts updateNewPostTextActionCreator={onPostChange}
//             addPostActionCreator={addPost} posts={profilePage.posts}
          
//             newPostText={state.profilePage.newPostText} />
//     )
// };

let mapStateToProps=(state)=>{
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
};

let mapDispatchToProps=(dispatch)=>{
    return{
        // updateNewPostTextActionCreator:(text)=>{
        //     dispatch(updateNewPostTextActionCreator(text));
        // },
        addPostActionCreator:(newPost)=>{
            dispatch(addPostActionCreator(newPost));
        },
    }
}

export const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);