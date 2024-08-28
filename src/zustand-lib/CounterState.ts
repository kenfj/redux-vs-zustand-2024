export interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  increaseBy: (by: number) => void;
  reset: () => void;
}
