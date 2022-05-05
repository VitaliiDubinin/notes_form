import React from "react";

// const fromInput = (e) => {
//   console.log(e.target.value);
// };

const InputForm = (props) => {
  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  // const [phone, setPhone] = React.useState("");

  // const firstNameHandler = (fname) => {
  //   setFirstName(fname.target.value);
  //   props.firstNameFromInput(fname);
  // };

  // const secondNameHandler = (sname) => {
  //   setLastName(sname.target.value);
  //   props.lastNameFromInput(sname);
  // };

  // const phoneHandler = (phone) => {
  //   setPhone(phone.target.value);
  //   props.phoneFromInput(phone);
  // };

  // const roleHandler = (role) => {
  //   setPhone(role.target.value);
  //   props.roleFromInput(role);
  // };

  // const messageHandler = (mes) => {
  //   setPhone(mes.target.value);
  //   props.mesFromInput(mes);
  // };
  // const popupHandler = (popup) => {
  //   // setPhone(popup.target.value);
  //   props.popupFromInput(popup);
  // };

  return (
    <form className="inputForm" onChange={props.change} onSubmit={props.submit}>
      <label forhtml="firstname">First Name</label>
      {/* <input name="firstname" type="text" className="feedback-input" onChange={firstNameHandler} /> */}
      <input type="text" name="firstname" id="firstname" className="feedback-input" required defaultValue={props.firstname} />

      <label forhtml="secondname">Second Name</label>
      {/* <input name="secondname" type="text" className="feedback-input" onChange={secondNameHandler} /> */}
      <input type="text" name="lastname" id="lastname" className="feedback-input" required defaultValue={props.lastname} />
      <label forhtml="phonenumb">Phonenumber</label>
      {/* <input name="phonenumb" type="text" className="feedback-input" onChange={phoneHandler} /> */}
      <input type="text" name="phone" id="phone" className="feedback-input" required defaultValue={props.phone} />
      {/* <input name="email" type="text" className="feedback-input" placeholder="Email" /> */}
      <label forhtml="role">Role</label>
      {/* <select name="role" id="role" className="feedback-input" onChange={roleHandler}> */}
      <select name="role" className="feedback-input" id="role" required defaultValue={props.role}>
        <option value="">please choose</option>
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
        <option value="Other">Other</option>
        {/* <option value="orange">Orange</option> */}
      </select>
      <label forhtml="role">Message</label>
      {/* <textarea name="text" className="feedback-input" onChange={messageHandler}></textarea> */}
      <textarea name="message" id="message" className="feedback-input" required defaultValue={props.message} />
      {/* <input type="submit" value="SEND" onClick={popupHandler} /> */}
      <input type="submit" value="send" />
    </form>
  );
};
export default InputForm;
