import React from "react";

const InputForm = () => {
  return (
    <form className="inputForm">
      <label for="firstname">First Name</label>
      <input name="firstname" type="text" className="feedback-input" />
      <label for="secondname">Second Name</label>
      <input name="secondname" type="text" className="feedback-input" />
      <label for="phonenumb">Phonenumber</label>
      <input name="phonenumb" type="text" className="feedback-input" />
      {/* <input name="email" type="text" class="feedback-input" placeholder="Email" /> */}
      <label for="role">Role</label>
      <select name="role" id="role" className="feedback-input">
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
        <option value="Other">Other</option>
        {/* <option value="orange">Orange</option> */}
      </select>
      <label for="role">Message</label>
      <textarea name="text" className="feedback-input"></textarea>
      <input type="submit" value="SEND" />
    </form>
  );
};
export default InputForm;
