import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import NavBar from "./Navbar";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />

      <TodoList />
    </>
  );
}

export default App;
