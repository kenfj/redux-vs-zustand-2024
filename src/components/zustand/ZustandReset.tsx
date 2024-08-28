"use client";

import { Button } from "@nextui-org/react";

import { useCounterStore } from "@/zustand-lib/useCounterStore";

const ZustandReset = () => {
  const reset = useCounterStore((state) => state.reset);

  return <Button size="sm" onClick={() => reset()}>Reset Zustand</Button>;
};

export default ZustandReset;
