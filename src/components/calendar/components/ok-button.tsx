import React from 'react';
import Button from '../../button/';

interface Props {
  onClick: () => void;
}

export default (props: Props) => {
  const { onClick } = props;
  return (
    <div style={{ display: 'table-row', position: 'relative', height: '40px' }}>
      <span style={{ position: 'absolute', right: '10%', bottom: '30px' }}>
        <Button onClick={onClick} color="error" size="sm" round>
          OK
        </Button>
      </span>
    </div>
  );
};
