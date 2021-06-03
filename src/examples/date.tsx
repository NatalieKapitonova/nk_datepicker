import React, { useState } from 'react';

import Datepicker from '../components/datepicker';

export default () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleChange = (d: Date) => {
    console.log(d);
    setDate(d);
  };
  return (
    <div style={{ padding: 100, width: '40%' }}>
      <div
        style={{
          verticalAlign: 'center',
          marginBottom: 50,
          color: 'gray'
        }}
      >
        <i>{date && date.toDateString()}</i>
      </div>
      <Datepicker date={date} onChange={handleChange} />
    </div>
  );
};
