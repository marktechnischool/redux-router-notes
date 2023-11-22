import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleNote = () => {
  const { id } = useParams("id");

  const note = useSelector((state) => state.notes.list);
  return (
    <h1>{note.find((e) => e.id === parseInt(id))?.text || "note missing"}</h1>
  );
};

export default SingleNote;
