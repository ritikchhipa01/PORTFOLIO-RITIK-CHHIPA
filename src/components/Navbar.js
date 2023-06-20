import React from 'react'
import Link from 'next/link'
import Logo from "../components/Logo"
import { useRouter } from 'next/router'
import {Twitter,Github,LinkedIn,Dribble,Pinterest} from "../components/Icons";
import {motion} from "framer-motion";
import useThemeSwitch from './hooks/useThemeSwitch';
import { SunIcon,MoonIcon } from '../components/Icons';

const CustomLink = ({title,href,className=""}) =>{
    const router = useRouter();

    return( 
    <>
    <Link href={href} className={`${className} relative group`}>
         {title}
    </Link>
     <span className={`h-[1px] inline-block bg-dark absolute w-0 left-0 -bottom-1 group-hover:w-full  transition-[width] ease-in dark:bg-light duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}` } >
     &nbsp;</span>
    </>
    )
}

const Navbar = () => {

  const [mode,setMode] = useThemeSwitch();
  return (
    <header
    className='w-full px-32 py-8 text-dark font-medium flex items-center justify-between dark:text-light'>
      <nav>
      <CustomLink href="/" title='Home' className=" mr-4"/>
      <CustomLink href="/about" title='About' className="mx-4"/>
      <CustomLink href="/projects" title='Projects' className=" mx-4"/>
      <CustomLink href="/articles" title='Articles' className=" ml-4"/>
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap'>
      <motion.a href="https://twitter.com/RitikChhipa7" target={"_blank"} 
      whileHover={{y:-3, }}
      whileTap={{scale:0.9}}
      className='w-6 mx-3'
      >
      <Twitter/>

      </motion.a>
      <motion.a href="https://www.linkedin.com/in/ritikchhipa/" target={"_blank"} 
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 mx-3'
      >
      <LinkedIn/>

      </motion.a>
      <motion.a href="https://github.com/ritikchhipa01" target={"_blank"}  
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 mx-3'
      >
      <Github/>

      </motion.a>
      {/* <motion.a href="https://www.linkedin.com/in/ritikchhipa/" target={"_blank"} 
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 mx-3'
      >
      <Dribble/>
      </motion.a> */}

      <motion.a href="https://in.pinterest.com/" target={"_blank"} 
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 ml-3'
      >
      <Pinterest/>
      </motion.a>
       
      <button onClick={() => setMode(mode === "light" ? "dark": "light")} className={`ml-3 flex items-center justify-center rounded-full p-1
      ${mode === 'light' ? "bg-dark text-light": "bg-light text-dark"}`}>
      {
        mode === "dark" ?
        <SunIcon  className={"fill-dark"}/> :
        <MoonIcon  className={"fill-dark"} />
      }
      </button>
      </nav>
      <div className=' absolute left-[50%] top-2 translate-x[-50%] '>
      <h2>
        <Logo/>
      </h2>
      </div>
    </header>
  )
}

export default Navbar
