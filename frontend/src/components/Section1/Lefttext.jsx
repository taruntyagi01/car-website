import React from "react";
import "remixicon/fonts/remixicon.css";

const Lefttext = () => {
  return (
    <div
      className="
        flex flex-col justify-between
        w-full lg:w-1/3
        h-auto lg:h-full
        px-4 sm:px-6 lg:px-8
        py-8 lg:py-12
      "
    >
      {/* Text content */}
      <div>
        <div className="mb-6 sm:mb-8">
          <h3
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold leading-tight sm:leading-[1.3]
            "
          >
            Compare <br />
            <span>Choose</span> <br />
            Drive...
          </h3>

          <h6 className="font-semibold text-xs sm:text-sm text-gray-500 mt-2 mb-6">
            ( By their Countries )
          </h6>

          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200">
            Search and compare cars from top brands worldwide.
            <br />
            <span className="text-gray-400">
              Performance, price and features — all in one place
            </span>
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-end lg:justify-start mt-6 lg:mt-0">
        <i
          className="
            ri-arrow-right-up-line
            text-5xl sm:text-6xl md:text-7xl lg:text-9xl
            text-white/80
          "
        />
      </div>
    </div>
  );
};

export default Lefttext;
