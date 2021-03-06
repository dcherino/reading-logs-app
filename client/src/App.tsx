import React from 'react';
import Table from './components/Table';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Header from './components/Header';
import Hero from './components/Hero';
import Chart from './components/Chart';
import TotalLogs from './components/TotalLogs';
import NumberOcurrences from './components/NumberOcurrences';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogs, logsSelector } from './app/slices';

const useStyles = makeStyles({
  wrapper: {
    padding: '24px 0',
  },
  button: {
    margin: '0 4px 0 0'
  }
});

const App = () => {
  const classes = useStyles();
  const { hasErrors } = useSelector(logsSelector);
  const dispatch = useDispatch();

  const addLog = (type: string) => {
    fetch(`http://localhost:5000/api/write/${type}`)
    .then(res => dispatch(fetchLogs()))
    .catch(error => error)
  }

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ padding: 0 }}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid
          container
          spacing={3}
          style={{ maxWidth: '1800px', margin: '0 auto' }}
        >
          {!hasErrors && (
            <Grid container spacing={3} className={classes.wrapper}>
              <Grid item xs={12} lg={4} xl={4}>
                <Card>
                  <TotalLogs />
                </Card>
              </Grid>
              <Grid item xs={12} lg={5} xl={4}>
                <Card>
                  <NumberOcurrences />
                </Card>
              </Grid>
              <Grid item xs={12} lg={3} xl={4}>
                <Chart />
              </Grid>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button variant="contained" className={classes.button} onClick={() => addLog('error')}>Add Error</Button>
            <Button variant="contained" className={classes.button} onClick={() => addLog('warning')}>Add Warning</Button>
            <Button variant="contained" className={classes.button} onClick={() => addLog('info')}>Add Info</Button>
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ maxWidth: '1800px', margin: '0 auto' }}>
            &copy; 2020 Alveo Tech. All rights reserved.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
