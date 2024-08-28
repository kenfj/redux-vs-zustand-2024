import { createStore } from "zustand/vanilla"

// https://docs.pmnd.rs/zustand/guides/nextjs

type CounterState = {
  count: number
}

type CounterActions = {
  decrementCount: () => void
  incrementCount: () => void
  reset: () => void
}

export type CounterStore = CounterState & CounterActions

const defaultInitState: CounterState = {
  count: 0,
}

export const initCounterStore = (): CounterState => {
  return defaultInitState
}

// NOTE: use createStore instead of create when context is used
// https://tuffstuff9.hashnode.dev/zustand-create-vs-createstore

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set(defaultInitState),
  }))
}
