import * as U from './';

test('get array of numbers', () => {
  const r1 = U.getArrOfNumber(10);
  const r2 = U.getArrOfNumber(15);
  const r3 = U.getArrOfNumber(20);

  expect(r1).toHaveLength(10);
  expect(r2).toHaveLength(15);
  expect(r3).toHaveLength(20);
});
