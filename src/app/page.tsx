"use client";

import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
      <h1>Redux Counter VS Zustand Counter</h1>

      <Link href="/redux-counter">Redux Counter</Link>
      <Link href="/zustand-counter">Zustand Counter</Link>
    </main>
  );
}
