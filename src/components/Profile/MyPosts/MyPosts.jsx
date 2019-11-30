import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreater, updateNewPostActionCreater} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreater(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3> my post</h3>
                <div>
                    <div>
                        <div>
                            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                        </div>
                        <div>
                            <button onClick={addPost}>Add post</button>
                        </div>
                    </div>
                    <div className={s.Posts}>
                        {postsElement}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyPosts;

