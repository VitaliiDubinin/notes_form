const Tr = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td className="fRow"></td>
          <td className="sRow">First name:</td>
          <td className="tRow">{props.firstname}</td>
        </tr>
        <tr>
          <td className="fRow"></td>
          <td className="sRow">Last name:</td>
          <td className="tRow">{props.lastname}</td>
        </tr>
        <tr>
          <td className="fRow"></td>
          <td className="sRow">Phone:</td>
          <td className="tRow">{props.phonenumber}</td>
        </tr>
        <tr>
          <td className="fRow"></td>
          <td className="sRow">Role:</td>
          <td className="tRow">{props.role}</td>
        </tr>
        <tr>
          <td className="fRow"></td>
          <td className="sRow">Message:</td>
          <td className="tRow">{props.message}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tr;
