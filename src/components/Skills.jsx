import React from 'react'
import htmlImg from '../assets/html5.svg'
import cssImg from '../assets/css3.svg'
import jsImg from '../assets/javascript.svg'
import typescriptImg from '../assets/typescript.svg'

import tailwindImg from '../assets/tailwindcss.svg'

import reactImg from '../assets/react.svg'
import nextJsImg from '../assets/nextjs.svg'
import reduxImg from '../assets/redux.svg'

import nodeImg from '../assets/nodejs.svg'
import expressImg from '../assets/express.svg'
import nestJsImg from '../assets/nestjs.svg'

import mongoImg from '../assets/mongodb.svg'
import postgresImg from '../assets/postgresql.svg'
import mysqlImg from '../assets/mysql.svg'

import gitImg from '../assets/git.svg'
import githubImg from '../assets/github.svg'

import dockerImg from '../assets/docker.svg'
import k8sImg from '../assets/kubernetes.svg'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import cImg from '../assets/c-original.svg'
import linuxImg from '../assets/linux.svg'
import cppImg from '../assets/cplusplus-original.svg'

// import graphqlImg from '../assets/graphql.svg'
// import apolloImg from '../assets/apollo-graphql.svg'

import './Skills.css'

const frontend = [
    {
        name: 'HTML5',
        icon: htmlImg
    },
    {
        name: 'CSS3',
        icon: cssImg
    },
    {
        name: 'JavaScript',
        icon: jsImg
    },
    {
        name: 'TypeScript',

        icon: typescriptImg
    },
    {
        name: 'TailwindCSS',
        icon: tailwindImg
    },
    {
        name: 'React',
        icon: reactImg
    },
    {
        name: 'Redux',
        icon: reduxImg
    },
    {
        name: 'Next.js',
        icon: nextJsImg
    }
]

const backend = [
    {
        name: 'NodeJS',
        icon: nodeImg
    },
    {
        name: 'Express',
        icon: expressImg
    },
    {
        name: 'NestJS',
        icon: nestJsImg
    },
    {
        name: 'PostgreSQL',
        icon: postgresImg
    },
    {
        name: 'MongoDB',
        icon: mongoImg
    }
]

const other = [
    {
        name: 'C language',
        icon: cImg
    },
    {
        name: 'C++',
        icon: cppImg
    },
    {
        name: 'Docker',
        icon: dockerImg
    },
    {
        name: 'Git',
        icon: gitImg
    },
    {
        name: 'GitHub',
        icon: githubImg
    },
    {
        name: 'Linux',
        icon: linuxImg
    }

]

// const other = [
//     {
//         name: 'GraphQL',
//         icon: graphqlImg
//     },
//     {
//         name: 'Apollo GraphQL',
//         icon: apolloImg
//     },
//     {
//         name: 'C',
//         icon: cImg
//     },
//     {    
//         name: 'C++',
//         icon: cppImg
//     },
//     {
//         name: 'Linux',
//         icon: linuxImg
//     }
// ]

// import { FaReact } from 'react-icons/fa'

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
  
    [`& .${tooltipClasses.arrow}`]: {
    
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      padding:"10px 20px",
      fontSize: "15px",
      backgroundColor: theme.palette.common.black,
    },
  }));

const Skills = () => {
    return (

        <div className='px-1 pt-32' id="skills">
            <div className='flex md:flex-row flex-col   '>
                <div className='flex flex-col items-center  md:w-1/2 ' style={
                    {
                        border: '1px solid rgb(133 76 230 / 50%)',
                    }
                }>
                    <h3 className='text-2xl sm:text-3xl text-center text-[white] mt-[-20px] bg-[#1C1C27] px-5'>
                        Frontend
                    </h3>
                    <div className='flex flex-wrap justify-center py-5'>

                        {
                            frontend.map((item, index) => (
                                <BootstrapTooltip enterTouchDelay={0} title={item.name} arrow>
                                <div className='m-2' key={index}>
                                    <img src={item.icon} alt={item.name} className='lg:w-16 lg:h-16 md:w-8 md:h-8 w-8 h-8  duration-300' />
                                </div>
                            </BootstrapTooltip>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col items-center  md:w-1/2' style={
                    {
                        border: '1px solid rgb(133 76 230 / 50%)',
                    }
                }>
                    <h3 className='text-2xl sm:text-3xl text-center text-[white] mt-[-20px] bg-[#1C1C27] px-5'>
                        Backend
                    </h3>
                    <div className='flex flex-wrap justify-center py-5 '>
                        {
                            backend.map((item, index) => (
                                <BootstrapTooltip enterTouchDelay={0} title={item.name} arrow>
                                <div className='m-2' key={index}>
                                    <img src={item.icon} alt={item.name} className='lg:w-16 lg:h-16 md:w-8 md:h-8 w-8 h-8   duration-300' />
                                </div>
                            </BootstrapTooltip>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col items-center  md:w-1/2' style={
                    {
                        border: '1px solid rgb(133 76 230 / 50%)',
                    }
                }>
                    <h3 className='text-2xl sm:text-3xl text-center text-[white] mt-[-20px] bg-[#1C1C27] px-5'>
                        Others
                    </h3>
                    <div className='flex flex-wrap justify-center py-5 '>
                        {
                            other.map((item, index) => (
                                <BootstrapTooltip enterTouchDelay={0} title={item.name} arrow>
                                <div className='m-2' key={index}>
                                    <img src={item.icon} alt={item.name} className='lg:w-16 lg:h-16 md:w-8 md:h-8 w-8 h-8   duration-300' />
                                </div>
                            </BootstrapTooltip>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills