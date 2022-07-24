import React from "react";
import Note from "./Note";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';


export default ({ notes, setIsEditMode, handleSelectTodo, handleEdit, setShow }) => {
  return (
    <div>

      {notes.length === 0 && (<Alert variant='warning'>No notes</Alert>)}
      <>
        {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              title={note.title}
              content={note.content}
              category={note.category}
              setShow={setShow}
              handleSelectTodo={handleSelectTodo}
              handleEdit={handleEdit}
              setIsEditMode={setIsEditMode}
            />
          ))}
      </>
    </div>
  );
};
