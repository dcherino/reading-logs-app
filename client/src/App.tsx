import React from 'react';
import Table from './components/Table';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Header from './components/Header';
import Chart from './components/Chart';
import TotalLogs from './components/TotalLogs';
import NumberOcurrences from './components/NumberOcurrences';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ padding: 0 }}>
          <Header />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: 0,
            backgroundImage:
              'linear-gradient(to left bottom,#4502b3,#7209c4,#9915d4,#bf22e3,#e530f1)',
            height: '300px',
          }}
        >
          <h1>Logs Tracker</h1>
        </Grid>
        <Grid
          container
          spacing={3}
          style={{ maxWidth: '1800px', margin: '0 auto' }}
        >
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card>
                <TotalLogs />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{ padding: '20px' }}>
                <NumberOcurrences />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{ padding: '20px' }}>
                <Chart />
              </Card>
            </Grid>
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
}

export default App;
