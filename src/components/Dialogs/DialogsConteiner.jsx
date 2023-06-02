
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs_reducer";
import { Dialogs } from "./Dialogs";


// export const DialogsConteiner = (props) => {   
//     let state = props.store.getState()
    
//     let addMessage = ()=>{
//         props.store.dispatch(addMessageActionCreator())
//     }
//     let onMessageChange = (newMessage)=>{
        
//         props.store.dispatch(updateNewMessageTextActionCreator(newMessage))
        
//     }
//     return (
//         <Dialogs addMessageActionCreator={addMessage}
//         updateNewMessageTextActionCreator={onMessageChange}
//         dialog={state.messagePage.dialogsData} 
//         message={state.messagePage.messagesData}
//         newMessage={state.messagePage.newMessageText}/>
//     )
// };
const mapStateToProps = (state)=>{
    return {
        dialog: state.messagePage.dialogsData,
        message: state.messagePage.messagesData,
        newMessage: state.messagePage.newMessageText,
    }
};
const mapDispatchToProps = (dispatch)=>{
    return{
        addMessageActionCreator: ()=>{
            dispatch(addMessageActionCreator())
        },
        updateNewMessageTextActionCreator: (newMessage)=>{
            dispatch(updateNewMessageTextActionCreator(newMessage));
        },
    };
}

export const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
