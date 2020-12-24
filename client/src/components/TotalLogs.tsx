import React from 'react';
import { useSelector } from 'react-redux';
import { logsSelector } from '../app/slices';

const TotalLogs = () => {
  const { logs } = useSelector(logsSelector);
  const total = logs.length;
  return (
    <div>
      <small>
        <strong>Total logs:</strong>
      </small>
      <p style={{fontSize: '48px'}}>{total}</p>
    </div>
  );
};

export default TotalLogs;
