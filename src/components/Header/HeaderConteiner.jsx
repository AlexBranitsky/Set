import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth_reducer";
// import axios from "axios";
// import { setDataUser } from "../../redux/auth_reducer";
// import { authAPI } from "../Api/Api";

// import { userAPI } from "../Api/Api";
class HeaderConteiner extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
        // authAPI.me()
        //     // // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let { id, login, email } = response.data.data;
        //             this.props.setDataUser(id, login, email)
        //         }
        //     })
    }
    render() {
        return <Header {...this.props} />
    }
};

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default HeaderConteiner = connect(mapStatetoProps, { getAuthUserData })(HeaderConteiner)
