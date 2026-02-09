import React from "react";
import { Link } from "react-router-dom";

const Righttext = ({ users }) => {
  const Rightcard = ({ id, tag, intro, img, color, textColor }) => {
    const countrySlug = encodeURIComponent(tag);

    return (
      <div className="h-full w-80 shrink-0 rounded-4xl relative">
        <img className="h-full w-full object-cover rounded-2xl" src={img} alt="" />

        <Link to={`/country/${countrySlug}`}>
          <div className="absolute top-0 left-0 h-full w-full p-6 mb-3 flex justify-between flex-col rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 inset-0 bg-linear-to-t from-black/70 to-transparent cursor-pointer">
            
            <h1 className="bg-rose-300 rounded-full h-8 w-8 flex justify-center items-center">{id + 1}</h1>
            
            <div>
              <p className="text-lg leading-relaxed text-white mb-14 hover:text-gray-800">{intro}</p>
              
              <div className="flex justify-between">
                <button
                  style={{ backgroundColor: color, color: textColor }}
                  className="text-white font-medium px-8 py-2 rounded-full transition hover:bg-black/30"
                >
                  {tag}
                </button>

                <button className="bg-blue-700 text-white font-medium px-3 py-2 rounded-full">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div id="right" className="h-full p-6 w-2/3 flex flex-nowrap overflow-x-auto gap-8">
      {users.map((user, idx) => (
        <Rightcard
          key={idx}
          id={idx}
          img={user.img}
          color={user.color}
          intro={user.intro}
          tag={user.tag}
          textColor={user.textColor}
        />
      ))}
    </div>
  );
};

export default Righttext;
