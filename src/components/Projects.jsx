import React, { useEffect } from 'react'
import transImg from '../assets/projects/watch.png'
import inceptionImg from '../assets/projects/docker-architecture-min.png'
import webservImg from '../assets/projects/inception.svg'
import likeBashImg from '../assets/projects/likeBash.jpg.jpg'
import raycastingImg from '../assets/projects/raycasting.png'
import { motion } from 'framer-motion'
import GithubIcon from '../assets/skills/github.svg'
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa'
// 0px 0px 8px #306EE8;

const projectsData = [
  {
    img: transImg,
    name: "PingPongGame",
    desc: "Transcendence is a 42 school project, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users",
    features: [
      "Real-Time Chat: Communicate with other users instantly through the integrated chat feature.",
      "Profile Page: Customize your profile, view your stats, and check your achievements.",
      "Game Page: Immerse yourself in the Pong Game environment with a dedicated game page.",
      "Real-Time Notifications: Stay informed with real-time notifications for game invites, messages, and more.",
      "Leaderboard: Compete with other users and climb the leaderboard to become the best player.",
      "Achievements: Unlock achievements by completing specific tasks and show them off on your profile.",
      "Responsive Design: Enjoy a seamless experience on any device with a fully responsive design.",
      "Dark Mode: Reduce eye strain and save battery life with the integrated dark mode feature.",
      "Authentication: Secure your account with a 0Auth2.0 login system with Intra42 integration.",
      "User Search: Find other users and view their profiles with the integrated user search feature.",
      "Remote Player Functionality: Play against friends or other players from anywhere in the world with seamless remote player connectivity.",
      "Game Invites: Invite other users to play a game and compete against them in real-time.",
      "Game History: View your past games and stats to track your progress over time.",
    ],
    tools: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Socket.io",
    ]
  },
  {
    img: inceptionImg,
    name: "Inception",
    desc: "This project aims to broaden your knowledge of system administration by using Docker.You will virtualize several Docker images, creating them in your new personal virtual machine.",
    features: [
      "Real-Time Chat: Communicate with other users instantly through the integrated chat feature.",
      "Profile Page: Customize your profile, view your stats, and check your achievements.",
      "Game Page: Immerse yourself in the Pong Game environment with a dedicated game page.",
      "Real-Time Notifications: Stay informed with real-time notifications for game invites, messages, and more.",
      "Leaderboard: Compete with other users and climb the leaderboard to become the best player.",
      "Achievements: Unlock achievements by completing specific tasks and show them off on your profile.",
      "Responsive Design: Enjoy a seamless experience on any device with a fully responsive design.",
      "Dark Mode: Reduce eye strain and save battery life with the integrated dark mode feature.",
      "Authentication: Secure your account with a 0Auth2.0 login system with Intra42 integration.",
      "User Search: Find other users and view their profiles with the integrated user search feature.",
      "Remote Player Functionality: Play against friends or other players from anywhere in the world with seamless remote player connectivity.",
      "Game Invites: Invite other users to play a game and compete against them in real-time.",
      "Game History: View your past games and stats to track your progress over time.",
    ],
    tools: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Socket.io",
    ]
  },
  {
    img: webservImg,
    name: "WebServer",
    desc: "The project aims to build a C++98 HTTP web server from scratch, handling GET, HEAD, POST, PUT, DELETE requests, serving static/dynamic content, and managing multiple connections using select().",
    features: [
      "Real-Time Chat: Communicate with other users instantly through the integrated chat feature.",
      "Profile Page: Customize your profile, view your stats, and check your achievements.",
      "Game Page: Immerse yourself in the Pong Game environment with a dedicated game page.",
      "Real-Time Notifications: Stay informed with real-time notifications for game invites, messages, and more.",
      "Leaderboard: Compete with other users and climb the leaderboard to become the best player.",
      "Achievements: Unlock achievements by completing specific tasks and show them off on your profile.",
      "Responsive Design: Enjoy a seamless experience on any device with a fully responsive design.",
      "Dark Mode: Reduce eye strain and save battery life with the integrated dark mode feature.",
      "Authentication: Secure your account with a 0Auth2.0 login system with Intra42 integration.",
      "User Search: Find other users and view their profiles with the integrated user search feature.",
      "Remote Player Functionality: Play against friends or other players from anywhere in the world with seamless remote player connectivity.",
      "Game Invites: Invite other users to play a game and compete against them in real-time.",
      "Game History: View your past games and stats to track your progress over time.",
    ],
    tools: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Socket.io",
    ]
  },
  {
    img: raycastingImg,
    name: "Cub3d",
    desc: "Transcendence is a 42 school project, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users",
    features: [
      "Real-Time Chat: Communicate with other users instantly through the integrated chat feature.",
      "Profile Page: Customize your profile, view your stats, and check your achievements.",
      "Game Page: Immerse yourself in the Pong Game environment with a dedicated game page.",
      "Real-Time Notifications: Stay informed with real-time notifications for game invites, messages, and more.",
      "Leaderboard: Compete with other users and climb the leaderboard to become the best player.",
      "Achievements: Unlock achievements by completing specific tasks and show them off on your profile.",
      "Responsive Design: Enjoy a seamless experience on any device with a fully responsive design.",
      "Dark Mode: Reduce eye strain and save battery life with the integrated dark mode feature.",
      "Authentication: Secure your account with a 0Auth2.0 login system with Intra42 integration.",
      "User Search: Find other users and view their profiles with the integrated user search feature.",
      "Remote Player Functionality: Play against friends or other players from anywhere in the world with seamless remote player connectivity.",
      "Game Invites: Invite other users to play a game and compete against them in real-time.",
      "Game History: View your past games and stats to track your progress over time.",
    ],
    tools: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Socket.io",
    ]
  },
  {
    img: likeBashImg,
    name: "Like Bash",
    desc: "Transcendence is a 42 school project, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users",
    features: [
      "Real-Time Chat: Communicate with other users instantly through the integrated chat feature.",
      "Profile Page: Customize your profile, view your stats, and check your achievements.",
      "Game Page: Immerse yourself in the Pong Game environment with a dedicated game page.",
      "Real-Time Notifications: Stay informed with real-time notifications for game invites, messages, and more.",
      "Leaderboard: Compete with other users and climb the leaderboard to become the best player.",
      "Achievements: Unlock achievements by completing specific tasks and show them off on your profile.",
      "Responsive Design: Enjoy a seamless experience on any device with a fully responsive design.",
      "Dark Mode: Reduce eye strain and save battery life with the integrated dark mode feature.",
      "Authentication: Secure your account with a 0Auth2.0 login system with Intra42 integration.",
      "User Search: Find other users and view their profiles with the integrated user search feature.",
      "Remote Player Functionality: Play against friends or other players from anywhere in the world with seamless remote player connectivity.",
      "Game Invites: Invite other users to play a game and compete against them in real-time.",
      "Game History: View your past games and stats to track your progress over time.",
    ],
    tools: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Socket.io",
    ]
  }
]

