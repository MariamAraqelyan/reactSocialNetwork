let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'hi, how are you', likesCount: 1},
                {id: 2, post: 'it s my first post', likesCount: 5},
            ],
            newPostText: 'new project'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sash'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valer'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        sideBar:{}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    addPost(postMessage){
        let newPost = {
            id: 5,
            post: postMessage,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}


export default store;