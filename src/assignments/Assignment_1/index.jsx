import React, { useState } from "react";

export default function Assignment_1() {
  const [state, setstate] = useState("");
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <div
        className="flex justify-center items-center bg-slate-300 shadow-xl max-h-40 h-20 max-w-[40%] w-[20%] rounded-lg
      "
      >
        <p className=" text-lg font-bold  text-blue-700">{state}</p>
      </div>
      <div className=" ">
        <button
          className="h-[2em] w-[6em] bg-green-500 rounded-md text-sm hover:text-base hover:bg-green-400 transition-all ease-in ease-out"
          onClick={() => setstate("hello Suresh")}
        >
          Greet Me
        </button>
      </div>
    </div>
  );
}
