import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import NotesList from "./note-list";
import SingleNote from "./single-note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotesList />,
  },
  {
    path: "/note/:id",
    element: <SingleNote />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
