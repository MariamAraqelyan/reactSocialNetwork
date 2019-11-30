import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/message";
import {sendMessageCreater, updateNewMessageBodyCreater, updateNewPostActionCreater} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElelemt = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreater(body));
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElelemt}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter Your Message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>SEnd</button>
                    </div>
                </div>
            </div>

            <div className={s.messages}>
                {messagesElelemt}
            </div>
        </div>
    )
}

export default Dialogs;