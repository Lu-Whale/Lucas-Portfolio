"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const MainSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                        Hi, I&apos;m Jingyu (Lucas){" "}
                    </span>
                </h1>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold mb-6">
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
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Driven Software Engineer with a deep passion for innovation and lifelong learning.
                    I aim to leverage cutting-edge technology to craft software solutions that benefit society.
                    Committed to excellence and continuous growth, I aspire to transform even a fragment of the future through impactful software projects.
                </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let&apos;s Connect
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
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
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
