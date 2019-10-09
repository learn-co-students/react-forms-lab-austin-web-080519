import React from "react";

class TwitterMessage extends React.Component {
  //must pass in props to get access to parent props
  constructor(props) {
    //super gives ability to access parent
    super(props);

    this.state = {
      //give message contents a blank value here so it is available in state 
      //and can get set to the value of rendered input box
      messageContents: "",
      //pass in maxChars of 280 from App
      remainingCharacters: this.props.maxChars
    };
  }


  //create a function to get the remaining characters
  countCharactersRemaining = (event) => {
    const currentCharactersTyped = event.target.value.length
    console.log("Current length of characters typed: ", currentCharactersTyped)
    
    //set state values to new values, this will incur a refresh
    this.setState ( {
      messageContents: event.target.value,
      remainingCharacters: this.props.maxChars - currentCharactersTyped
    } )

  }

  render() {
    return (
      <div>
        {/* {console.log("Current State: ", this.state)} */}
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageContents} onChange={this.countCharactersRemaining}/><br></br>
        <li>Characters Remaining {this.state.remainingCharacters}</li>
      </div>
    );
  }
}

export default TwitterMessage;

