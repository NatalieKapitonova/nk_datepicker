import React, { useState } from 'react';

import Input from '../components/input';

export default () => {
  const [value, setValue] = useState<string | undefined>('');

  return (
    <div style={{ padding: 50 }}>
      <div style={{ width: '50%' }}>
        <Input
          onChange={o => setValue(o.value)}
          name="demo"
          value={value}
          placeholder="khgjhg"
        />
      </div>
    </div>
  );
};
