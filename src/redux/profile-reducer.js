const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.TYPE) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreater = () => ({
    type: 'ADD-POST'
});

export const updateNewPostActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;