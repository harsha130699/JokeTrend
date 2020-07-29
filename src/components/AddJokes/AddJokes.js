import React from 'react';
import PropTypes from 'prop-types';
import './AddJokes.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: 'white',
      opacity: 0.5
    },
    "& .MuiInputBase-input": {
      color: 'white'
    },
    "& .MuiInput-underline:after": {
      borderBottom: '2px solid white'
    }
  }
});

const AddJokes = () => {


  const classes = useStyles();

  return (

    <div className="AddJokes">
      <div className="InputBox">
        <div>
          <TextField id="standard-basic" autoComplete="off" classes={{ root: classes.root }} label="Enter your Joke here" />
        </div>
      </div>
    </div>
  )
};



export default AddJokes;
