export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Grid {
  row?: boolean;
  column?: boolean;
  sameHeight?: boolean;
  size?: Size;
}
