"use client";

import Link from "next/link";

import { decrement, increment } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Home() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Redux Counter VS Zustand Counter</h1>

      <h2>Redux Count: {value}</h2>
      <button onClick={() => { dispatch(increment()); }}>UP: +</button>
      <button onClick={() => { dispatch(decrement()); }}>DOWN: -</button>

      <Link href="/zustand-counter">move to Zustand Counter</Link>
    </main>
  );
}
