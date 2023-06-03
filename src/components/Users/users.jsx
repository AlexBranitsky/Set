import React from "react";
export const Users = (props)=>{
    return(

            <div>
                {props.users.map(user=> <div key={user.id}>
                    <div>
                        <div>{user.avaphoto}</div> 
                        <div>{user.fullname}</div>
                    </div>
                    <div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        {user.followed
                        ?<button onClick={()=>{props.FOLLOW(user.id)}}>Follow</button>
                        :<button onClick={()=>{props.UNFOLLOW(user.id)}}>UnFollow</button>}
                    </div>
                </div>)}
            </div>
    )
}