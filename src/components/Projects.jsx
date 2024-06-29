import React from 'react'
import transImg from '../assets/projects/watch.png'
import inceptionImg from '../assets/projects/docker-architecture-min.png'
import webservImg from '../assets/projects/inception.svg'
import likeBashImg from '../assets/projects/likeBash.jpg.jpg'
import raycastingImg from '../assets/projects/raycasting.png'

// 0px 0px 8px #306EE8;

const projectsData =[
  {
    img: transImg,
    name: "PingPongGame",
    desc: "Transcendence is a 42 school project, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users"
  },
  {
    img: inceptionImg,
    name: "Inception",
    desc: "This project aims to broaden your knowledge of system administration by using Docker.You will virtualize several Docker images, creating them in your new personal virtual machine."
  },
  {
    img: webservImg,
    name: "WebServer",
    desc: "The project aims to build a C++98 HTTP web server from scratch, handling GET, HEAD, POST, PUT, DELETE requests, serving static/dynamic content, and managing multiple connections using select()."
  },
  {
    img: raycastingImg,
    name: "Cub3d",
    desc: "Transcendence is a 42 school project, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users"
  },
  {
    img: likeBashImg,
    name: "Like Bash",
    desc: "Transcendence is a 42 school project, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users"
  }
]


/*
  Change the cursor when hover on project -> expand cursor 
  or do expand icon is flowing the cursor
*/


const Projects = () => {
  return (
    <div id='projects' className='pt-28'>
      <h2 className='text-center text-5xl sm:text-4xl'>
          Projects
      </h2>
      <div className='flex flex-wrap justify-center  gap-y-12 gap-x-10 py-8'>
        {
          projectsData.map((e, index) => 
            <div key={index} className='w-96 bg-[#171721]  rounded-xl flex flex-col gap-5 overflow-hidden 
          hover:translate-y-[-20px] transition-all duration-300 hover:scale-105
          hover:!opacity-100
          hover:shadow-[0_0_16px_black]
          justify-between
            ' style={
              {
                opacity: "1"
              }
            }>
                    <img src={e.img} alt="ping-pong-project" className='w-96 h-56 bg-white p-x'/>
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
                      <button className='py-3 px-6 text-[#854ce6] rounded-lg border-[#854ce680] border-2 text-lg hover:bg-[#854ce680] hover:text-white'>
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