"use client";
import { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-10">
      <div className="flex items-center justify-center ">
        <button
          type="button"
          className="px-10 py-10 text-4xl"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="text-8xl p-10">{count}</span>
        <button
          type="button"
          className="px-10 py-10 text-4xl"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <div>
        <input
          type="number"
          defaultValue={count}
          className=" border-white border-2 rounded-xl text-4xl p-10"
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>
    </main>
  );
};

export default page;
