import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NoteIcon from '@material-ui/icons/Note';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  
  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


function Todo({ todo, removeTodo }) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

const onHandleRemoveClick = () => {
    removeTodo(todo.id)

}

    return (
        
        <div>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <NoteIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={todo.task}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                  <Tooltip title="Delete">
                    <IconButton edge="end" aria-label="delete" onClick={onHandleRemoveClick}>
                      <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
                </div>
    


    )
}

export default Todo
