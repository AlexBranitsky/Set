import React from "react";
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'Password'}/>
            </div>
            <div>
                <Field  component={'input'} type={'checkbox'} name={'Remember me'}/>Remember me
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm)

export const Login = (props) => {
    const onSubmit = (formData)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Please register</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}