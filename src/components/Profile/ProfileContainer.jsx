// import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import { getProfile } from "../../redux/profile_reducer";
import { useParams } from "react-router-dom";
// import { userAPI } from "../Api/Api";


export function withRouter (Children){
    return(props)=>{
        const match = {params:useParams()};
        return <Children {...props} match={match}/>
    }
}
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getProfile(userId)
        // userAPI.profile(userId)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
        //     .then(response => {
        //         this.props.setUsersProfile(response.data)
        //     })
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
};

let mapStatetoProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithConteinerData = withRouter(ProfileContainer)
export default connect(mapStatetoProps, { getProfile })(WithConteinerData)