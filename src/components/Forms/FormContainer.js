import React from "react"
import axios from 'axios'
import Login from "./Login"
import RegisterUser from "./RegisterUser"
import UserInfo from "./UserInfo"
class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            fname: "",
            lname: "",
            email: "",
            mode:"Login"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleMode = this.handleMode.bind(this)
        this.createUser = this.createUser.bind(this)
        this.retriveInfo = this.retriveInfo.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
    }
    handleMode(modeCurrent){
        this.setState({mode : modeCurrent});
    }

    createUser(){

        axios
            .post('http://localhost:5001/users/create', {
                username: this.state.username,
                password: this.state.password,
                fname: this.state.fname,
                lname: this.state.lname,
                email:this.state.email
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.error(`There was an error creating the book: ${error}`))
    }

    retriveInfo(){

        axios
        .put('http://localhost:5001/users/check', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
           if(response.data.length>0)
           {
            let info =response.data[0];
            if(response.data[0].password === this.state.password){
                this.setState({mode : "Info", fname: info.fname, lname: info.lname, email: info.email});
            } else alert("Invalid password");
            
           } else this.handleMode("Register");
        })
        .catch(error => console.error(`There was an error retrieving the book list: ${error}`))

    }

    handleSubmit(event) {
        event.preventDefault();     
        this.retriveInfo();    
    }

    handleRegister(event) {
        event.preventDefault();     
        this.createUser();  
        this.handleMode("Login");
    }

    render() {
        return (
            <div>
                {this.state.mode === "Login"? <Login
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                state={this.state}
            /> : (this.state.mode === "Register"? <RegisterUser
            handleChange={this.handleChange}
            handleRegister={this.handleRegister}
            handleMode={this.handleMode}
            state={this.state}
        />: <UserInfo
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleMode={this.handleMode}
        state={this.state}
    />)}
            </div>
        )
    }
}
export default Form