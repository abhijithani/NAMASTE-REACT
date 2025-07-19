import User from "./User";
import UserClass from "../UserClass";

const About = () =>{
    return (
        <div className="aboutus_page">
         <h1> About us </h1>
         <h2>Just like our name, we bring flavor and speed to your doorstep — every single time.</h2>  
         <User  name = {"Abhijith"} location = {"cochin"}/> 
         <UserClass name = {"abbhijith from class"}  location = {"kochi"}/>
        </div>
    )
}

export default About;