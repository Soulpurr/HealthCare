import Dataitems from "@/Components/Dataitems";
import DropDown from "@/Components/DropDown";
import { useRouter } from "next/router";
import React from "react";

function Data({ details }) {
  console.log(details);
  const router = useRouter();
  return (
    <>
      <DropDown />
      <Dataitems details={details} />
    </>
  );
}

export default Data;
export async function getServerSideProps(context) {
  console.log(context.query.slug);
  let data = await fetch(
    `http://localhost:3001/api/data/fetchData/${context.query.slug.toLowerCase()}`
  );
  let res = await data.json();

  return {
    props: {
      details: res,
    }, // will be passed to the page component as props
  };
}
