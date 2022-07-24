import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DeleteNote } from "../Redux/CounterSlice";

//react-bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default ({
  title,
  content,
  category,
  setShow,
  note,
  handleSelectTodo,
  handleEdit,
  setIsEditMode
}) => {

  const [ confirmDelete, setConfirmDelete ] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setConfirmDelete(false)
  const handleShow = () => setConfirmDelete(true);


  const EditHandle = (NoteId) => {
    setIsEditMode(true);
    handleEdit();
    handleSelectTodo(NoteId);
    setShow(true)
  };

  const handleDelete = () => {
    dispatch(DeleteNote(note.id))
    setShow(false)
  }


  return (
    <div className="col-2">
        <Card style={{ widCardth: '20rem', margin: '10px' }} key={note.id} >
          <Card.Body>
            <div>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{content}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Category: {category}</Card.Subtitle>
            </div>
            <div className="d-flex justify-content-end pt-2">

              {/* Boton Edit */}
              <Card.Link onClick={() => EditHandle(note.id)}><i className="bi bi-pencil-fill"></i></Card.Link>
                
                {/* Modal Delete */}
                <Card.Link variant="primary" onClick={handleShow}>
                  <i className="bi bi-trash-fill"></i>
                </Card.Link>

                <Modal show={confirmDelete} onShow={handleShow}>
                  <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
                
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(note.id)}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
          </Card.Body>
        </Card>
    </div>
  );
};
