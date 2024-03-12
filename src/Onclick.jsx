// import React, { Fragment } from 'react'
import React from "react"
class Onclick extends React.Component{
    //msg = "Hello"
    state={
        msg:"Hello",
        btnName:"Egg",

    }
    HiHandler = ()=>{
        this.setState({msg:"Hi vasu"})
    }
    HelloHandler = ()=>{
        this.setState({msg:"Hello vasu"})
    }
    HeyHandler = ()=>{
        this.setState({msg:"Hey how are u vasu"})
    }
    render(){
        console.log("render method exec")
        return <div>
               {/* <h1>Value:{this.state.msg}</h1> */}
               <h1>{this.state.msg}</h1>
               <button onClick={this. HiHandler}>Hi</button>
               <button onClick={this. HelloHandler}>Hello</button>
               <button onClick={this. HeyHandler}>Hey</button>
        </div>
    }
}

export default Onclick

