"use client";

import { Chip } from "@nextui-org/react";

import { useCounterStore } from "@/zustand-context-lib/CounterStoreProvider";

const ZustandContextCount = () => {
  const { count } = useCounterStore((state) => state)

  return <Chip>Zustand Context Count: {count}</Chip>;
};

export default ZustandContextCount;
