import React from "react";

const NotesList = (props) => {
  return (
    // <form>
    <ol>
      {props.data.map((note) => (
        // <form onChange={props.change} onSubmit={props.submit}>

        <li key={note.id}>
          {note.firstname} | {note.lastname} | {note.phone} | {note.role} | {note.message}
          {/* <button onClick={() => props.delete(note.id)}> */}
          <span className="material-symbols-rounded" onClick={() => props.delete(note.id)}>
            delete
          </span>
          {/* </button> */}
          {/* <button onClick={() => props.edit(note.id)}> */}
          {/* <span className="material-symbols-rounded"> */}
          <span className="material-symbols-rounded" onClick={() => props.edit(note)}>
            edit
          </span>
          {/* </button> */}
        </li>
      ))}
    </ol>
    // </form>
  );
};

export default NotesList;
