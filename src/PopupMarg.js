import React from "react";

const Popup = (props) => {
  return (
    <div>
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
  );
};

export default Popup;
