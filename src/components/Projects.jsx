import React, { useEffect } from "react";

import { motion } from "framer-motion";
import GithubIcon from "../assets/skills/github.svg";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import { projectsData } from "./data/projects";
// 0px 0px 8px #306EE8;

/*
  Change the cursor when hover on project -> expand cursor 
  or do expand icon is flowing the cursor
*/

const Projects = () => {
  const [show, setShow] = React.useState(0);
  const ref = React.useRef([]);

  console.log(ref.current);

  show
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  useEffect(() => {
    const fun = window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setShow(0);
      }
    });
    return () => {
      window.removeEventListener("keydown", fun);
    };
  }, []);

  return (
    <div id="projects" className="pt-28 ">
      <h2 className="text-center text-5xl sm:text-4xl">Projects</h2>
      {show !== 0 && (
        <motion.div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="w-full h-full bg-[#00000080] z-50 flex justify-center items-center"
        >
          <motion.div
            className=" max-w-[800px] p-4 mx-8 bg-[#171721]  rounded-xl flex flex-col gap-4 overflow-hidden 
           scale-105
          shadow-[0_0_16px_black]
            "
            initial={{
              opacity: 0,
              scale: 0.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            {/* <img src={projectsData[show - 1].img} alt="ping-pong-project" className='w-full bg-white p-x' /> */}
            <div className="px-4 flex flex-col gap-2 ">
              <div className="">
                <div className="flex justify-between gap-4 items-center py-4">
                  <h3 className="text-2xl">{projectsData[show - 1].name}</h3>
                </div>
              </div>
              <p className="text-gray-200 text-xl">
                {projectsData[show - 1].desc}
              </p>
              <ul className="px-4 py-2 flex flex-col gap-3 ">
                {projectsData[show - 1].features.map((e, index) => (
                  <li
                    key={index}
                    className='text-gray-200 text-xl
                      before:content-[">"] before:mr-2 before:text-[#854ce6] before:text-2xl'
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <h4 className="text-2xl text-gray-200">Tools:</h4>
              <div className="flex justify-between">
                <ul className="flex flex-wrap px-4 py-2 gap-3">
                  {projectsData[show - 1].tools.map((e, index) => (
                    <li
                      key={index}
                      className='before:content-[""] before:mr-2 text-purple-400 text-2xl'
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-between px-4">
              <div className="flex gap-2">
                <a
                  href={projectsData[show - 1].codeLink}
                  target="_blank"
                  className="py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href={projectsData[show - 1].demoLink}
                  target="_blank"
                  className="py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white"
                >
                  <FaLink />
                </a>
              </div>
              <button
                className="py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white"
                onClick={() => setShow(0)}
              >
                Done
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      <div className="flex flex-wrap justify-center  gap-y-12 gap-x-10 py-8">
        {projectsData.map((e, index) => (
          <div
            ref={(el) => (ref.current[index] = el)}
            key={index}
            className="w-96 bg-[#171721]  rounded-xl flex flex-col gap-5 overflow-hidden 
          hover:translate-y-[-20px] transition-all duration-300 hover:scale-105
          hover:!opacity-100
          hover:shadow-[0_0_16px_black]
          justify-between
            "
            style={{
              opacity: "1",
            }}
          >
            <img
              src={e.img}
              alt="ping-pong-project"
              className="w-96 h-56 bg-white p-x"
            />
            <div className="px-4 flex flex-col gap-2">
              <h3 className="text-2xl">{e.name}</h3>
              <p className="text-gray-400">{e.desc}</p>
            </div>
            <div className="m-4">
              <button
                className="py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white"
                onClick={() => setShow(index + 1)}
              >
                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
