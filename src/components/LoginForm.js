import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: "",
      passwordValue: ""
    };
  }

  handleUsername = (e) => {
    console.log(this.state.usernameValue)
    this.setState({
      usernameValue: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      passwordValue: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={
        (event) => {
          event.preventDefault()
          console.log(this.state.usernameValue !== '' )
          console.log(this.state.passwordValue !== '')
          if(this.state.usernameValue !== '' && this.state.passwordValue !== '') {
            
            const username = this.state.usernameValue
            const password = this.state.passwordValue
            this.props.handleLogin({username, password})
          } else {
            console.log('else')
          }
        }
      }>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.usernameValue}
            onChange={(e)=>{this.handleUsername(e)}}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.passwordValue}
            onChange={(e)=>{this.handlePassword(e)}}
            />
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
