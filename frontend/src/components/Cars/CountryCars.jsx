import React from "react";
import { useParams } from "react-router-dom";
import { carData } from "../../data/carData";
import { motion } from "framer-motion";
import SocialFooter from "./SocialFooter";

const CountryCars = () => {
  const { country } = useParams();
  const decodedCountry = decodeURIComponent(country);

  const countryInfo = carData.find(
    (c) => c.country.toLowerCase() === decodedCountry.toLowerCase()
  );

  if (!countryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        No data available for {decodedCountry}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff000020,_transparent_60%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#00ffff15,_transparent_60%)]" />

       <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl
           font-extrabold tracking-wider sm:tracking-widest
           mb-10 sm:mb-16"
        >
          <span className="bg-clip-text text-transparent bg-linear-to-r from-red-500 via-white to-cyan-400">
            {countryInfo.country.toUpperCase()}
          </span>
          <span className="block text-lg mt-4 text-gray-400 tracking-[0.3em]">
            AUTOMOTIVE LEGENDS
          </span>
        </motion.h1>

        {/* Brands */}
<div className="grid gap-6 sm:gap-8 md:gap-10
                grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {countryInfo.brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.04 }}
              className="group relative rounded-3xl p-0.5
                         bg-linear-to-br from-red-500 via-purple-500 to-cyan-400"
            >
              <div className="relative rounded-3xl bg-black/85 backdrop-blur-xl p-8">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                                bg-linear-to-r from-red-500/30 to-cyan-400/30 blur-xl transition" />

                <div className="relative z-10">
                  {/* Brand Header */}
<div className="flex flex-col sm:flex-row items-center
                sm:items-start gap-4 sm:gap-5 mb-6 text-center sm:text-left">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    />
                    <div>
                      <h2 className="text-2xl font-bold">{brand.name}</h2>
                      <p className="text-sm text-gray-400">
                        Founded {brand.founded} · {brand.headquarters}
                      </p>
                      <p className="text-xs italic text-gray-500">
                        “{brand.slogan}”
                      </p>
                    </div>
                  </div>

                  {/* Cars */}
                  <div className="space-y-4">
                    {brand.cars.map((car) => (
                      <div
                        key={car.model}
                        className="rounded-xl border border-white/10 p-4 bg-white/5"
                      >
                        <div className="flex justify-between mb-2">
                          <h3 className="font-semibold">{car.model}</h3>
                          <span className="text-xs px-2 py-0.5 rounded bg-red-500/80">
                            {car.type}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2
                text-xs sm:text-sm text-gray-300">

                          <p>⚡ {car.power}</p>
                          <p>🏁 {car.zeroToHundred}</p>
                          <p>🚀 {car.topSpeed}</p>
                          <p>🔋 {car.fuel}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {car.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
<SocialFooter />
      
    </div>
  );
};

export default CountryCars;
