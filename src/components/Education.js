import React, { use, useRef } from 'react'
import { motion, spring, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (


        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 xs:text-sm dark:text-light'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}
const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                EDUCATION
            </h2>
            <div ref={ref} className=' w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] bg-dark h-full origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

                    <Details

                        type={"Bachelor Of Electronics and Communication Engineering"}
                        time="2020-2024"
                        place="Jaipur Engineering College and research centre"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Full-stack development.
"
                    />
                    <Details
                        type={"Online Coursework"}
                        time="2022-2023"
                        place="Codehelp"
                        info="Completed coursework in advanced topics such as Reinforcement Learning, MERN STACK / Full-stack development."

                    />
                    <Details
                        type={"High School from Science Math"}
                        time="2019-2020"
                        place="Riya International Academy"
                        info="Completed coursework in advanced Science and Math fundamentals."

                    />


                </ul>
            </div>
        </div>
    )
}

export default Education





