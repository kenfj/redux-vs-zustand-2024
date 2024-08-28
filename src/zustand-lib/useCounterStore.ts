import { create } from "zustand";

import { CounterState } from "./CounterState";

// create will work without its provider
// https://tuffstuff9.hashnode.dev/zustand-create-vs-createstore

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  increaseBy: (by) => set((state) => ({ count: state.count + by })),
  reset: () => set({ count: 0 }),
}));
