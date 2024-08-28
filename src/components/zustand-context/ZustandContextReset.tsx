"use client";

import { Button } from "@nextui-org/react";

import { useCounterStore } from "@/zustand-context-lib/CounterStoreProvider";

const ZustandContextReset = () => {
  const { reset } = useCounterStore((state) => state)

  return <Button size="sm" onClick={() => reset()}>Reset Zustand Context</Button>;
};

export default ZustandContextReset;
