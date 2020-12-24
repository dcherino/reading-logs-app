import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '40px',
    backgroundImage:
      'linear-gradient(to left bottom,#4502b3,#7209c4,#9915d4,#bf22e3,#e530f1)',
    height: '500px',
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
  },
  wrap: {
    maxWidth: '1800px',
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  icon: {
    fontSize: '60px',
    position: 'relative',
    top: '14px',
  },
  title: {
    fontSize: '48px',
    padding: '0 0 20px 0',
  },
  preTitle: {
    fontSize: '18px',
    padding: 0,
  },
  paragraph: {
    width: '800px',
    margin: '0 auto',
  },
  gitHub: {
    borderRadius: '20px',
    backgroundClolor: '#fff',
    color: '#333',
    margin: '40px 0',
  }
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Grid container className={classes.wrap}>
        <Grid item xs={12}>
          <Typography variant="h6" color="inherit" className={classes.preTitle}>
            Technical Test
          </Typography>

          <Typography variant="h1" color="inherit" className={classes.title}>
            <AssessmentIcon className={classes.icon} />
            <strong>Logs Tracker App</strong>
          </Typography>

          <p className={classes.paragraph}>
            Vivamus commodo nunc scelerisque massa elementum semper. Nulla
            facilisi. Suspendisse non scelerisque enim, vel pretium est. Nulla
            consequat hendrerit luctus. Donec efficitur, enim eu cursus
            sagittis, ipsum ligula congue justo, eu sollicitudin lorem lectus
            nec mauris.
          </p>

          <Button
            variant="contained"
            className={classes.gitHub}
            startIcon={<GitHubIcon>GitHub</GitHubIcon>}
          >
            GitHub
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
