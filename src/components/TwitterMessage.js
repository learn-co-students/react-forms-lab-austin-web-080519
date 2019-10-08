import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: this.props.maxChars
    };
  }

  handleMessage = (event) => {
    let msgLength = event.target.value.length;
    if(msgLength <= this.props.maxChars){
      this.setState({message: event.target.value});
    }
    this.setState({charsLeft: this.props.maxChars - msgLength})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessage} name="message" id="message" value={this.state.message}/>
        {this.state.charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
