"use client";

import { Chip } from "@nextui-org/react";

import { useCounterStore } from "@/zustand-lib/useCounterStore";

const ZustandCount = () => {
  const count = useCounterStore((state) => state.count);

  return <Chip>Zustand Count: {count}</Chip>;
};

export default ZustandCount;
