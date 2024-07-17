"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

import { useStore } from "@/zustand-lib/useStore";

export default function ZustandCounter() {
  const { count, increase } = useStore();

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="">Zustand Counter</h1>

      <h2>Zustand Count: {count}</h2>

      <button onClick={() => { increase(1); }}>UP: +</button>
      <button onClick={() => { increase(-1); }}>DOWN: -</button>

      <Link href="/redux-counter">Redux Counter</Link>
      <Button href="/" as={Link} color="primary" variant="solid">HOME</Button>
    </main>
  );
}
