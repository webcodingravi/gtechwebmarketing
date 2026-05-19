import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { offeringData } from "../../data/offeringsData";

const OfferingsSection=() => {
  return (
    <section className="relative bg-[#0b0c0f] py-28 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px]  rounded-full" />

      <div className="relative z-10 lg:px-50 md:px-49 mx-auto px-6 ">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          {/* BIG TITLE */}
          <p className="text-2xl md:text-5xl font-semibold text-purple-400 tracking-wide mb-2">
            Our Offerings
          </p>
          <p className="mt-3 text-gray-400 text-lg md:text-md max-w-2xl mx-auto">
            We combine strategy, technology and automation to build scalable digital ecosystems that drive real business outcomes.
          </p>



        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {offeringData.map((item, index) => (

            <Link key={index} to={`/services/${item.slug}`}>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index*0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  h-full
                  transition-all
                  duration-500
                  hover:border-purple-500/40
                "
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

                {/* NUMBER + ICON */}
                <div className="relative z-10 flex items-center justify-between">

                  <span className="text-gray-500 text-sm tracking-widest">
                    {item.number}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition">
                    <span className="text-white group-hover:rotate-45 transition">
                      →
                    </span>
                  </div>

                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-6 text-xl md:text-2xl font-semibold text-white group-hover:text-purple-400 transition">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-4 text-gray-400 leading-7 text-sm md:text-base group-hover:text-gray-300 transition">
                  {item.description}
                </p>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 group-hover:w-full transition-all duration-500" />

              </motion.div>

            </Link>

          ))}

        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-30">

          <Link to="/work">

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
                relative
                px-10
                py-4
                rounded-full
                bg-white
                text-black
                font-medium
                text-lg
                overflow-hidden
                group
              "
            >

              {/* HOVER EFFECT */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-0 transition duration-700" />

              <span className="relative z-10 flex items-center gap-3">
                All Projects
                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </span>

            </motion.div>

          </Link>

        </div>

      </div>

      {/* ANIMATED GLOW CIRCLES */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[200px] left-[-120px] h-[350px] w-[350px] rounded-full bg-red-600/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[-140px] h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[140px]"
      />


    </section>
  );
};

export default OfferingsSection;