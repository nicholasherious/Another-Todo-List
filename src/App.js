import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <React.Fragment>
      <NavBar />
      <Box display="flex" p={6}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={3}>
                <TodoForm addTodo={addTodo} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              {todos.length > 0 ? (
                <Paper className={classes.paper} elevation={3}>
                  <TodoList todos={todos} removeTodo={removeTodo} />
                </Paper>
              ) : null}
            </Grid>
          </Grid>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default App;
