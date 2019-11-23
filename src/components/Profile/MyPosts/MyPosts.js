import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, post: 'hi, how are you', likesCount: 1},
        {id: 2, post: 'it s my first post', likesCount: 5},
    ];

    let postsElement = postsData.map( p => <Post message={p.post} likeCount={p.likesCount}/>);

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
                        {postsElement}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyPosts;

