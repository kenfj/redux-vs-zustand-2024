"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

import { useCounterStore } from "@/zustand-lib/useCounterStore";

const ZustandCounter = () => {
  const { count, increase, decrease } = useCounterStore();

  return (
    <Card>
      <CardHeader>Zustand Count: {count}</CardHeader>
      <CardBody>
        <button type="button" onClick={increase}>UP (+)</button>
        <button type="button" onClick={decrease}>DOWN (-)</button>
      </CardBody>
    </Card>
  );
};

export default ZustandCounter;
