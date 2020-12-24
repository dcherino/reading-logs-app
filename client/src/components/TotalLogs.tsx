import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { useSelector } from 'react-redux';
import { logsSelector } from '../app/slices';

const useStyles = makeStyles({
  root: {
    padding: '24px',
    minHeight: '270px',
  },
  number: {
    fontSize: '48px',
  },
  icon: {
    fontSize: '200px',
    color: '#505050',
  },
});

const TotalLogs = () => {
  const { logs, loading, hasErrors } = useSelector(logsSelector);
  const total = logs.length;
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      {loading && <p>Loading...</p>}

      {!loading && !hasErrors && (
        <>
          <Grid item xs={7}>
            <strong>Total logs:</strong>
            <p className={classes.number}>
              {total} <small>lines</small>
            </p>
          </Grid>
          <Grid item xs={5}>
            <AssessmentIcon className={classes.icon} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default TotalLogs;
