import React from "react";
import InputForm from "./InputForm";

const EditForm = (props) => {
  return (
    <div className="overlay">
      <InputForm {...props} />
    </div>
  );
};

export default EditForm;
