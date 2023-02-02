import React from "react"
function UserInfo(props) {
    return (
        <div>
            <hr />
            <h5>First Name : {props.state.fname}</h5>
            <h5>Last Name : {props.state.lname}</h5>
            <h5>Email : {props.state.email}</h5>
            <button onClick={() => props.handleMode("Login")}>Back</button>
        </div>
    )
}
export default UserInfo