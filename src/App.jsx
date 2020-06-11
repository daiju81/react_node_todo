import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./App.css";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
  const classes = useStyles();

  const [text, setText] = useState("Text Before changed");
  const [textbox, setTextBox] = useState("");

  const todosArray = ["a", "b"];
  const [todos, setTodo] = useState(["a", "b"]);

  const onSubmit = (e) => {
    todosArray.push(e.target.textField.value);
    setTodo(todosArray);
    console.log(e.target.textField.value);
    e.target.textField.value = "";
    e.preventDefault();
  };

  return (
    <div className="App">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Sample Component
        </Typography>
        <Typography component="p">{text}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setText("Button Pressed!")}
        >
          PRESS HERE!
        </Button>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => onSubmit(e)}
        >
          <div display="block" className={classes.root}>
            <TextField
              id="textField"
              name="textField"
              defaultValue={textbox}
              label="sample"
              display="block"
              onChange={(e) => setTextBox(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            SEND
          </Button>
        </form>
      </Paper>
      <ul>
        {/* {todosArray.map((todo, index) => {
          return (
            <li key={index} className="">
              {todo}
            </li>
          );
        })} */}
        {todos}
      </ul>
    </div>
  );
}

export default App;