import Header from "@/Components/Header";
import Link from "next/link";
import React from "react";

function register() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center align-bottom mt-36">
        <div className="flex flex-row space-x-10 justify-center">
          <Link
            href={"/add/patient"}
            class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded "
          >
            Register Patient
          </Link>
          <Link
            href={"/add/donor"}
            class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded "
          >
            Register Donor
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-10 justify-center m-10">
        <Link
          href={"/addData"}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded "
        >
          Register Hospital
        </Link>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded ">
          Register Authority
        </button>
      </div>
    </div>
  );
}

export default register;
