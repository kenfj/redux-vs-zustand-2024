"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

import { useCounterStore } from "@/zustand-context-lib/CounterStoreProvider";

const ZustandContextCounter = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  return (
    <Card>
      <CardHeader>Zustand Context Count: {count}</CardHeader>
      <CardBody>
        <button type="button" onClick={incrementCount}>UP (+)</button>
        <button type="button" onClick={decrementCount}>DOWN (-)</button>
      </CardBody>
    </Card>
  );
};

export default ZustandContextCounter;
