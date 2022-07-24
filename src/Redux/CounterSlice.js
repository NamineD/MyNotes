import { createSlice, nanoid } from "@reduxjs/toolkit";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: []
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    create: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
      },
      prepare: ({ title, content, category }) => ({
        payload: {
          id: uuidv4(),
          title,
          content,
          category,
        }
      })
    },
    DeleteNote: (state, { payload: index }) => {
      state.notes.splice(index, 1);
    },
    EditNote: (state, { payload }) => {
      const existingNote = state.notes.find((note) => note.id === payload.id);
      if (existingNote) {
        existingNote.title = payload.title;
        existingNote.content = payload.content;
        existingNote.category = payload.category;
      }
    }
  }
});
export const selectedTodoSlice = createSlice({
  name: "selectedTodo",
  initialState: null,
  reducers: {
    select: (state, { payload }) => payload.id
  }
});

// Action creators are generated for each case reducer function
export const { create: AddNote, DeleteNote, EditNote } = notesSlice.actions;
export const { select: selectTodoActionCreator } = selectedTodoSlice.actions;

//There is no need to use combineReducer here.
const reducer = {
  notes: notesSlice.reducer,
  selectedTodo: selectedTodoSlice.reducer
};

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware
});