/*
  Change the cursor when hover on project -> expand cursor 
  or do expand icon is flowing the cursor
*/




const Projects = () => {
  const [show, setShow] = React.useState(0)
  const ref = React.useRef([]);

  console.log(ref.current);

  show ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  useEffect(() => {
    const fun = window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setShow(0)
      }
    }
    )
    return () => {
      window.removeEventListener('keydown', fun)
    }

  }, [])


  return (
    <div id='projects' className='pt-28'>
      <h2 className='text-center text-5xl sm:text-4xl'>
        Projects
      </h2>
      {
        show !== 0 && <motion.div style={
          {
            position: "fixed",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
          }
        }
          initial={
            {
              opacity: 0
            }
          }
          animate={
            {
              opacity: 1
            }
          }

          className='w-full h-full bg-[#00000080] z-50 flex justify-center items-center'
        >
          <motion.div className='max-w-[800px] p-4 mx-8 h-[1000px] bg-[#171721]  rounded-xl flex flex-col gap-4 overflow-hidden 
           scale-105
          shadow-[0_0_16px_black] overflow-y-scroll
            '
            initial={
              {
                opacity: 0,
                scale: 0.1
              }
            }
            animate={
              {
                opacity: 1,
                scale: 1
              }
            }
            transition={
              {
                duration: 0.4
              }
            } >
            {/* <img src={projectsData[show - 1].img} alt="ping-pong-project" className='w-full bg-white p-x' /> */}
            <div
              className='px-4 flex flex-col gap-2'
            >
              <h3 className='text-2xl'>
                {
                  projectsData[show - 1].name
                }
              </h3>
              <p className='text-gray-200 text-xl'>
                {
                  projectsData[show - 1].desc
                }
              </p>
              <h4 className='text-2xl text-gray-200'>
                Features:
              </h4>
              <ul className='px-4 py-2 flex flex-col gap-3'>
                {
                  projectsData[show - 1].features.map((e, index) =>
                    <li key={index} className='text-gray-200 text-xl
                      before:content-[">"] before:mr-2 before:text-[#854ce6] before:text-2xl'>
                    
                      {
                      e
                      }
                    </li>)
                }
              </ul>
              <h4 className='text-2xl text-gray-200'>
                Tools:
              </h4>
              <ul className='px-4 py-2 flex flex-row gap-3'>
                {
                  projectsData[show - 1].tools.map((e, index) =>
                    <li key={index} className='
                      before:content-[""] before:mr-2 text-purple-400 text-2xl'>
                      {
                        e
                      }
                    </li>)
                }
              </ul>

            </div>
            <div className='m-4 flex justify-between'>
              <div className='flex gap-2'>
              <button className='py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white' onClick={
                () => setShow(0)
              }>
                <FaGithub />
              </button>
              <button className='py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white' onClick={
                () => setShow(0)
              }>
                <FaLink />
              </button>
              </div>
              <button className='py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white' onClick={
                () => setShow(0)
              }>
                Done
              </button>
            </div>
          </motion.div>

        </motion.div>
      }
      <div className='flex flex-wrap justify-center  gap-y-12 gap-x-10 py-8'>
        {
          projectsData.map((e, index) =>
            <div
              ref={el => ref.current[index] = el}
              key={index} className='w-96 bg-[#171721]  rounded-xl flex flex-col gap-5 overflow-hidden 
          hover:translate-y-[-20px] transition-all duration-300 hover:scale-105
          hover:!opacity-100
          hover:shadow-[0_0_16px_black]
          justify-between
            ' style={
                {
                  opacity: "1"
                }
              }>
              <img src={e.img} alt="ping-pong-project" className='w-96 h-56 bg-white p-x' />
              <div
                className='px-4 flex flex-col gap-2'
              >
                <h3 className='text-2xl'>
                  {
                    e.name
                  }
                </h3>
                <p className='text-gray-400'>
                  {
                    e.desc
                  }
                </p>
              </div>
              <div className='m-4'>
                <button className='py-3 px-6 rounded-lg border-[#854ce680] border-2 text-lg bg-[#854ce680] text-white' onClick={() => setShow(index + 1)}>
                  More
                </button>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Projects