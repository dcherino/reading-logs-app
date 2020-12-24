import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { shallowEqual, useSelector } from 'react-redux';
import { logsSelector } from '../app/slices';
import Grid from '@material-ui/core/Grid';

const Chart = () => {
  const { logs, loading, hasErrors } = useSelector(logsSelector, shallowEqual);
  const [dataValues, setDataValues] = useState([0, 0, 0]);

  const data = {
    labels: ['Error', 'Info', 'Warning'],
    datasets: [
      {
        label: '# of Ocurrences',
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const errors = logs.filter((log) => log.type === 'ERROR');
    const warnings = logs.filter((log) => log.type === 'WARNING');
    const info = logs.filter((log) => log.type === 'INFO');

    setDataValues([errors.length, info.length, warnings.length]);
  }, [logs]);

  if (loading) return <p>Loading...</p>;

  return <Pie data={data} />;
};

export default Chart;
