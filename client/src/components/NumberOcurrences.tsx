import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { useSelector } from 'react-redux';
import { logsSelector } from '../app/slices';

const useStyles = makeStyles({
  root: {
    padding: '24px',
    minHeight: '275px',
  },
  error: {
    position: 'relative',
    top: '10px',
    color: 'rgba(255, 99, 132, 1)',
    fontSize: '58px',
  },
  info: {
    position: 'relative',
    top: '10px',
    color: 'rgba(54, 162, 235, 1)',
    fontSize: '58px',
  },
  warning: {
    position: 'relative',
    top: '10px',
    color: 'rgba(255, 206, 86, 1)',
    fontSize: '58px',
  },
  span: {
    fontSize: '48px',
  },
});

const NumberOcurrences = () => {
  const { logs, loading, hasErrors } = useSelector(logsSelector);
  const errors = logs.filter((log) => log.type === 'ERROR');
  const warnings = logs.filter((log) => log.type === 'WARNING');
  const info = logs.filter((log) => log.type === 'INFO');
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      {loading && <p>Loading...</p>}

      {!loading && !hasErrors && (
        <>
          <Grid item xs={7}>
            <strong>Number of ocurrences:</strong>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <ErrorIcon className={classes.error} />
              <span className={classes.span}>{errors.length}</span>
            </Grid>
            <Grid item xs={4}>
              <WarningIcon className={classes.warning} />
              <span className={classes.span}>{warnings.length}</span>
            </Grid>
            <Grid item xs={4}>
              <InfoIcon className={classes.info} />
              <span className={classes.span}>{info.length}</span>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default NumberOcurrences;
