import React from "react";

import Button from "../components/button/index";

export default () => {
  return (
    <div style={{ marginLeft: 50 }}>
      <div>
        <p>Default button</p>
        <br />
        <Button onClick={() => alert("Clicked!")}>Click me</Button>
      </div>
      <br />
      <br />
      <div>
        <p>Round button</p>

        <Button round onClick={() => alert("Clicked!")}>
          Click me
        </Button>
      </div>
      <br />

      <div>
        <p>Small button</p>
        <Button size="sm" onClick={() => alert("Clicked!")}>
          Click me
        </Button>
        <Button size="sm" round onClick={() => alert("Clicked!")}>
          Click me
        </Button>
      </div>
      <br />
      <div>
        <p>Custom color button</p>
        <Button onClick={() => alert("Clicked!")} color="#892b64">
          Click me
        </Button>
        <Button round onClick={() => alert("Clicked!")} color="#5c4d7d">
          Click me
        </Button>
        <Button size="sm" onClick={() => alert("Clicked!")} color="#455e89">
          Click me
        </Button>
        <Button
          size="sm"
          round
          onClick={() => alert("Clicked!")}
          color="#0091ad"
        >
          Click me
        </Button>
      </div>
      <br />
      <div>
        <p>Button filled</p>
        <Button
          onClick={() => alert("Clicked!")}
          color="#892b64"
          variant="filled"
        >
          Click me
        </Button>
        <Button
          round
          onClick={() => alert("Clicked!")}
          color="#5c4d7d"
          variant="filled"
        >
          Click me
        </Button>
        <Button
          size="sm"
          onClick={() => alert("Clicked!")}
          color="#455e89"
          variant="filled"
        >
          Click me
        </Button>
        <Button
          size="sm"
          round
          onClick={() => alert("Clicked!")}
          color="#0091ad"
          variant="filled"
        >
          Click me
        </Button>
      </div>

      <br />
      <div>
        <p>Button with no border</p>
        <Button
          onClick={() => alert("Clicked!")}
          color="#892b64"
          variant="no-border"
        >
          Click me
        </Button>
        <Button
          round
          onClick={() => alert("Clicked!")}
          color="#5c4d7d"
          variant="no-border"
        >
          Click me
        </Button>
        <Button
          size="sm"
          onClick={() => alert("Clicked!")}
          color="#455e89"
          variant="no-border"
        >
          Click me
        </Button>
        <Button
          size="sm"
          round
          onClick={() => alert("Clicked!")}
          color="#0091ad"
          variant="no-border"
        >
          Click me
        </Button>
      </div>

      <br />
      <div>
        <p>Large buttons</p>
        <Button onClick={() => alert("Clicked!")} color="#892b64" size="lg">
          Click me
        </Button>
        <Button
          round
          onClick={() => alert("Clicked!")}
          color="#5c4d7d"
          size="lg"
        >
          Click me
        </Button>
        <Button
          onClick={() => alert("Clicked!")}
          color="#455e89"
          size="lg"
          variant="filled"
        >
          Click me
        </Button>
        <Button
          round
          onClick={() => alert("Clicked!")}
          color="#0091ad"
          size="lg"
          variant="filled"
        >
          Click me
        </Button>
      </div>
    </div>
  );
};
