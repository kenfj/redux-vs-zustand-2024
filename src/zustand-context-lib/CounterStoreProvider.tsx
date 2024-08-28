"use client";

import { createContext, type ReactNode, useContext, useRef } from 'react'
import { useStore } from 'zustand'

import { type CounterStore, createCounterStore, initCounterStore } from './CounterStore'

// https://docs.pmnd.rs/zustand/guides/nextjs

type CounterStoreApi = ReturnType<typeof createCounterStore>

const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined,
)

interface CounterStoreProviderProps {
  children: ReactNode
}

export const CounterStoreProvider = ({ children }: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>()

  // ensure that this component is re-render-safe so that the store is only created once.
  if (!storeRef.current) {
    storeRef.current = createCounterStore(initCounterStore())
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}

export const useCounterStore = <T,>(selector: (store: CounterStore) => T): T => {
  const counterStoreContext = useContext(CounterStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
