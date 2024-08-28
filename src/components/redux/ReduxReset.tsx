"use client";

import { Button } from "@nextui-org/react";

import { reset } from "@/redux-lib/features/counter/counterSlice";
import { useAppDispatch } from "@/redux-lib/hooks";

const ReduxReset = () => {
  const dispatch = useAppDispatch();

  return <Button size="sm" onClick={() => { dispatch(reset()); }}>Reset Redux</Button>;
};

export default ReduxReset;
