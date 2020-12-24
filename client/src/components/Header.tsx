import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: '#fff',
    border: 0,
    height: 100,
    padding: '0 30px',
    maxWidth: '1800px',
    margin: '0 auto',
    boxShadow: 'none',
    paddingTop: '20px',
    paddingLeft: 0
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <Typography variant="h5" color="inherit">
          <img
            src="https://www.alveotech.com/wp-content/themes/alveo/assets/images/alveo-RGB_colour.svg"
            alt="Alveo"
            width="180"
          />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
