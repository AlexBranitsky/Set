import React from "react";
import s from './Dialogs.module.css';
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";




export const Dialogs = (props) => {

    let dialogElement = props.dialog.map((dialog)=> <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    
    let messageElement = props.message.map((message)=> <Message message={message.message} key={message.id} id={message.id}/>)

    let addMessage = ()=>{
        props.addMessageActionCreator()
    }
    let onMessageChange = (e)=>{
        let newMessage = e.target.value;
        props.updateNewMessageTextActionCreator(newMessage)
        
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                    <div>
                        <div><textarea cols="50" rows="5" onChange={onMessageChange} value={props.newMessage}/></div>
                        <div><button onClick={addMessage}>Add</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
};