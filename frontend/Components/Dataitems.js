import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getCookie } from "cookies-next";

function detailsitems({ details }) {
  const router = useRouter();
  const [user, setuser] = useState(null);
  useEffect(() => {
    setuser(getCookie("user"));
  }, []);

  const [modal, setModal] = useState(false);
  const [details1, setdetails] = useState({
    hospitalName: "",
    bedsAvailable: "",
    address: "",
    state: "",
    city: "",
    id: "",
  });

  const handleChange = (e) => {
    setdetails({ ...details1, [e.target.name]: e.target.value });
    console.log(details1);
  };
  const handleEdit = async (e) => {
    console.log(details1);
    let data = await fetch(
      `https://heath.onrender.com/api/data/editData/${details1.id}`,
      {
        method: "POST",
        body: JSON.stringify(details1),
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "auth-token": getCookie("user"),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    e.preventDefault();
    let re = await data.json();
    console.log(re);
  };

  return (
    <div className="relative">
      <div
        className={`${
          modal ? "blur-sm" : ""
        } relative m-4 flex flex-col items-center justify-center md:grid lg:grid  md:grid-cols-3 lg:grid-cols-4  space-x-4 space-y-2 gap-[2px] mt-20`}
      >
        {details.map((item) => (
          <div
            key={item._id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.hospitalName}
              </h5>
            </Link>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.bedsAvailable} Beds are available
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Address -{item.address}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Contact Us-{item.phone_Number}
            </p>
            {user && (
              <button
                onClick={() => {
                  setModal(true),
                    setdetails({
                      hospitalName: item.hospitalName,
                      bedsAvailable: item.bedsAvailable,
                      address: item.address,
                      state: item.state,
                      city: item.city,
                      id: item._id,
                    });
                }}
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      <div
        className={`${
          modal ? "absolute" : "hidden"
        } modal  top-0 left-[15vw] align-middle backdrop-blur-xl  `}
      >
        <div className="w-[75vw] h-[55vh] border border-solid border-black rounded-lg  ">
          <div className="HospitalName">
            <h1 className="font-extrabold text-2xl">Hospital Name</h1>
            <hr />
            <input
              className="w-full h-15"
              type="text"
              name="hospitalName"
              value={details1.hospitalName}
              onChange={handleChange}
            />
          </div>
          <div className="bedsAvailable">
            <h1 className="font-extrabold text-2xl">Beds Available</h1>
            <hr />
            <input
              className="w-full h-15"
              type="text"
              value={details1.bedsAvailable}
              name="bedsAvailable"
              onChange={handleChange}
            />
          </div>

          <div className="Address">
            <h1 className="font-extrabold text-2xl">Address</h1>
            <hr />
            <input
              className="w-full h-15"
              type="text"
              value={details1.address}
              onChange={handleChange}
              name="address"
            />
          </div>
          <div className="State">
            <h1 className="font-extrabold text-2xl">State</h1>
            <hr />
            <input
              className="w-full h-15"
              type="text"
              value={details1.state}
              onChange={handleChange}
              name="state"
            />
          </div>
          <div className="City">
            <h1 className="font-extrabold text-2xl">City</h1>
            <hr />
            <input
              className="w-full h-15"
              type="text"
              value={details1.city}
              onChange={handleChange}
              name="city"
            />
          </div>

          <div className="button m-4 flex flex-row justify-between">
            <button
              onClick={() => {
                setModal(false);
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </button>
            <button
              onClick={handleEdit}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailsitems;
