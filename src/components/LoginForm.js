import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={
        (event) => {
        event.preventDefault()
        if(this.state.username !== "" && this.state.password !== "")
          { const username = this.state.username
            const password = this.state.password
            this.props.handleLogin({ username, password })
          } else 
            console.log(`empty! fix this and try again!`)
          }
      }>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={(event) => this.handleUsername(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={(event) => this.handlePassword(event)}/>
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
