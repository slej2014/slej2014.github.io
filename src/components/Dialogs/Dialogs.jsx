import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Serhii"},
        {id: 2, name: "Yurii"},
        {id: 3, name: "Hanna"},
        {id: 4, name: "Vitalik"},
        {id: 5, name: "Andrii"}
    ];

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Ok"}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;