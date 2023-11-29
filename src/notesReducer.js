import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    list: [],
  },
  reducers: {
    addNote: (state, action) => {
      const id = Math.floor(Math.random() * 100);
      state.list.push({ id, text: action.payload });
    },
    removeNote: (state, action) => {
      return {
        ...state,
        list: state.list.filter((note) => note.id !== action.payload),
      };
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
