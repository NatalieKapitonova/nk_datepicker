import React, { useState } from "react";

import Input from "../components/input";

export default () => {
  const [value, setValue] = useState<string | undefined>("");

  return (
    <div style={{ padding: 50 }}>
      <div style={{ width: "50%" }}>
        <p>Input field</p>
        <Input
          onChange={(o) => setValue(o.value)}
          name="demo"
          value={value}
          placeholder="Enter your text here"
        />

        <p>Disabled input</p>
        <Input
          onChange={(o) => setValue(o.value)}
          name="demo2"
          value={""}
          placeholder="Disabled"
          disabled
        />
      </div>
    </div>
  );
};
