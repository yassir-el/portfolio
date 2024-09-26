import React, { useRef } from "react";

import Lottie from "react-lottie";
import animationData from "../assets/animation/mail-me.json";

import { LuMessageSquare } from "react-icons/lu";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

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
    <div       ref={ref} id="contact" className="overflow-hidden  py-5 ">
      <div className="flex flex-col gap-7 text-4xl pb-4  pt-20">
        <h3 className="gap-7 flex justify-center">
          <LuMessageSquare className="" />
          Contact Me
        </h3>
        <p className="text-2xl text-gray-400 text-center">
          Submit the form below to get in touch with me.
        </p>
      </div>

      <motion.div variants={variants} initial="initial" whileInView="animate">
        <motion.div variants={variants} className=" mt-8 pb-8 flex items-center gap-14 justify-center ">
          <div>
            <div >
              <form
                action="https://getform.io.test/f/qbloonza"
                method="POST"
                className=" flex flex-col justify-center gap-5"
              >
                <div className="flex gap-3">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="bg-[#171721] py-4 px-4 "
                    style={
                      {
                        border: "1px solid #b1b2b3",
                        color: "#FFFFFF",
                        borderRadius: "5px",
                        fontFamily: "Poppins",
                      }
                    }
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="bg-[#171721] py-4 px-4 "
                    style={
                      {
                        border: "1px solid #b1b2b3",
                        color: "#FFFFFF",
                        borderRadius: "5px",
                        
                      }
                    }
                  />
                </div>
                <textarea
                  required
                  placeholder="Your message"
                  name="message"
                  id=""
                  rows={5}
                  className="bg-[#171721] py-2 px-4"
                  style={
                    {
                      border: "1px solid #b1b2b3",
                      color: "#FFFFFF",
                      borderRadius: "5px",
                      
                    }
                  }
                ></textarea>
                <button className=" border-[#FFFFFF]  bg-[rgb(294,92,230,0.7)] rounded-md px-8 py-4 m-auto">
                  Submit
                  <span className="ml-3 ">
                    <LuMessageSquare className="inline-block"/>
                  </span>
                </button>
              </form>
            </div>
          </div>
          {/* <div className="lg:block hidden">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              speed={0.5}
              height={400}
              width={400}
            />
          </div> */}
        </motion.div>

        <motion.div
        variants={variants}
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="max-w-[800px] m-auto"
        >
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <p className="text-lg ">Phone</p>
              <p className=" text-gray-400">+212 649 66 22 84</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg ">Email</p>
              <p className=" text-gray-400">yassir.elmassafi@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg ">Location</p>
              <p className=" text-gray-400">Casablanca, Morocco</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
        
        variants={variants}
        className="socials-links flex justify-center gap-5 mt-10">
          <a
            className="hover:scale-125 hover:opacity-100 duration-150 opacity-80"
            href="https://www.linkedin.com/in/yassir-el-massafi/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a
            className="hover:scale-125 hover:opacity-100 duration-150 opacity-80"
            href="https://twitter.com/yassir_el_massafi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/twitter.png"
              alt="twitter"
            />
          </a>
          <a
            className="hover:scale-125 hover:opacity-100 duration-150 opacity-80"
            href="https://github.com/elyassir"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="github"
            />
          </a>
        </motion.div>
        <motion.div variants={variants} className="">
          <p className="text-center text-gray-400 mt-10">
            &copy; 2021 ElYassir. All rights reserved.
          </p>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Contact;
