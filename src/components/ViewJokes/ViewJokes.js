import React from 'react';
import PropTypes from 'prop-types';
import './ViewJokes.css';
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
const ViewJokes = () => {
  const classes = useStyles();
  return (
    <div className="ViewJokes">

      <div className="InputBox">
        <div>
          <TextField id="standard-basic" autoComplete="off" classes={{ root: classes.root }} label="Search for a Joke here" />
        </div>
      </div>

    </div>)
};

ViewJokes.propTypes = {};

ViewJokes.defaultProps = {};

export default ViewJokes;
