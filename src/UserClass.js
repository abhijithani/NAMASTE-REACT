import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
    count: 0,
    count2 : 2,
    }

  }

  render() {
    const { count } = this.state;
    const {
      name,
      location
    } = this.props;
    return (
      <div className="about_creator">
        <h1>
          name : {name}
        </h1>
        <h2> react developer</h2>
        <h3>location : {location}</h3>
        <h2>count : {count}</h2> 
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
          });
        }}>increase</button>
      </div>
    )
  }
}

export default UserClass;