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
  expect(r2).toEqual("01.02.2011");
  expect(r3).toEqual("01/02/2011");
  expect(r4).toEqual("2011-02-01");
  expect(r5).toEqual("2011.02.01");
  expect(r6).toEqual("2011/02/01");
});

test("get padding", () => {
  const r = U.getPadding(1);
  const r2 = U.getPadding(22);

  expect(r).toEqual("01");
  expect(r2).toEqual("22");
});

// 2021-06-09T17:22:14.956Z
test("get ISO string", () => {
  const d = new Date(2011, 1, 1);
  const iso = U.dateToIso(d);

  expect(iso.startsWith("2011-02-01T")).toBeTruthy();
});
