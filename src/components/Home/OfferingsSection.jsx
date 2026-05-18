import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { offeringData } from "../../data/offeringsData";

const OfferingsSection = () => {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/10 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">
            Our Offerings
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-semibold
              text-white
              leading-[1]
              tracking-tight
              max-w-5xl
              mx-auto
            "
          >
            Intelligent Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Solutions
            </span>{" "}
            For Modern Brands
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            We craft immersive digital experiences that combine strategy,
            creativity, and cutting-edge technology.
          </p>

        </motion.div>

        {/* Offerings */}
        <div className="flex flex-col gap-6">

          {offeringData.map((item, index) => (
            <Link
              key={index}
              to={`/services/${item.slug}`}
            >

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  md:p-12
                  transition-all
                  duration-500
                  hover:border-purple-500/40
                  hover:bg-white/[0.05]
                "
              >

                {/* Hover Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    bg-gradient-to-r
                    from-purple-500/10
                    to-pink-500/10
                  "
                />

                <div className="relative z-10 grid md:grid-cols-12 gap-10 items-start">

                  {/* Number */}
                  <div className="md:col-span-2">
                    <p className="text-gray-500 text-lg font-medium">
                      {item.number}
                    </p>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">

                    <h3
                      className="
                        text-3xl
                        md:text-4xl
                        font-semibold
                        text-white
                        transition-all
                        duration-500
                        group-hover:text-purple-400
                      "
                    >
                      {item.title}
                    </h3>

                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">

                    <p
                      className="
                        text-gray-400
                        text-lg
                        leading-relaxed
                        transition-all
                        duration-500
                        group-hover:text-gray-300
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex justify-end">

                    <div
                      className="
                        w-14
                        h-14
                        rounded-full
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                        group-hover:bg-purple-500
                        group-hover:border-purple-500
                        group-hover:rotate-45
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                        />
                      </svg>
                    </div>

                  </div>

                </div>

              </motion.div>

            </Link>
          ))}

        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="flex justify-center mt-24"
        >

          <Link
            to="/work"
            className="
              group
              relative
              overflow-hidden
              px-10
              py-5
              rounded-full
              bg-white
              text-black
              font-medium
              text-lg
              transition-all
              duration-500
              hover:scale-105
            "
          >

            <span className="relative z-10 flex items-center gap-3">

              View All Projects

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="
                  w-5
                  h-5
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                />
              </svg>

            </span>

          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default OfferingsSection;