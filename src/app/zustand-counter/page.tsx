"use client";

import Link from "next/link";

import { useStore } from "@/zustandlib/useStore";

export default function ZustandCounter() {
  const { count, increase } = useStore();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Redux Counter VS Zustand Counter</h1>

      <h1>Zustand Count: {count}</h1>

      <button onClick={() => { increase(1); }}>UP: +</button>
      <button onClick={() => { increase(-1); }}>DOWN: -</button>

      <Link href="/">move to Redux Counter</Link>
    </main>
  );
}
