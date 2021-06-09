import * as Index from "./index";

test("imports", () => {
  expect(typeof Index.Datepicker).toEqual("function");
  expect(typeof Index.MonthCalendar).toEqual("function");
  expect(typeof Index.YearCalendar).toEqual("function");
  expect(typeof Index.CalendarTypes).toEqual("object");
  expect(typeof Index.DatepickerTypes).toEqual("object");
});
