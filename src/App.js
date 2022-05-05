import "./App.css";
import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
import Form from "./InpMarg";
import View from "./View";
import Popup from "./PopupMarg";
import axios from "axios";
import NotesList from "./NotesList";

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

  useEffect(() => {
    axios.get("http://localhost:3010/notes").then((res) => setData(res.data));
  }, []);

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const popupHandler = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const submitHandler = () => {
    axios
      .post("http://localhost:3010/notes/", inputData)
      .then((res) => {
        closeHandler();
      })
      .catch((error) => console.log(error));
  };

  const closeHandler = () => {
    window.location.reload();
  };

  console.log(inputData);

  return (
    <>
      <div className="form_area">
        <Form change={inputHandler} submit={popupHandler} />
        <View {...inputData} />
      </div>
      <NotesList data={data} />
      {showPopup && <Popup close={closeHandler} {...inputData} submit={submitHandler} />}
    </>
  );
};

export default App;

// {this.state.showPopup && <Popup close={this.popupHandler} {...this.state.inputData} />}
