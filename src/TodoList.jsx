import { useEffect, useState } from "react";
import List from "@mui/material/List";
import { Box, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

// const initialTodos = [
//   { id: uuid(), text: "Walk the dog", completed: false },
//   { id: uuid(), text: "Walk the cat", completed: false },
//   { id: uuid(), text: "Walk the fish", completed: false },
//   { id: uuid(), text: "Walk the woodcock", completed: true },
// ];

const getInitData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

const TodoList = () => {
  const [todos, setTodos] = useState(getInitData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((item) => item.id !== id);
    });
  };
  const toggleTodo = (id) => {
    return setTodos((prevTodo) => {
      return prevTodo.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });
  };
  const addTodo = (text) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: uuid(), text, completed: false },
    ]);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: 3,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ flexGrow: 1, color: "black" }}
      >
        Todo List
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
};

export default TodoList;

function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[0, 1, 2, 3].map((value) => {})}
    </List>
  );
}
