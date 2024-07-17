"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

import { decrement, increment } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function ReduxCounter() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="">Redux Counter</h1>

      <h2>Redux Count: {value}</h2>

      <button onClick={() => { dispatch(increment()); }}>UP: +</button>
      <button onClick={() => { dispatch(decrement()); }}>DOWN: -</button>

      <Link href="/zustand-counter">Zustand Counter</Link>
      <Button href="/" as={Link} color="primary" variant="solid">HOME</Button>
    </main>
  );
}
