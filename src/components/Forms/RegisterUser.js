import React from "react"
function RegisterUser(props) {
    return (
        <div>
            <form onSubmit={props.handleRegister}>
                <input
                    type="text"
                    value={props.state.fname}
                    name="fname"
                    onChange={props.handleChange}
                    placeholder="First name"
                /><br /><br />
                <input
                    type="text"
                    value={props.state.lname}
                    name="lname"
                    onChange={props.handleChange}
                    placeholder="Last name"
                /><br /><br />
                <input
                    type="email"
                    value={props.state.email}
                    name="email"
                    onChange={props.handleChange}
                    placeholder="Email"
                /><br /><br />
               
                <button type="submit">Register</button>
                <button onClick={() => props.handleMode("Login")}>Back</button>
            </form>
        </div>
    )
}
export default RegisterUser