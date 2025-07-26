import User from "./User";
import UserClass from "../UserClass";
import React from "react";
import Usercontext from "../utlis/Usercontext";

class Aboutclass extends React.Component{
constructor(){
    super()
    console.log("parent constructor");
    
}

componentDidMount(){
    console.log(" parent component did mount called");
    
}


render(){
    console.log(" parent render called");
    
     return (
        <div className="aboutus_page">
         <h1> About us </h1>
         <div>
            <Usercontext.Consumer>
                {({loggedInContext}) => (
                    <h1 className="text-xl font-bold">{loggedInContext}</h1>
                )}
            </Usercontext.Consumer>

         </div>
         <h2>Just like our name, we bring flavor and speed to your doorstep — every single time.</h2>  
         {/* <User  name = {"Abhijith"} location = {"cochin"}/>  */}
         <UserClass />
        </div>
    )
} 


}


export default Aboutclass;