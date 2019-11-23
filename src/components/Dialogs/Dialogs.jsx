import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/message";

const Dialogs = () => {

    let DialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sash'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valer'}
    ];

    let MessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    let dialogsElement = DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElelemt = MessagesData.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElelemt}
            </div>
        </div>
    )
}

export default Dialogs;