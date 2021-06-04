import React from "react";
import Button from "../../button/";

interface Props {
  onClick: () => void;
  color: string;
}

export default (props: Props) => {
  const { onClick } = props;
  return (
    <div style={{ display: "table-row", position: "relative", height: "40px" }}>
      <span style={{ position: "absolute", right: "10%", bottom: "30px" }}>
        <Button
          onClick={onClick}
          size="sm"
          variant="no-border"
          round
          color={props.color}
        >
          OK
        </Button>
      </span>
    </div>
  );
};
