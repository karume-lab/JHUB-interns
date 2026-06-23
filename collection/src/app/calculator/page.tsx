"use client";

import { useState } from "react";

const BUTTON_STYLES = "rounded-md";
const OPERATION_STYLES = `${BUTTON_STYLES} bg-[#454648]`;
const CLEAR_STYLES = `${BUTTON_STYLES} bg-[#a81b1d]`;
const NUMBERS_STYLES = `${BUTTON_STYLES} bg-[#b4b0b4]`;

const keys = [
  {
    label: "0",
    style: NUMBERS_STYLES,
  },
  {
    label: "1",
    style: NUMBERS_STYLES,
  },
  {
    label: "2",
    style: NUMBERS_STYLES,
  },
  {
    label: "3",
    style: NUMBERS_STYLES,
  },
  {
    label: "4",
    style: NUMBERS_STYLES,
  },
  {
    label: "5",
    style: NUMBERS_STYLES,
  },
  {
    label: "6",
    style: NUMBERS_STYLES,
  },
  {
    label: "7",
    style: NUMBERS_STYLES,
  },
  {
    label: "8",
    style: NUMBERS_STYLES,
  },
  {
    label: "9",
    style: NUMBERS_STYLES,
  },
  {
    label: "+",
    style: OPERATION_STYLES,
  },
  {
    label: "-",
    style: OPERATION_STYLES,
  },
  {
    label: "*",
    style: OPERATION_STYLES,
  },
  {
    label: "/",
    style: OPERATION_STYLES,
  },
  {
    label: "C",
    style: CLEAR_STYLES,
  },
  {
    label: "=",
    style: OPERATION_STYLES,
  },
];

const page = () => {
  const [display, setDisplay] = useState("");

  return (
    <div className="bg-[#98999b] h-96 w-64">
      {/* DISPLAY */}
      <span className="bg-[#c5c4c7]">{display}</span>

      {/* KEYPAD */}
      <div className="grid-cols-4 grid gap-4 p-4">
        {keys.map((key) => {
          return (
            <button
              type="button"
              className={key.style}
              key={key.label}
              onClick={
                () => {
                key.label === "C"
                  ? setDisplay("")
                  : key.label === "="
                    ? // biome-ignore lint/security/noGlobalEval: only using local math functions
                      setDisplay(eval(display).toString())
                    : setDisplay((prev) => prev + key.label);
              }
            }
            >
              {key.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default page;
