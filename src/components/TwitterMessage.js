import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  calculateRemainingCharacters = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange={(e) => {this.calculateRemainingCharacters(e)}}
        />
        <strong>{
          this.props.maxChars - parseInt(this.state.message.length)
          }</strong>
      </div>
    );
  }
}

export default TwitterMessage;
