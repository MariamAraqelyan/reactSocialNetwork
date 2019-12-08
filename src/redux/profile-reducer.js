const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hi, how are you', likesCount: 1},
        {id: 2, message: 'it s my first post', likesCount: 5},
    ],
    newPostText: 'new project'
};

const profileReducer = (state = initialState, action) => {
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
