let rerenderEntrieTree = () => {

}

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntrieTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntrieTree(state);
}

export const subscribe = (observer) => {
    rerenderEntrieTree = observer;
}

export default state;