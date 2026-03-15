import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoListItem({
  id,
  completed,
  text,
  removeTodo,
  toggleTodo,
}) {
  const labelId = `checkbox-list-label-${id}`;
  const handleRemove = () => {
    removeTodo(id);
  };
  const handleChecked = () => {
    toggleTodo(id);
  };
  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={handleChecked}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`${text}`} />
      </ListItemButton>
    </ListItem>
  );
}
