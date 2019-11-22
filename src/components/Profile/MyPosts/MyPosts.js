import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                <h3> my post</h3>
                <div>
                    <div>
                        <div>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                    </div>
                    <div className={s.Posts}>
                        <Post message='hi, how are you'/>
                        <Post message='it s my first post'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyPosts;

