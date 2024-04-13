// import React from "react";
//
// const Footer = () => {
//   return (
//     <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
//       <div className="container p-12 flex justify-between">
//         <span>Lucas</span>
//         <p className="text-slate-600">All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };
//
// export default Footer;

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = "2024";
  const email = "lujingyu2919@gmail.com";

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
         {/*Personal and contact section */}
        <div>
          <p>Jingyu (Lucas) Lu</p>
          <a href={email}>lujingyu2919@gmail.com</a>
        </div>

        {/* Social media icons */}
        <div className="flex items-center">
          <a href="https://github.com/Lu-Whale" className="mr-4">
            <FaGithub size={30} />
          </a>
          <a href="@/app/components/footer/Footer" className="mr-4">
            <FaLinkedin size={30} />
          </a>
        </div>

        <div>
          <nav>
            <a href="/public" className="mr-4">Home</a>
            <a href="@/app/components/footer/Footer#about" className="mr-4">About</a>
            <a href="@/app/components/footer/Footer#projects" className="mr-4">Projects</a>
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
