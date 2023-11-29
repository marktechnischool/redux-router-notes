import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNote as addNoteAction,
  removeNote as removeNoteAction,
} from "../notesReducer";
import { Link } from "react-router-dom";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.list);
  const dispatch = useDispatch();

  const [noteText, setNoteText] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    dispatch(addNoteAction(noteText));
    setNoteText("");
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>{note.text}</Link>
            <button
              onClick={() => {
                dispatch(removeNoteAction(note.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input
          value={noteText}
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
        />
        <button type="submit">Add note</button>
      </form>
    </div>
  );
};

export default NotesList;
