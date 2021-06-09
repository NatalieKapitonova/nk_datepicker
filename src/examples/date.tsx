import React, { useState } from "react";

import Datepicker from "../components/datepicker";

type DateType = Date | string | null;

const Box = (props: {
  children: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  date?: string;
}) => {
  const { title, description, date } = props;
  return (
    <div>
      <strong>{title}</strong>
      <p style={{ color: "gray" }}>{description}</p>

      <br />
      {props.children}
      <i style={{ color: "gray" }}>
        <small>{date}</small>
      </i>
      <br />
      <br />
      <br />
    </div>
  );
};
export default () => {
  const [date, setDate] = useState<DateType>(new Date());
  const [dateNullable, setDateNullable] = useState<DateType>(null);
  const [isoStringDate, setIsoStringDate] = useState<DateType>(
    new Date().toISOString()
  );
  const [dateInThePast, setDateInThePast] = useState<DateType>(
    new Date(2019, 1, 1)
  );

  const handleChange = (d: Date | string | null) => {
    console.log(d);
    setDate(d);
  };
  return (
    <div style={{ padding: 40, width: "40%" }}>
      <h2>Datepicker</h2>
      <p style={{ color: "gray" }}>A simple React-CSS component</p>
      <br />
      <br />
      <Box
        title="Standard usage"
        description={
          <>
            Default behavior of the datepicker: input format is{" "}
            <code>DD.MM.YYYY</code>,<br />
            output date format is Date object
          </>
        }
        date={date.toString()}
      >
        <Datepicker name="date1" date={date} onChange={handleChange} />
      </Box>

      <Box
        title="Nullable date input"
        description={
          <>
            Datepicker allows predefined null or undefined date
            <br />
            <br />
            It is also possible to erase the date from the field, for this pass{" "}
            <code>showClear</code> prop, and the Clear button will appear which
            will set the date to null
          </>
        }
        date={dateNullable?.toString()}
      >
        <Datepicker
          name="date2"
          date={dateNullable}
          onChange={(d) => setDateNullable(d)}
          showClear
        />
      </Box>

      <Box
        title="ISO string output format"
        description={
          <>
            Default output date format is Date object, but it possible to
            request an ISO string.
            <br />
            Prop <code>outputDateFormat</code> can take one of the two values:
            <ul>
              <li>
                <code>Date</code>: default
              </li>
              <li>
                <code>ISO</code>: ISO string
              </li>
            </ul>
          </>
        }
        date={isoStringDate.toString()}
      >
        <Datepicker
          name="date4"
          date={isoStringDate}
          onChange={(d) => setIsoStringDate(d)}
          outputDateFormat="ISO"
        />
      </Box>

      <Box
        title="Select Today"
        description={
          <>
            To be able to always select current date without searching, it is
            possible to pass <code>showToday</code> prop, <br />
            which will add the Today button.
          </>
        }
        date={dateInThePast?.toString()}
      >
        <Datepicker
          name="dateInThePast"
          date={dateInThePast}
          onChange={(d) => setDateInThePast(d)}
          showToday
        />
      </Box>

      <Box
        title="Date select methods"
        description={
          <>
            By default there is an OK button which will close the calendar and
            select the date.
            <br />
            Prop <code>selectMethod</code> can be of 3 possible types:
            <br />
            <ul>
              <li>
                <code>ok_button</code>: will render OK (default)
              </li>
              <li>
                <code>click_and_close</code>: will close the calendar once the
                day is selected
              </li>
              <li>
                <code>focus_lost</code>: will close the calendar on the outside
                click on pressing Enter (not implemented yet)
              </li>
            </ul>
          </>
        }
        date={date?.toString()}
      >
        <Datepicker
          name="dateInThePast"
          date={date}
          onChange={(d) => setDate(d)}
          selectMethod="click_and_close"
        />
      </Box>

      <Box
        title="Custom color"
        description={
          <>
            To change the default accent color of the datepicker, the{" "}
            <code>color</code> prop needs to be populated with a string color.
          </>
        }
        date={isoStringDate.toString()}
      >
        <Datepicker
          name="date4"
          date={isoStringDate}
          onChange={(d) => setIsoStringDate(d)}
          outputDateFormat="ISO"
          color="#5e60ce"
        />
      </Box>

      <Box
        title="Disabled"
        description={
          <>
            Standard <code>disabled</code> boolean prop can be passed to
            disabled the input field
          </>
        }
        date={date.toString()}
      >
        <Datepicker name="date1" date={date} onChange={handleChange} disabled />
      </Box>
    </div>
  );
};
