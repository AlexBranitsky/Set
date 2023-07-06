import React from "react";
import s from './Dialogs.module.css';
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { Field, reduxForm } from 'redux-form'


export const Dialogs = (props) => {

    let dialogElement = props.dialog.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    let messageElement = props.message.map((message) => <Message message={message.message} key={message.id} id={message.id} />)

    let addMessage = (newMessage) => {
        props.addMessageActionCreator(newMessage)
    }
    // let onMessageChange = (e)=>{
    //     let newMessage = e.target.value;
    //     props.updateNewMessageTextActionCreator(newMessage)

    // }
    const onSubmit = (formData) => {
        addMessage(formData.Dialog)
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
                        <DialogReduxForm onSubmit={onSubmit} />
                        {/* <div><textarea cols="50" rows="5" onChange={onMessageChange} value={props.newMessage}/></div>
                        <div><button onClick={addMessage}>Add</button></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
};
const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="Dialog" component={'textarea'} placeholder={'Enter your message'}></Field>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}
const DialogReduxForm = reduxForm({ form: 'Dialog' })(DialogForm)