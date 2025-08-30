import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, serviceData, workExpData } from "@/assets/assets";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* --- Introduction --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h4 className="mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
          Introduction
        </h4>
        <h2 className="text-5xl font-Ovo mb-12">About Me</h2>
      </motion.div>

      {/* --- Intro content --- */}
      <div className="flex flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo leading-relaxed text-gray-700 dark:text-white/80">
            A Bachelor of Science in Computer Science graduate from Visayas
            State University with a strong foundation in software development
            and UI/UX design. Skilled in Vue.js, Next.js, C#, ASP.NET, Figma,
            and Adobe Illustrator, with hands-on experience in building
            responsive, user-friendly web applications. Passionate about
            creating clean and accessible designs while contributing to
            collaborative and agile development. Known for adaptability,
            teamwork, and leadership in both academic and project settings.
          </p>

          <h1 className="text-lg font-semibold text-gray-700 dark:text-white/80 font-Ovo">
            Additional Skills
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 font-Ovo text-gray-600 dark:text-white/80">
            <li>MS Office</li>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Time Management</li>
          </ul>
        </motion.div>
      </div>

      {/* --- Education --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl font-Ovo">Education</h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400">
          An overview of my academic background and studies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
        {serviceData.map(({ icon, title, description, description2 }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center border border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-white/70 dark:bg-darkHover/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Image src={icon} alt="" className="w-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white/80">
              {description}
            </p>
            <p className="text-sm text-gray-600 dark:text-white/80">
              {description2}
            </p>
          </motion.div>
        ))}
      </div>

      {/* --- Work Experience --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl font-Ovo">Work Experience</h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400">
          A brief overview of my work experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 my-10">
        {workExpData.map(
          ({ icon, iconDark, company, location, role, duration, bullets }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center border border-gray-300 dark:border-gray-600 rounded-lg p-10 bg-white/70 dark:bg-darkHover/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={isDarkMode ? iconDark : icon}
                alt="work icon"
                className="w-12 mb-4"
              />

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {company}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {location}
              </p>
              <p className="text-md font-semibold text-gray-700 dark:text-white">
                {role}
              </p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                {duration}
              </p>

              <ul className="text-left mt-6 space-y-2 max-w-2xl list-disc list-inside text-gray-700 dark:text-white/80">
                {bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default About;
