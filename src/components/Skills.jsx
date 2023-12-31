import React from 'react'
import {motion} from "framer-motion";

const Skill = ({name, x, y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-1.5 xs:dark:bg-transparent xs:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.08}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y, transition:{duration: 1.5}}}
        viewport={{once:true}}>
          {name}
            
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl md:mt-32'>Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circulardark lg:h-[80vh] xs:h-[50vh] sm:h-[60vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <Skill name="Web" x="0" y="0"/>
        <Skill name="HTML" x="-5vw" y="-11vw"/>
        <Skill name="CSS" x="-20vw" y="2vw"/>
        <Skill name="JavaScript" x="18vw" y="5vw"/>
        <Skill name="Git" x="-32vw" y="-2vw" />
        <Skill name="ReactJS" x="0vw" y="12vw"/>
        <Skill name="NextJS" x="16vw" y="-12vw"/>
        <Skill name="Web Design" x="32vw" y="-5vw"/>
        <Skill name="Figma" x="0vw" y="-20vw"/>
        <Skill name="Tailwind CSS" x="-25vw" y="18vw"/>
        <Skill name="Github" x="25vw" y="18vw"/>
        <Skill name="ExpressJS" x="0vw" y="23.5vw"/>
        <Skill name="MongoDB" x="-25vw" y="-13vw"/>
    </div>
    </>
  )
}

export default Skills
