import Image from "next/image";
import React from "react";
import { assets } from '@/assets/assets';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20 bg-gray-50 dark:bg-darkHover/30 pt-10">
      {/* Logo + Email */}
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark :assets.logo} // your logo paths in public
          alt="logo"
          width={140}
          height={40}
          className="mx-auto mb-3"
        />

        <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
          <Image
            src={isDarkMode ? assets.mail_icon_dark:assets.mail_icon} // email icon path
            alt="email"
            width={20}
            height={20}
          />
          <span>enriqueznicolemariss@gmail.com</span>
        </div>
      </div>

      {/* Links */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-600 mx-[10%] mt-10 py-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Nicole Mariss Enriquez. All rights reserved.
        </p>

        <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/enriquez-nme/"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
            >
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
              LinkedIn
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/blacknych"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
            >
              <Image src="/github.png" alt="Github" width={20} height={20} />
              Github
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/nicksnme"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
            >
              <Image src="/dribble.png" alt="Dribbble" width={20} height={20} />
              Dribbble
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
