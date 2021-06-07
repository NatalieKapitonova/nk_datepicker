import React, { useState } from "react";

import Datepicker from "../components/datepicker";

type DateType = Date | string | null;

export default () => {
  const [date, setDate] = useState<DateType>(new Date());
  const [dateNullable, setDateNullable] = useState<DateType>(null);
  const [isoStringDate, setIsoStringDate] = useState<DateType>(
    new Date().toISOString()
  );
  const [dateObj, setDateObj] = useState<DateType>(new Date());

  const handleChange = (d: Date | string | null) => {
    console.log(d);
    setDate(d);
  };
  return (
    <div style={{ padding: 40, width: "40%" }}>
      <div>
        <i style={{ color: "gray" }}>
          Datepicker with pre-selected date (DD.MM.YYYY)
        </i>
        <Datepicker
          name="date1"
          date={date}
          onChange={handleChange}
          pattern="DD.MM.YYYY"
        />
      </div>
      <br />
      <br />
      <div>
        <i style={{ color: "gray" }}>
          Datepicker initialized with null date (DD/MM/YYYY)
        </i>
        <Datepicker
          name="date2"
          date={dateNullable}
          onChange={(d) => setDateNullable(d)}
          pattern="DD/MM/YYYY"
        />
      </div>
      <br />
      <br />
      <div>
        <i style={{ color: "gray" }}>Datepicker disabled (DD-MM-YYYY)</i>
        <Datepicker
          name="date3"
          date={date}
          onChange={handleChange}
          pattern="DD-MM-YYYY"
          disabled
        />
      </div>
      <br />
      <div>
        <i style={{ color: "gray" }}>
          ISO string: <strong>{isoStringDate.toString()}</strong>
        </i>
        <Datepicker
          name="date4"
          date={isoStringDate}
          onChange={(d) => setIsoStringDate(d)}
          outputDateFormat="ISO"
        />
      </div>
      <br />
      <div>
        <i style={{ color: "gray" }}>
          Date object: <strong>{dateObj.toString()}</strong>
        </i>
        <Datepicker
          name="date5"
          date={dateObj}
          onChange={(d) => setDateObj(d)}
          outputDateFormat="Date"
        />
      </div>
      <br />
      <div>
        <i style={{ color: "gray" }}>MM-DD-YYYY</i>
        <Datepicker
          name="date6"
          date={date}
          onChange={handleChange}
          pattern="MM-DD-YYYY"
        />
      </div>
      <br />
      <div>
        <i style={{ color: "gray" }}>YYYY.MM.DD</i>
        <Datepicker
          name="date7"
          date={date}
          onChange={handleChange}
          pattern="YYYY.MM.DD"
        />
      </div>
      <br />
      <div>
        <i style={{ color: "gray" }}>YYYY/MM/DD</i>
        <Datepicker
          name="date8"
          date={date}
          onChange={handleChange}
          pattern="YYYY/MM/DD"
        />
      </div>
      <br />
      <div>
        <i style={{ color: "gray" }}>YYYY-MM-DD - disabled</i>
        <Datepicker
          name="date9"
          date={date}
          onChange={handleChange}
          pattern="YYYY-MM-DD"
          disabled
        />
      </div>
    </div>
  );
};
