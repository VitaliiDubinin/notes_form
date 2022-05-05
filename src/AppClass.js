import "./App.css";
import React, { Component } from "react";
// import { render } from "react-dom";
import Form from "./InpMarg";
import View from "./View";
import Popup from "./PopupMarg";
import axios from "axios";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3010/notes")
      .then((res) => this.setState({ data: res.data }))
      .then(console.log({ ...this.state.inputData }));
  }

  inputHandler = (e) => {
    this.setState({ inputData: { ...this.state.inputData, [e.target.name]: e.target.value } });
  };

  popupHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  submitHandler = () => {
    axios
      // .post("http://localhost:3010/notes/", { ...this.state.inputData })
      .post("http://localhost:3010/notes/", this.state.inputData)
      .then((res) => console.log(res));
    // .catch((error) => console.log(error));
    // this.setState({ showPopup: false });
    // this.closeHandler();
    // window.location.reload();
  };

  render() {
    // console.log(this.state.data);
    return (
      <>
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View
            //   firstname={this.state.inputData.firstname}
            //   lastname={this.state.inputData.lastname}
            //   phone={this.state.inputData.phone}
            //   role={this.state.inputData.role}
            //   message={this.state.inputData.message}
            {...this.state.inputData}
          />
        </div>
        <NotesList data={this.state.data} />
        {this.state.showPopup && <Popup close={this.closeHandler} {...this.state.inputData} submit={this.submitHandler} />}
      </>
    );
  }
}

export default App;

// {this.state.showPopup && <Popup close={this.popupHandler} {...this.state.inputData} />}
