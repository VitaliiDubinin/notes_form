import React from "react";

const Form = (props) => {
  return (
    <form onChange={props.change} onSubmit={props.submit}>
      <div>
        <label htmlFor="firstname"> First name</label>
        <input type="text" name="firstname" id="firstname" required />
        {/* <input type="text" name="firstname" id="firstname" required onChange={props.change}> */}
      </div>
      <div>
        <label htmlFor="lastname"> Last name</label>
        <input type="text" name="lastname" id="lastname" required />
      </div>
      <div>
        <label htmlFor="phone"> phone</label>
        <input type="text" name="phone" id="phone" required />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role">
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" required />
      </div>
      <input type="submit" value="send" />
    </form>
  );
};

export default Form;
