import React, { Fragment } from 'react'
class Text extends React.Component{
    //msg = "Hello"
    state={
        msg:"Hello",
        btnName:"Egg",

    }
    VasuHandler = ()=>{
        this.setState({msg:"Had cofee"})
    }
    ShivaHandler = ()=>{
        this.setState({msg:"Had breakfast"})
    }
    RajeshHandler = ()=>{
        this.setState({msg:"Had snacks"})
    }
    render(){
        console.log("render method exec")
        return <Fragment>
               <h3>Value:{this.state.msg}</h3>
               <button onClick={this. VasuHandler}>Vasu</button>
               <button onClick={this. ShivaHandler}>Shiva</button>
               <button onClick={this. RajeshHandler}>Rajesh</button>
        </Fragment>
    }
}

export default Text
