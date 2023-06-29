import React from "react";

export class ProfileStatus extends React.Component{
    state={
        editMod:false,
        status:this.props.status,
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
        this.props.updateStatus(this.state.status)
    }
    changeStatus=(e)=>{
        this.setState(()=>({
            status:e.target.value
        }))
    }
        
    render(){
        return(
            <div>
                {!this.state.editMod &&
                <div>
                    <span onClick={this.activeEditMod}>{this.props.status || 'No status'}</span>
                </div>}
                {this.state.editMod &&
                <div>
                    <input type="text" value={this.state.status} onBlur={this.deActiveEditMod} autoFocus={true} onChange={this.changeStatus}/>
                </div>}
            </div>
        )
    }
}