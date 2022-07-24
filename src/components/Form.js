import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNote } from "../Redux/CounterSlice";

//React-bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default () => {
  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");
  const [category, SetCategory] = useState("");

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true)
    };

    const handleSubmit = () => {
      if (title && content && category) {
        dispatch(AddNote({ title, content, category }));
      }
      SetTitle("");
      SetContent("");
      SetCategory('');
      setShow(false)
    };

    const handleClose = (e) => {
        e.preventDefault()
        setShow(false)
    }

  return (

    <>

                <Button variant="primary" onClick={handleShow}>
                    Create Note
                </Button>

                {/* Puede ser que el problema sea que no debo usar el mismo modal para crear y editar */}
                <Modal show={show} onShow={handleShow}>
                    <Modal.Header>
                        <Modal.Title>Create Note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(ev) => ev.preventDefault()}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    value={title}
                                    name="title"
                                    onChange={(e) => SetTitle(e.target.value)}
                                    type="text" 
                                    placeholder="Title" 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    value={content}
                                    name="content"
                                    onChange={(e) => SetContent(e.target.value)}
                                    as="textarea"
                                    placeholder="Leave a content here"
                                    style={{ height: '100px' }}
                                />
                            </Form.Group>
                            <div className="d-flex">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Category" 
                                    value={category}
                                    name="category"
                                    onChange={(e) => SetCategory(e.target.value)}
                                />
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
          </Modal>
    </>


  );
};
