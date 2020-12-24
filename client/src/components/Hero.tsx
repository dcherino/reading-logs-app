import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '24px',
    backgroundImage:
      'linear-gradient(to left bottom,#4502b3,#7209c4,#9915d4,#bf22e3,#e530f1)',
    height: '300px',
    color: '#fff',
  },
  wrap: {
    maxWidth: '1800px',
    margin: '0 auto',
  },
  icon: {
    fontSize: '260px'
  },
  title: {
    fontSize: '48px'
  }
});
const Hero = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Grid container className={classes.wrap}>
        <Grid item xs={4}>
          <AssessmentIcon className={classes.icon} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h1" color="inherit" className={classes.title}>
            <strong>Logs Tracker App</strong>
          </Typography>
          <p>A Typescript React Tool with NodeJS Backend.</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
