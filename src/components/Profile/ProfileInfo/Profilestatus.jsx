import React from "react";

export class ProfileStatus extends React.Component{
    state={
        editMod:false
    }
    activeEditMod=()=>{
        this.setState(
            ()=>({
                editMod: true,
            })
        )
    }
    deActiveEditMod=()=>{
        this.setState(
            ()=>({
                editMod: false,
            })
        )
    }

    render(){
        return(
            <div>
                {!this.state.editMod &&
                <div>
                    <span onClick={this.activeEditMod}>{this.props.status}</span>
                </div>}
                {this.state.editMod &&
                <div>
                    <input type="text" value={this.props.status} onBlur={this.deActiveEditMod} autoFocus={true}/>
                </div>}
            </div>
        )
    }
}