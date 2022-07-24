import React, { useEffect } from "react";

//react-bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default ({
  handleShow,
  handleUpdate,
  handleCancelUpdate,
  handleChange,
  note,
  show,
  setNote,
  selectedTodo
}) => {
  //To update redux store or you might see a delay to update
  useEffect(() => {
    setNote({
      title: selectedTodo.title,
      content: selectedTodo.content,
      category: selectedTodo.category
    });
  }, [selectedTodo.title, selectedTodo.content, selectedTodo.category, setNote]);



  return (
    <>
      <Modal show={show} onShow={handleShow}>
                    <Modal.Header>
                        <Modal.Title>Create Note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(ev) => ev.preventDefault()}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    value={note.title}
                                    name="title"
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Title" 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    value={note.content}
                                    name="content"
                                    onChange={handleChange}
                                    as="textarea"
                                    placeholder="Leave a content here"
                                    style={{ height: '100px' }}
                                />
                            </Form.Group>
                            <div className="d-flex">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Category" 
                                    value={note.category}
                                    name="category"
                                    onChange={handleChange}
                                />
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" value="Update Note" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
          </Modal>
    </>
  );
};
