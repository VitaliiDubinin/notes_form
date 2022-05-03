// import logo from "./logo.svg";
import "./App_vd.css";
import InputForm from "./InputForm";
import View from "./View";
// import Tr from "./Tr";
import React, { Component } from "react";
import NotesList from "./NotesList";
import Popup from "./Popup";
import axios from "axios";
import EditForm from "./EditForm";

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
    updatePopup: false,
    currentNote: {},
  };
  componentDidMount() {
    axios.get("http://localhost:3010/notes").then((res) => this.setState({ data: res.data }));
  }

  inputHandler = (e) => {
    this.setState({ inputData: { ...this.state.inputData, [e.target.name]: e.target.value } });
  };

  deleteHandler = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: notes });
    });
  };

  updateHandler = (item) => {
    this.setState({ updatePopup: true, currentNote: item });
    // axios.get("http://localhost:3010/notes").then((item) => this.setState({ data: item.data }));
    // console.log(item);
    // console.log(this.data);
    // this.inputUpdateHandler();
  };

  inputUpdateHandler = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };

  updatePutHandler = (id) => {
    axios.put(`http://localhost:3010/notes/${id}`, this.state.currentNote).then((res) => res.data);
    // this.closeHandler();
  };

  popupHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  // handleChange(event) {
  //   this.setState({
  //     input: event.target.value,
  //   });
  // }

  closeHandler = () => {
    window.location.reload();
  };

  submitHandler = () => {
    axios
      // .post("http://localhost:3010/notes/", { ...this.state.inputData })
      .post("http://localhost:3010/notes/", this.state.inputData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    // this.setState({ showPopup: false });
    this.closeHandler();
    // window.location.reload();
  };

  render() {
    return (
      <>
        <div className="inpbox">
          <InputForm change={this.inputHandler} submit={this.popupHandler} />

          <View {...this.state.inputData} />
        </div>
        <NotesList data={this.state.data} edit={this.updateHandler} delete={this.deleteHandler} />
        {this.state.showPopup && <Popup close={this.closeHandler} {...this.state.inputData} submit={this.submitHandler} />}

        {this.state.updatePopup && (
          <EditForm {...this.state.currentNote} change={this.inputUpdateHandler} submit={() => this.updatePutHandler(this.state.currentNote.id)} />
        )}

        {/* {this.state.IsOpen && (
            <Popup
              content={
                <>
                  <b>Thank You for yours activities!</b>
                  <p>You are entered:</p>
                  <p>First name:{this.state.firstname}</p>
                  <p>Second name:{this.state.lastname}</p>
                  <p>Phone number:{this.state.phone}</p>
                  <p>Role:{this.state.role}</p>
                  <p>Message:{this.state.message}</p>
                  <button>SEND</button>
                </>
              }
              handleClose={this.togglePopup}
            />
          )} */}

        {/* <table>
            <tbody>
              <Tr
                key={this.state.phonenumber}
                phonenumber={this.state.phonenumber}
                firstname={this.state.firstname}
                lastname={this.state.lastname}
                role={this.state.role}
                message={this.state.message}
              />
            </tbody>
          </table> */}
      </>
    );
  }
}

export default App;
