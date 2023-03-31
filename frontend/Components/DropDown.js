import Link from "next/link";
import React, { useState } from "react";

function DropDown() {
  const [open, setopen] = useState(false);
  const states = ["delhi", "tamilNadu", "kerla", "goa", "punjab", "maharastra"];
  return (
    <div className="flex justify-center mt-10">
      <div className="w-30 flex justify-center items-center text-center bg-white border rounded-md">
        <Link
          href="#"
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
        >
          States
        </Link>

        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
            onClick={() => {
              setopen(!open);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`${
              open ? "absolute" : "hidden"
            } absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg`}
          >
            <div className="p-2">
              {states.map((item) => (
                <Link
                  href={`/data/${item}`}
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
