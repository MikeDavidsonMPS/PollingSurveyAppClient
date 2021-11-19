import {Component} from "react"

export default class CreatePoll extends Component{
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

    fetchCreatePoll(){
        //POST request for creating a poll
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
    
    generateInputFields(){
        for(let i = 0; i < this.state.numberOfAnswers; i++){
            // return <input value={this.state.input /> 
                if(i=0){
                    return<input type="text" value={this.state.input0} onChange={(e)=> this.changeHandlerInput0}/>
                } else if(i=1){
                    return<input type="text" value={this.state.input1} onChange={(e)=> this.changeHandlerInput1}/>
                }else if(i=2){
                    return<input type="text" value={this.state.input2} onChange={(e)=> this.changeHandlerInput2}/>
                }  else if(i=3){
                    return<input type="text" value={this.state.input3}onChange={(e)=> this.changeHandlerInput3}/>
                }  else if(i=4){
                    return<input type="text" value={this.state.input4} onChange={(e)=> this.changeHandlerInput4}/>
                }  else if(i=5){
                    return<input type="text" value={this.state.input5} onChange={(e)=> this.changeHandlerInput5}/>
                } else{
                    console.log('No further input fields availiable')
                }
        }
    }

    // addChoice(){
    //     this.setState((prevState)=> ({
    //         numberOfAnswers: prevState.numberOfAnswers + 1
    //     }))
    // }


    render(){
        return(
            <div>
                <form>
                    <input value={this.state.title} onChange={(e)=> this.changeHandlerTitle(e)} />
                    <input value={this.state.question} onChange={(e)=> this.changeHandlerQuestion(e)}/>
                    {
                        this.generateInputFields
                    }
                    {/* <button type="button" onClick={this.addChoice}>Add a Choice</button> */}
                    <button onClick={(e)=>{ e.preventDefault() ;this.setState(prevState=> ({numberOfAnswers: prevState.numberOfAnswers +1}))}}>Add a Choice</button>
                    <button type="submit">Submit Poll</button>
                </form>

                <button onClick={e=>{e.preventDefault() ; console.log(this.state.numberOfAnswers)}}>console.log numberOfAnswers</button>
            </div>
        )
    }
}