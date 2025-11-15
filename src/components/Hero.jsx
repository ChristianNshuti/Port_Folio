import React from 'react'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
    return (
        <section className='flex flex-col items-center justify-center text-center h-screen  bg-slate-900 text-white overflow-x-hidden'>
            <motion.h1
                initial={{opacity: 0,y: -30}}
                animate={{ opacity: 1,y: 0}}
                transition={{ duration: 1}}
                className='text-5xl font-bold mb-4'
                >
                    Hi,I'm <span className='text-blue-500'>Christian</span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 1,duration: 1}}
                    className='text-2xl text-gray-300'
                    >
                        <Typewriter
                            words={[
                                "Student at Rwanda Coding Academy",
                                "Web developer",
                                "Creative Builder",
                            ]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={1500}
                            />

                            <motion.p
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ delay: 2, duration: 1}}
                                className='mt-6 text-gray-400 max-w-xl'
                                >
                                    I create interactive and dynamic web experiences that make a difference.
                                </motion.p>

                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1,y: [0,10,0]}}
                                    className='mt-12'
                                    >
                                        <ArrowDown className='w-8 h-8 text-blue-400' />
                                    </motion.div>
                    </motion.h2>
        </section>
    )
}

export default Hero