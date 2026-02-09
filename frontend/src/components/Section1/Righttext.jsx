import React from "react";
import { Link } from "react-router-dom";

const Righttext = ({ users }) => {
  const Rightcard = ({ id, tag, intro, img, color, textColor }) => {
    const countrySlug = encodeURIComponent(tag);

    return (
      <Link to={`/country/${countrySlug}`} className="shrink-0">
        <div
  className="
    relative
    w-72 sm:w-80 md:w-[22rem]
    h-[450px] sm:h-[500px] md:h-[550px]  /* taller cards */
    rounded-2xl
    overflow-hidden
    shadow-xl
    transition
    hover:scale-[1.03]
  "
>
  {/* BACKGROUND IMAGE */}
  <img
    src={img}
    alt={tag}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col justify-between">
    {/* Index */}
    <h1 className="bg-rose-300 text-black rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold">
      {id + 1}
    </h1>

    {/* Bottom Content */}
    <div>
      <p className="text-sm sm:text-base text-white leading-relaxed mb-6">
        {intro}
      </p>

      <div className="flex items-center justify-between">
        <button
          style={{ backgroundColor: color, color: textColor }}
          className="text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 rounded-full"
        >
          {tag}
        </button>

        <button className="bg-blue-700 text-white p-2 rounded-full">
          <i className="ri-arrow-right-line" />
        </button>
      </div>
    </div>
  </div>
</div>

      </Link>
    );
  };

  return (
    <div id="right"
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
