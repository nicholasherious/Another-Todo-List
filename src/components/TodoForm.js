import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

function TodoForm({ addTodo }) {
    const classes = useStyles();
   const [value, setValue] = useState({
       task: '',
       id: ''
   })

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...value, id: uuidv4()})
        setValue({task: ''})
    }

    const handleChange = (e) => {
        setValue({...value, task: e.target.value})
    }
    return (
        
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-full-width"
          label="Todo!"
          style={{ margin: 8 }}
          placeholder="Enter task here"
          onChange={handleChange}
          value={value.task} 
          helperText="What do you have to do today?"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
</form>
        
    )
}

export default TodoForm
