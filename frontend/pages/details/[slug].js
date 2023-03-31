import Header from "@/Components/Header";
import { useRouter } from "next/router";
import React from "react";

function Details({ data }) {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="mt-28 relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-center mb-4">
          Details of registered {router.query.slug}
        </h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Blood Type
              </th>
              <th scope="col" className="px-6 py-3">
                Organs
              </th>
              <th scope="col" className="px-6 py-3">
                Weight
              </th>
              <th scope="col" className="px-6 py-3">
                Height
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody>
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.fullName}
                </th>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">{item.bloodType}</td>
                <td className="px-6 py-4">{item.organs}</td>
                <td className="px-6 py-4">{item.weight}</td>
                <td className="px-6 py-4">{item.height}</td>
                <td className="px-6 py-4">n/a_</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Details;
export async function getServerSideProps(context) {
  let data = await fetch(
    `http://localhost:3001/api/${context.query.slug}/get${context.query.slug}`
  );
  let res = await data.json();
  console.log(res);
  return {
    props: {
      data: res,
    },
  };
}
