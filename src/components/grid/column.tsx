import React from "react";
import styled from "styled-components";

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface Props {
  size: Size;
  children?: React.ReactNode;
}

const calcWidth = (size: Size): number => (100 / 12) * size;

export default (props: Props) => {
  const { size } = props;

  return <Column width={calcWidth(size)}>{props.children}</Column>;
};

const Column = styled.div`
  flow: left;
  display: inline-block;
  flex-grow: 1;
  width: ${(props) => props.width}%;
  vertical-align: top;
`;
