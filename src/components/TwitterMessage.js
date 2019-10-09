import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }
  
  handleChange = (event) => {
    this.setState({
        value: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleChange(event)} value={this.state.value} />
        Characters Left: {this.props.maxChars - this.state.value.length}
      </div>
    );
    
  }
}

export default TwitterMessage;
