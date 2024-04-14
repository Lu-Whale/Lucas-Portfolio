"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import ResponsiveImage from '@/app/components/mainPage/ResponsiveImage'

const MainSection = () => {
  const NavToContact = "#contact";

  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400">
                        Hi, I&apos;m Jingyu {" "}
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400 text-2xl sm:text-3xl lg:text-4xl ">
                        (Lucas)
                    </span>
                </h1>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
                    <TypeAnimation
                        sequence={[
                            "Software Engineer",
                            3000,
                            "Full-stack Developer",
                            2000,
                            "Backend Developer",
                            2000,
                            "Frontend Developer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={150}
                        repeat={Infinity}
                    />
                </h2>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                    Driven Software Engineer with a deep passion for innovation and lifelong learning.
                </p>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I enjoy seeing my technical learning come alive in commercial projects.
                </p>
          <div>
            <Link
              href={NavToContact}
              className="text-white px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:text-slate-800"
            >
              Let&apos;s Connect
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas-jingyu-lu/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                LinkedIn
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <ResponsiveImage />
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
