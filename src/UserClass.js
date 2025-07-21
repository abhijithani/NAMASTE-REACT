import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
      userinfo: {
        name: "abhijit",
        location: "kochi",
        img : "jfklgjklj "
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhijithani");
    const json = await data.json();


    console.log(json);

    this.setState ({
      userinfo : json
    })
  }

  componentDidUpdate(prevProps, prevState){

    if(this.state.count  != prevState.count ){
      //code
    }
  }

componentWillUnmount(){

}

  render() {
    const {name,
      avatar_url,
      location,
    } =this.state.userinfo
    return (
      
      <div className="about_creator">
        <img src={avatar_url}/>
        <h1>
          name : {name}
        </h1>
        <h2> react developer</h2>
        <h3>location : {location}</h3>
        {/* <h2>count : {count}</h2> 
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
          });
        }}>increase</button> */}
      </div>
    )
  }
}

export default UserClass;