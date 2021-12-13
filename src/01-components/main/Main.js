import {Component} from 'react'
import Auth from '../auth/Auth'

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            loggedIn: false,

        }
    }
    render(){
        return(
            <div>
                <Auth/>
            </div>
        )
    }
}