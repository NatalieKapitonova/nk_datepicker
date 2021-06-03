import React from 'react';

import * as C from '../utils/constants';

import styled from 'styled-components';

interface Props {
  shrinked?: boolean;
}

export default (props: Props) => {
  const { shrinked } = props;
  return (
    <tr>
      {C.weekDays.map(wd => (
        <WeekDay shrinked={shrinked}>{wd.substring(0, 2)}</WeekDay>
      ))}
    </tr>
  );
};

const WeekDay = styled.td`
  color: gray;
  text-align: center;
  font-size: ${(props: Props) => (props.shrinked ? '0.6em' : '0.8em')};
  padding: ${(props: Props) => (props.shrinked ? 5 : 10)};
`;
