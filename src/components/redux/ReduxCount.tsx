"use client";

import { Chip } from "@nextui-org/react";

import { useAppSelector } from "@/redux-lib/hooks";

const ReduxCount = () => {
  const { value } = useAppSelector((state) => state.counter);

  return <Chip>Redux Count: {value}</Chip>;
};

export default ReduxCount;
