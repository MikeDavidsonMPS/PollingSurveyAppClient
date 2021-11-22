import {Component} from 'react'

export default class Register extends Component{
    constructor(){
        super()
        this.state = {
            fullName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
            adminPin: ""
        }
    }


    changeHandlerFullName(event){
        this.setState({fullName: event.target.value})
    }
    changeHandlerEmailAddress(event){
        this.setState({emailAddress: event.target.value})
    }
    changeHandlerPassword(event){
        this.setState({password: event.target.value})
    }
    changeHandlerConfirmPassword(event){
        this.setState({confirmPassword: event.target.value})
    }
    changeHandlerAdminPin(event){
        this.setState({adminPin: event.target.value})
    } 

    render(){
        return(
            <div>
                <h2>Create Account</h2>
                <form>
                <input placeholder="full name" type="text" value={this.state.fullName} onChange={e=> this.changeHandlerFullName(e)} />
                <input placeholder="email address" type="text" value={this.state.emailAddress} onChange={e=> this.changeHandlerEmailAddress(e)} />
                <input placeholder="password" type="password" value={this.state.password} onChange={e=> this.changeHandlerPassword(e)} />
                <input  placeholder="confirm password" type="password" value={this.state.confirmPassword} onChange={e=> this.changeHandlerConfirmPassword(e)} />
                {
                    this.state.confirmPassword !== null && this.state.password === this.state.confirmPassword ? null: <p>These passwords do not match please check them.</p>
                }
                {/* <input/> Admin pin not sure how to do that yet */}
                <button type="submit">Sign Up</button>
                </form>
                <p>or</p>
                <button>Sign up with Google</button>
            </div>
        )
    }
}