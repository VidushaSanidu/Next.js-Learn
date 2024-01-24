"use client";

import { decrement, increment } from "@lib/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";

const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main className="px-4">
      <h1 className="text-center pt-8">Current Value is:</h1>
      <h2 className="text-center py-2">{count}</h2>
      <div className="flex justify-center gap-6">
        <button
          className="my-4 p-1 rounded-sm border-white border"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="my-4 p-1 rounded-sm border-white border"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </main>
  );
};

export default Counter;
