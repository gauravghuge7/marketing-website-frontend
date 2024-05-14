<<<<<<< HEAD

import './Dashboard.css';
import Navbar from '../Navbar/Navbar';

import { useState } from "react";
import Payment from '../../Razorpay/Payment';
=======
import './Dashboard.css';
import Navbar from '../Navbar/Navbar.jsx';
import Payment from '../../Razorpay/Payment.jsx';
import React, { useState } from "react";
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
console.log(user);
export default function Dashboard() {
  // State to track the current mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
<<<<<<< HEAD

=======
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc

  return (
    <>
      <Navbar />
      <div
        className={`container mx-auto h-screen  px-4 py-8 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-end">
          <h1
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          ></h1>
          <button
            className={`px-4 py-2 rounded-md m-0 p-0 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? " Light Mode" : " Dark Mode"}
          </button>
        </div>

        <h1 className="flex justify-center font-bold text-4xl mt-12 ">
          Dashboard
        </h1>
        <div className="min-h-full mx-auto max-w-7xl py-6 mt-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {/* Total Rpin Balance Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Total Rpin Balance
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                $1000
              </p>
            </div>

            {/* ID Created today Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                ID Created{" "}
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                20
              </p>
            </div>

            {/* Total Referrals Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Total Referrals
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                50
              </p>
            </div>

            {/* Total Income Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Total Income
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                $5000
              </p>
            </div>
          </div>
          <div>
            {/* Referrals Table */}
            
          </div>
        </div>
<<<<<<< HEAD
=======

        <footer>
            <Payment />
        </footer>
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc
      </div>

      <Payment />
    </>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 33809ee342f8de23eeceff8925a8e021dfb351dc
}
