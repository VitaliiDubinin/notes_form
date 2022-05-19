// import logo from "./logo.svg";
import "./App_vd.css";
import InputForm from "./InputForm";
import View from "./View";
// import Tr from "./Tr";
import React, { useState, useEffect, useRef } from "react";
import NotesList from "./NotesList";
import Popup from "./Popup";
import axios from "axios";
import EditForm from "./EditForm";

const App = () => {
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [updatePopup, setUpdatePopup] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3010/notes").then((res) => setData(res.data));
  }, []);

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = data.filter((item) => item.id !== id);
      setData(notes);
    });
  };

  const updateHandler = (item) => {
    setUpdatePopup(true);
    setCurrentNote(item);
  };

  const inputUpdateHandler = (e) => {
    setCurrentNote({
      ...currentNote,
      [e.target.name]: e.target.value,
    });
  };

  const updatePutHandler = (id) => {
    axios.put(`http://localhost:3010/notes/${id}`, currentNote).then((res) => res.data);
  };

  const popupHandler = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  const closeHandler = () => {
    window.location.reload();
  };

  const submitHandler = () => {
    axios
      // .post("http://localhost:3010/notes/", { ...this.state.inputData })
      .post("http://localhost:3010/notes/", inputData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    // this.setState({ showPopup: false });
    closeHandler();
    // window.location.reload();
  };

  return (
    <>
      <div className="inpbox">
        <InputForm change={inputHandler} submit={popupHandler} />

        <View {...inputData} />
      </div>
      <NotesList data={data} edit={updateHandler} delete={deleteHandler} />
      {showPopup && <Popup close={closeHandler} {...inputData} submit={submitHandler} />}

      {updatePopup && <EditForm {...currentNote} change={inputUpdateHandler} submit={() => updatePutHandler(currentNote.id)} />}

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
};

export default App;
