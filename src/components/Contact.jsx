import React from 'react'

import Lottie from 'react-lottie';
import animationData from '../assets/animation/mail-me.json'

import { LuMessageSquare } from 'react-icons/lu'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2
        }
    }
}


const Contact = () => {
    return (
        // <div className='text-center text-2xl my-10 max-w-[600px] flex flex-col justify-center m-auto' id='contact'>
        //     <h2 id='contact' className='text-center text-3xl'>Contact Me</h2>
        //     <p>
        //         Submit the form below to get in touch with me.
        //     </p>
        //     <form className='flex flex-col gap-2 '>
        //         <input type='text' placeholder='Name' className='block w-full p-2 my-2 border border-gray-300 rounded-md' />
        //         <input type='email' placeholder='Email' className='block w-full p-2 my-2 border border-gray-300 rounded-md' />
        //         <textarea placeholder='Message' className='block w-full p-2 my-2 border border-gray-300 rounded-md'></textarea>
        //     </form>
        //         <button type='submit' className='block w-full p-2 my-2 bg-[#854CE6] px-5 text-white rounded-md'>Submit</button>
        // </div>
        <div className='h-[90vh] overflow-hidden' >

            <div className='flex flex-col gap-7 text-4xl pb-4  pt-20'>

                <h3 className='gap-7 flex justify-center'>
                    <LuMessageSquare className='' />
                    Contact Me
                </h3>
                <p className='text-2xl text-gray-400 text-center'>
                    Submit the form below to get in touch with me.
                </p>
            </div>
            <motion.div id='contact' className=' mt-8 pb-16 flex items-center flex-row gap-14 justify-center ' variants={variants} initial='initial'
                whileInView="animate"
            >
                <div>

                    <div className='w-96'>
                        <form action="https://getform.io.test/f/qbloonza" method='POST' className='flex flex-col justify-center gap-5'>

                            <input required type="text" name='name' placeholder='Enter your name' className='bg-transparent border py-4 px-4 ' />
                            <input required type="email" name='email' placeholder='Enter your email' className='bg-transparent border py-4 px-4 ' />
                            <textarea required placeholder='Enter your message' name="message" id="" rows={5} className='bg-transparent border py-2 px-4'>

                            </textarea>
                            <button className='w-fit border px-6 py-3 m-auto'>
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
                <div >
                    <Lottie
                        options={
                            {
                                loop: true,
                                autoplay: true,
                                animationData: animationData,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }
                        }
                        speed={0.5}
                        height={400}
                        width={400}
                    />
                </div>
            </motion.div>
            
            <div className='more-inforamtion flex flex-col items-center'>
                <div>
                <p className=' text-gray-400 mt-5'>
                    Phone:  +212 649 66 22 84
                </p>
                <p className=' text-gray-400'>
                    Email: yassir.elmassafi@gmail.com
                </p>
                </div>
            </div>

            <div className='socials-links flex justify-center gap-5 mt-10'>
                <a href="https://www.linkedin.com/in/yassir-el-massafi/" target='_blank' rel='noreferrer'>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://twitter.com/yassir_el_massafi" target='_blank' rel='noreferrer'>
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
                </a>
                <a href="https://github.com/elyassir" target='_blank' rel='noreferrer'>
                    <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github" />
                </a>
            </div>
            {
                /*
                
                */
            }
            <div>
                <p className='text-center text-gray-400 mt-10'>
                    &copy; 2021 ElYassir. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Contact  