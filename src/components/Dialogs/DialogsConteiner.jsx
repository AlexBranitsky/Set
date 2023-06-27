
import { connect } from "react-redux";
import { compose } from "redux";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs_reducer";
import { WithAuthRedirect } from "../Hoc/WithAuthRegister";
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


// const CheckRegister = WithAuthRedirect(Dialogs)
// const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(CheckRegister)


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)


// DialogsConteiner;
