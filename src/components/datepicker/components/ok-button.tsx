import React from "react";
import Button from "../../button";

interface Props {
  onClick: () => void;
  color: string;
  label: string;
}

export default (props: Props) => {
  const { onClick, label } = props;
  return (
    <Button onClick={onClick} size="sm" variant="no-border" color={props.color}>
      {label}
    </Button>
  );
};
