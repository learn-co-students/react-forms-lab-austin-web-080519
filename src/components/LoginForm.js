import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    //console.log("handleInputChange: ", event.target.value)
    
    //name is set to username and password in form, calling on target.name can call each respectively
    //this will also update the state accordingly
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    //prevent default form behavior
    event.preventDefault()

    //The onSubmit callback prop should only be called if both fields are filled in (with any value)
    //check if both are not blank
    if (this.state.username && this.state.password !== "") {
      this.props.handleLogin(this.state)
      console.log("logging in nowwwwwwwwwwwwwwwwwww")
    } else {
      console.log("Username/Password auth not valid")
    }

  }

  //only need to add username and password attributes, onSubmit to form
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
