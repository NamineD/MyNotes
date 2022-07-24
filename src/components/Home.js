import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "./EditForm";
import Form from "./Form";
import Notes from "./Notes";
import {
  EditNote as editTodoActionCreator,
  selectTodoActionCreator
} from "../Redux/CounterSlice";

export default function App() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const notes = useSelector((state) => state.notes.notes);
  const selectedTodoId = useSelector((state) => state.selectedTodo);

  
  const [show, setShow] = useState(false);

  const handleShow = () => {
      setShow(true)
  };

  const selectedTodo =
    (selectedTodoId && notes.find((todo) => todo.id === selectedTodoId)) ||
    null;

  const handleSelectTodo = (todoId) => {
    dispatch(selectTodoActionCreator({ id: todoId }));
  };

  const setValues = () => {
    setNote({
      title: selectedTodo.title,
      content: selectedTodo.content,
      category: selectedTodo.category
    });
  };

  const handleEdit = () => {
    if (!selectedTodo) return;
    setValues();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!note.title || !note.content || !note.category || !selectedTodoId) {
      handleCancelUpdate();
      return;
    }

    dispatch(
      editTodoActionCreator({
        id: selectedTodoId,
        title: note.title,
        content: note.content,
        category: note.category
      })
    );
    setIsEditMode(false);
    setNote({
      title: "",
      content: "",
      category: "",
    });

    setShow(false)
  };

  const handleCancelUpdate = (e) => {
    setIsEditMode(false);
    setNote({
      title: "",
      content: "",
      category: "",
    });
    setShow(false)
  };

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <>
      
      {isEditMode ? (
        <EditForm
          note={note}
          setNote={setNote}
          selectedTodo={selectedTodo}
          isEditMode={isEditMode}
          show={show}
          handleShow={handleShow}
          handleUpdate={handleUpdate}
          handleCancelUpdate={handleCancelUpdate}
          handleChange={handleChange}
        />
      ) : (
        <div className="d-flex justify-content-between p-3">
            <h1>My Notes</h1>
            <Form />
        </div>
      )}
      <Notes
        notes={notes}
        setShow={setShow}
        handleSelectTodo={handleSelectTodo}
        handleEdit={handleEdit}
        setIsEditMode={setIsEditMode}
      />
    </>
  );
}
