"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

import { decrement, increment } from "@/redux-lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux-lib/hooks";

const ReduxCounter = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardHeader>Redux Count: {value}</CardHeader>
      <CardBody>
        <button type="button" onClick={() => { dispatch(increment()); }}>UP (+)</button>
        <button type="button" onClick={() => { dispatch(decrement()); }}>DOWN (-)</button>
      </CardBody>
    </Card>
  );

};

export default ReduxCounter;
