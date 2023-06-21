import React from 'react'
import { motion } from "framer-motion"

const TransitionEffect = () => {
    return (
        <>
            <motion.div className='fixed  bottom-full right-0 left-0 w-screen h-screen z-20 bg-light'
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                exit={{y:["0%","100%"], height:["0%","100%"]}}
                transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}

            />
            <motion.div className='fixed top-0  bottom-full right-0 left-0 w-screen h-screen z-30 bg-primary'
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                exit={{y:["0%","100%"], height:["0%","100%"]}}
                transition={{  delay:0.2, duration: 0.5, ease: "easeInOut" }}

            />
            <motion.div className='fixed  bottom-full right-0 left-0 w-screen h-screen z-10 bg-primaryDark'
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                exit={{y:["0%","100%"], height:["0%","100%"]}}
                transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}

            />


        </>
    )
}

export default TransitionEffect
