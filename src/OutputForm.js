const OutputForm = () => {
  return (
    <div>
      <div className="table-container">
        <table className="table" border="1">
          {/* <thead>
            <tr>
              <th width="20"></th>
              <th width="200px"></th>
              <th width="200px"></th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td className="fRow"></td>
              <td className="sRow">First name:</td>
              <td className="tRow" id="answer1"></td>
            </tr>
            <tr>
              <td className="fRow"></td>
              <td className="sRow">Last name:</td>
              <td className="tRow" id="answer2"></td>
            </tr>
            <tr>
              <td className="fRow"></td>
              <td className="sRow">Phone:</td>
              <td className="tRow" id="answer3"></td>
            </tr>
            <tr>
              <td className="fRow"></td>
              <td className="sRow">Role:</td>
              <td className="tRow" id="answer4"></td>
            </tr>
            <tr>
              <td className="fRow"></td>
              <td className="sRow">Message:</td>
              <td className="tRow" id="answer5"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutputForm;
