import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      charactersLeft: this.props.maxChars
    };
  }

  handleChange = (event) => {
    const charactersTyped = event.target.value.length

    this.setState({
      content: event.target.value,
      charactersLeft: this.props.maxChars - charactersTyped
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
        onChange={this.handleChange} 
        value={this.state.content} 
        />
        <p>Characters left: {this.state.charactersLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
