import React from "react";
import Navbar from "./Navbar";
import Lefttext from "./Lefttext";
import Righttext from "./Righttext";
import "remixicon/fonts/remixicon.css";

const Section1 = (props) => {
  return (
    <div className="text-white bg-linear-to-b from-black via-gray-900 to-black min-h-screen">
      <Navbar />

      {/* MAIN SECTION */}
      <div
        className="
          flex flex-col lg:flex-row
          gap-8 lg:gap-10
          px-4 sm:px-6 lg:px-16
          py-8
        "
      >
        <Lefttext />
        <Righttext users={props.users} />
      </div>
    </div>
  );
};

export default Section1;
