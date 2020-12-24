import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fetchLogs, logsSelector } from './app/slices';
import TableDisplay from './components/TableDisplay';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Chart from './components/Chart';
// import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading, hasErrors } = useSelector(logsSelector, shallowEqual);
  const [hasRender, setHasRender] = useState(false);

  useEffect(() => {
    dispatch(fetchLogs());

    if (!hasErrors) {
      setHasRender(true);
    }

    // Periodical fetching
    const interval = setInterval(() => {
      dispatch(fetchLogs());
    }, 10000);

    // Clear interval
    return () => clearInterval(interval);
  }, [dispatch]);

  const renderLogs = () => {
    if (loading && !hasRender) return <p>Loading logs...</p>;
    if (hasErrors) return <p>Cannot display logs..</p>;

    return <TableDisplay />;
  };

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
            Alevo Logs
          </Typography>
        </Toolbar>
      </AppBar>

      <Card>
        <Chart />
      </Card>

      {renderLogs()}
    </div>
  );
}

export default App;
