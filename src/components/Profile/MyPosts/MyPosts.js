import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post message={p.post} likeCount={p.likesCount}/>);

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

