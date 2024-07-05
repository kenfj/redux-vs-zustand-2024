import { create } from "zustand";
import { CounterState } from "./CounterState";

export const useStore = create<CounterState>((set) => ({
  count: 1,
  increase: (by) => set((state) => ({ count: state.count + by })),
}));
