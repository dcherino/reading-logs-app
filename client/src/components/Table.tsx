import { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { logsSelector, fetchLogs } from '../app/slices';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TableDisplay from './TableDisplay';

const Table = () => {
  const dispatch = useDispatch();
  const { hasNewLines, loading, hasErrors } = useSelector(
    logsSelector,
    shallowEqual
  );
  const [hasRender, setHasRender] = useState(false);
  const [open, setOpen] = useState(hasNewLines);

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
  }, [dispatch, hasErrors]);

  const handleClose = () => setOpen(false);

  if (loading && !hasRender) return <p>Loading logs...</p>;
  if (hasErrors) return <p>Cannot display logs..</p>;

  return (
    <>
      <Snackbar
        open={hasNewLines}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          New logs updated!
        </MuiAlert>
      </Snackbar>

      <TableDisplay />
    </>
  );
};

export default Table;
