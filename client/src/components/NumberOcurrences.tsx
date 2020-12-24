import React from 'react';
import { useSelector } from 'react-redux';
import { logsSelector } from '../app/slices';

const NumberOcurrences = () => {
  const { logs } = useSelector(logsSelector);
  const errors = logs.filter((log) => log.type === 'ERROR');
  const warnings = logs.filter((log) => log.type === 'WARNING');
  const info = logs.filter((log) => log.type === 'INFO');

  return (
    <div>
      <small>
        <strong>Number of ocurrences:</strong>
      </small>
      <ul>
        <li>{errors.length} Errors </li>
        <li>{info.length} Info </li>
        <li>{warnings.length} Warnings </li>
      </ul>
    </div>
  );
};

export default NumberOcurrences;
