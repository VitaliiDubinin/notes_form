import React, { Component } from "react";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };

    // Change code below this line

    this.handleChange = this.handleChange.bind(this);

    // Change code above this line
  }

  // Change code below this line

  handleChange(event) {
    this.setState({
      input: event.target.value,
      // firstname: event.target.value,

      // this.setState({ firstname: event.target.value });
    });
  }

  // Change code above this line

  render() {
    return (
      <div>
        {/* Change code below this line */}

        <form className="inputForm">
          <label for="firstname">First Name</label>
          <input name="firstname" type="text" className="feedback-input" value={this.state.input} onChange={this.handleChange} />
        </form>

        {/* <input value={this.state.input} onChange={this.handleChange} /> */}

        {/* Change code above this line */}

        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default ControlledInput;
