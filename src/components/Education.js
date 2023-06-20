import React, { use, useRef } from 'react'
import { motion, spring, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (


        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className=' capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p>
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
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                EDUCATION
            </h2>
            <div ref={ref} className=' w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] bg-dark h-full origin-top dark:bg-light' />

                <ul className='w-full flex flex-col items-start justify-between'>

                    <Details

                        type={"Bachelor Of Science In Computer Science"}
                        time="2016-2020"
                        place="Jaipur Engineering College and research centre"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Full-stack development.
"
                    />
                    <Details
                        type={"Online Coursework"}
                        time="2016-2020"
                        place="Codehelp"
                        info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Full-stack development."

                    />
                    <Details
                        type={"Online Coursework"}
                        time="2016-2020"
                        place="Codehelp"
                        info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, Full-stack development."

                    />


                </ul>
            </div>
        </div>
    )
}

export default Education





