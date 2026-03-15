import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { Create } from "@mui/icons-material";
import { useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("I submitted");
    addTodo(text);
    setText("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="New Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
