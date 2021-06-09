import * as U from "./utils";

test("format date string", () => {
  const d = new Date(2011, 1, 1);

  const r1 = U.formatDateString(d, "DD-MM-YYYY");
  const r2 = U.formatDateString(d, "DD.MM.YYYY");
  const r3 = U.formatDateString(d, "DD/MM/YYYY");
  const r4 = U.formatDateString(d, "YYYY-MM-DD");
  const r5 = U.formatDateString(d, "YYYY.MM.DD");
  const r6 = U.formatDateString(d, "YYYY/MM/DD");

  expect(r1).toEqual("01-02-2011");
});
