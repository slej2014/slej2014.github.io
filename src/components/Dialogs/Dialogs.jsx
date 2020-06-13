import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Serhii"},
        {id: 2, name: "Yurii"},
        {id: 3, name: "Hanna"},
        {id: 4, name: "Vitalik"},
        {id: 5, name: "Andrii"}
    ];

    let dialogsElements = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    //     [<DialogItem name={dialogsData [0].name} id={dialogsData [0].id}/>,
    //     <DialogItem name={dialogsData [1].name} id={dialogsData [1].id}/>,
    //     <DialogItem name={dialogsData [2].name} id={dialogsData [2].id}/>,
    //     <DialogItem name={dialogsData [3].name} id={dialogsData [3].id}/>,
    //     <DialogItem name={dialogsData [4].name} id={dialogsData [4].id}/>
    // ]

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Ok"}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


                {/*<DialogItem name={dialogsData [0].name} id={dialogsData [0].id}/>*/}
                {/*<DialogItem name={dialogsData [1].name} id={dialogsData [1].id}/>*/}
                {/*<DialogItem name={dialogsData [2].name} id={dialogsData [2].id}/>*/}
                {/*<DialogItem name={dialogsData [3].name} id={dialogsData [3].id}/>*/}
                {/*<DialogItem name={dialogsData [4].name} id={dialogsData [4].id}/>*/}
            </div>
            <div className={s.messages}>
                {/*<Message message={messagesData[0].message}/>*/}
                {/*<Message message={messagesData[1].message}/>*/}
                {/*<Message message={messagesData[2].message}/>*/}
            </div>
        </div>

    )
}

export default Dialogs;