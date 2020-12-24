import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { Line, logsSelector } from '../app/slices';
import { shallowEqual, useSelector } from 'react-redux';

interface Column {
  id: 'date' | 'code' | 'type' | 'message';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: string) => JSX.Element;
}

function convertDate(timestamp: number | Date): string {
  const date = new Date(timestamp);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();
  const hh = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

  return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}

const styles: Record<'error' | 'info' | 'warning', React.CSSProperties> = {
  error: {
    position: 'relative',
    top: '2px',
    color: 'rgba(255, 99, 132, 1)',
  },
  info: {
    position: 'relative',
    top: '2px',
    color: 'rgba(54, 162, 235, 1)',
  },
  warning: {
    position: 'relative',
    top: '2px',
    color: 'rgba(255, 206, 86, 1)',
  },
};

const columns: Column[] = [
  {
    id: 'date',
    label: 'Date',
    minWidth: 150,
  },
  { id: 'code', label: 'Code', minWidth: 60 },
  {
    id: 'type',
    label: 'Type',
    minWidth: 150,
    format: (value: string) => {
      switch (value) {
        case 'ERROR':
          return <ErrorIcon style={{ ...styles.error }} />;
        case 'INFO':
          return <InfoIcon style={{ ...styles.info }} />;
        case 'WARNING':
          return <WarningIcon style={{ ...styles.warning }} />;
        default:
          return <InfoIcon style={{ ...styles.info }} />;
      }
    },
  },
  {
    id: 'message',
    label: 'Message',
    minWidth: 170,
  },
];

interface Data {
  date: string;
  code: string;
  type: string;
  message: string;
}

function createData(
  date: string,
  code: string,
  type: string,
  message: string
): Data {
  return { date, code, type, message };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    minHeight: 440,
  },
});

export default function TableDisplay() {
  const { logs } = useSelector(logsSelector, shallowEqual);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = (logs as Array<Line>).map((log: Line) =>
    createData(convertDate(log.date), log.code, log.type, log.message)
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                (
                  row: { [x: string]: any; date: any; message: any },
                  index: any
                ) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.date + row.message + index}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'string'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                }
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
