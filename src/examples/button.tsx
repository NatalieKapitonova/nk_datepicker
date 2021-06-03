import React from "react";

import Button from "../components/button/index";

export default () => {
  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => alert("Thank you for clicking!")} color="primary">
        Button primary
      </Button>
      <Button
        onClick={() => alert("Thank you for clicking!")}
        color="secondary"
      >
        Button secondary
      </Button>
      <Button onClick={() => alert("Thank you for clicking!")} color="success">
        Button success
      </Button>
      <Button onClick={() => alert("Thank you for clicking!")} color="error">
        Button error
      </Button>
      <Button onClick={() => alert("Thank you for clicking!")} color="warning">
        Button warning
      </Button>
    </div>
  );
};
