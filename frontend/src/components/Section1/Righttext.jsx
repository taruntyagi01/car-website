import React from "react";
import { Link } from "react-router-dom";

const Righttext = ({ users }) => {
  const Rightcard = ({ id, tag, intro, img, color, textColor }) => {
    const countrySlug = encodeURIComponent(tag);

    return (
      <Link to={`/country/${countrySlug}`} className="shrink-0">
        <div
          className="
            w-72 sm:w-80
            bg-black/60
            rounded-2xl
            overflow-hidden
            shadow-lg
            transition
            hover:scale-[1.03]
          "
        >
          {/* IMAGE */}
          <div className="w-full h-48 sm:h-56 md:h-64">
            <img
              src={img}
              alt={tag}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="p-4 sm:p-5 flex flex-col justify-between gap-4">
            <h1 className="bg-rose-300 text-black rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold">
              {id + 1}
            </h1>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              {intro}
            </p>

            <div className="flex items-center justify-between">
              <button
                style={{ backgroundColor: color, color: textColor }}
                className="text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {tag}
              </button>

              <button className="bg-blue-700 text-white p-2 rounded-full">
                <i className="ri-arrow-right-line" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div
      className="
        w-full lg:w-2/3
        px-4 sm:px-6
        py-6
        flex gap-4 sm:gap-6
        overflow-x-auto
        snap-x snap-mandatory
      "
    >
      {users.map((user, idx) => (
        <div key={idx} className="snap-start">
          <Rightcard
            id={idx}
            img={user.img}
            intro={user.intro}
            tag={user.tag}
            color={user.color}
            textColor={user.textColor}
          />
        </div>
      ))}
    </div>
  );
};

export default Righttext;
