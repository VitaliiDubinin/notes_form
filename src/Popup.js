import React from "react";
import "./Popupstyle.css";

const Popup = (props) => {
  return (
    // <div className="popup-box">
    //   <div className="box">
    //     <span className="close-icon" onClick={props.handleClose}>
    //       x
    //     </span>
    //     {props.content}
    //   </div>
    // </div>

    // <div className="popup-box">
    <div className="overlay">
      <div className="popup">
        <h2>This is your note:</h2>

        <p>
          First name: <span>{props.firstname}</span>
        </p>
        <p>
          Last name: <span>{props.lastname}</span>
        </p>
        <p>
          Phone: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>

        {/* <button onClick={props.close}>Yes, I am shure</button> */}
        <button onClick={props.submit}>Yes, I am shure</button>
        <button onClick={props.close}>No, I don't want to post it</button>
      </div>
    </div>
  );
};

export default Popup;
