import React, { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import {
  Twitter,
  Github,
  LinkedIn,
  Dribble,
  Pinterest,
} from "../components/Icons";
import { motion } from "framer-motion";
import useThemeSwitch from "./hooks/useThemeSwitch";
import { SunIcon, MoonIcon } from "../components/Icons";

const CustomLink = ({ title, href, className = "" }) => {
  const router = useRouter();

  return (
    <>
      <Link href={href} className={`${className} relative group`}>
        {title}

        <span
          className={` h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full  transition-[width] ease dark:bg-light duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    </>
  );
};
const CustomMobileLink = ({ title, href, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <>
      <button
        href={href}
        className={`${className} relative group text-light dark:text-dark`}
        onClick={handleClick}
      >
        {title}

        <span
          className={` h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full  transition-[width] ease dark:bg-dark duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </button>
    </>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 text-dark font-medium flex items-center justify-between dark:text-light relative">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? " rotate-45  translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? " opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className=" mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className=" mx-4" />
          <CustomLink href="/articles" title="Articles" className=" ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/RitikChhipa7"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <Twitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ritikchhipa/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedIn />
          </motion.a>
          <motion.a
            href="https://github.com/ritikchhipa01"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <Github />
          </motion.a>
          {/* <motion.a href="https://www.linkedin.com/in/ritikchhipa/" target={"_blank"} 
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 mx-3'
      >
      <Dribble/>
      </motion.a> */}

          <motion.a
            href="https://in.pinterest.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <Pinterest />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div 
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className=" min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-dark/90 dark:bg-light/75 text-light dark:text-dark rounded-lg py-32 backdrop-blur-md">
          <nav className="flex flex-col justify-center items-center gap-5">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-3">
            <motion.a
              href="https://twitter.com/RitikChhipa7"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <Twitter />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ritikchhipa/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedIn />
            </motion.a>
            <motion.a
              href="https://github.com/ritikchhipa01"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1  rounded-full"
            >
              <Github />
            </motion.a>
            {/* <motion.a href="https://www.linkedin.com/in/ritikchhipa/" target={"_blank"} 
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 mx-3'
      >
      <Dribble/>
      </motion.a> */}

            <motion.a
              href="https://in.pinterest.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:ml-1"
            >
              <Pinterest />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className=" absolute left-[50%] top-2 translate-x[-50%] ">
        <h2>
          <Logo />
        </h2>
      </div>
    </header>
  );
};

export default Navbar;
