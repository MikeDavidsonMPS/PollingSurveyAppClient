import {Component} from "react"
import APIURL from "../../../helpers/environment"


export default class EditPoll extends Component{
    constructor(){
        super()
        this.state = {
        title: '',
        question: '',
        numberOfAnswers: 2,
        input0: "",
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
    }
    }


    fetchUpdatePoll(){
        fetch(`${APIURL}/Survey`,{
            method: 'PUT',
            body: JSON.stringify({
                /////////////////////////////this is where the inputs go but I need to know what exactly they're named in order to properly set it up
                // title :  this.state.title       ,
                // question :  this.state.question       ,
                // : this.state.input0 ,
                // : this.state.input1 ,
                // : this.state.input2 ,
                // : this.state.input3 ,
                // : this.state.input4 ,
                // : this.state.input5 ,

            })
            // headers?????
        })
        .then( response => response.json())
        .catch(err => console.log('There is an error in the edit poll fetch, it is:', err))
    }


    changeHandlerTitle(event){
        this.setState({title: event.target.value})
    }

    changeHandlerQuestion(event){
        this.setState({question: event.target.value})
    }

    changeHandlerInput0(event){
        this.setState({input0: event.target.value})
    }

    changeHandlerInput1(event){
        this.setState({input1: event.target.value})
    }

    changeHandlerInput2(event){
        this.setState({input2: event.target.value})
    }

    changeHandlerInput3(event){
        this.setState({input3: event.target.value})
    }

    changeHandlerInput4(event){
        this.setState({input4: event.target.value})
    }

    changeHandlerInput5(event){
        this.setState({input5: event.target.value})
    }


    render(){
        return(
            <div>
                <form>
                    <input placeholder="title" type="text" value={this.state.title} onChange={(e)=> this.changeHandlerTitle(e)} />
                    <input placeholder="question" type="text" value={this.state.question} onChange={(e)=> this.changeHandlerQuestion(e)}/>
                    {
                        this.state.numberOfAnswers > 0 ?   <input placeholder="one" type="text" value={this.state.input0} onChange={(e)=> this.changeHandlerInput0}/>: null
                    }
                    {
                        this.state.numberOfAnswers > 1 ?<input placeholder='two' type="text" value={this.state.input1} onChange={(e)=> this.changeHandlerInput1}/>: null
                    }
                    {
                        this.state.numberOfAnswers > 2 ? <input placeholder='three' type="text" value={this.state.input2} onChange={(e)=> this.changeHandlerInput2}/>: null
                    }
                    {
                        this.state.numberOfAnswers > 3 ? <input placeholder='four' type="text" value={this.state.input3}onChange={(e)=> this.changeHandlerInput3}/> :null
                    }
                    {
                        this.state.numberOfAnswers > 4 ? <input placeholder="five" type="text" value={this.state.input4} onChange={(e)=> this.changeHandlerInput4}/>: null
                    }
                    {
                        this.state.numberOfAnswers > 5 ? <input placeholder="six" type="text" value={this.state.input5} onChange={(e)=> this.changeHandlerInput5}/>: null
                    }

                    {/* <button type="button" onClick={this.addChoice}>Add a Choice</button> */}
                    { this.state.numberOfAnswers < 6 ?<button  className="addChoice" onClick={(e)=>{ e.preventDefault() ;this.setState(prevState=> ({numberOfAnswers: prevState.numberOfAnswers +1}))}}>Add a Choice</button>: null}
                    { this.state.numberOfAnswers ?<button className="removeChoice" onClick={(e)=>{ e.preventDefault() ;this.setState(prevState=> ({numberOfAnswers: prevState.numberOfAnswers -1}))}}>Remove a Choice</button>: null}
                    <button type="submit">Submit Poll</button>
                </form>

                <button onClick={e=>{e.preventDefault() ; console.log(this.state.numberOfAnswers)}}>console.log numberOfAnswers</button>
            </div>
        )
    }
}