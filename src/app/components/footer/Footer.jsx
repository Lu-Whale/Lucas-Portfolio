'use client';
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = "2024";
  const email = "lujingyu2919@gmail.com";

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 md:p-12 flex flex-col md:flex-row justify-between items-center">
         {/*Personal and contact section */}
        <div className="mb-4 md:mb-0">
          <p>Jingyu (Lucas) Lu</p>
          <a href={email}>lujingyu2919@gmail.com</a>
        </div>

        {/* Social media icons */}
        <div className="flex items-center mb-4 md:mb-0">
          <a href="https://github.com/Lu-Whale" className="mr-4">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/lucas-jingyu-lu/">
            <FaLinkedin size={30} />
          </a>
        </div>
        <div>
          <nav className="mb-4 md:mb-0 text-center md:text-left">
            <a href="/" className="mr-4">Home</a>
            <a href="#about" className="mr-4">About</a>
            <a href="#projects" className="mr-4">Projects</a>
          </nav>
        </div>

        {/* Rights and navigation links */}
        <div>
          <p>&copy; {currentYear} Lucas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
