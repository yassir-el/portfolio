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

// import graphqlImg from '../assets/graphql.svg'
// import apolloImg from '../assets/apollo-graphql.svg'


import { FaReact } from 'react-icons/fa'

const Skills = () => {
    return (
        <div className='px-1 mt-20 mb-10'>
            <h2 className='text-center sm:text-4xl text-2xl'>
                Skills
            </h2>
            <div className='flex'>
                <div className='flex flex-col items-center justify-center w-1/2'>
                    <h3 className='text-3xl text-center mt-10 mb-5'>
                        Frontend
                    </h3>
                    <div className='flex flex-wrap justify-center'>
                        <div className='m-2'>
                            <img src={htmlImg} alt='html5' className='w-16 h-16' />
                            <p className='text-center'>HTML5</p>
                        </div>
                        <div className='m-2'>
                            <img src={cssImg} alt='css3' className='w-16 h-16' />
                            <p className='text-center'>CSS3</p>
                        </div>
                        <div className='m-2'>
                            <img src={jsImg} alt='javascript' className='w-16 h-16' />
                            <p className='text-center'>JavaScript</p>
                        </div>
                        <div className='m-2'>
                            <img src={typescriptImg} alt='typescript' className='w-16 h-16' />
                            <p className='text-center'>TypeScript</p>
                        </div>
                        <div className='m-2'>
                            <img src={tailwindImg} alt='tailwind' className='w-16 h-16' />
                            <p className='text-center'>Tailwind</p>
                        </div>
                        <div className='m-2'>
                            <img src={reactImg} alt='react' className='w-16 h-16' />
                            <p className='text-center'>React</p>
                        </div>
                        <div className='m-2'>
                            <img src={reduxImg} alt='redux' className='w-16 h-16' />
                            <p className='text-center'>Redux</p>
                        </div>
                        <div className='m-2'>
                            <img src={nextJsImg} alt='nextjs' className='w-16 h-16' />
                            <p className='text-center'>Next.js</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center w-1/2'>
                    <h3 className='text-3xl text-center mt-10 mb-5'>
                        Backend
                    </h3>
                    <div className='flex flex-wrap justify-center'>
                        <div className='m-2'>
                            <img src={nodeImg} alt='' className='w-16 h-16' />
                            <p className='text-center'>NodeJS</p>
                        </div>
                        <div className='m-2'>
                            <img src={expressImg} alt='express' className='w-16 h-16' />
                            <p className='text-center'>Express</p>
                        </div>
                        <div className='m-2'>
                            <img src={nestJsImg} alt='nestjs' className='w-16 h-16' />
                            <p className='text-center'>Nest.js</p>
                        </div>
                        <div className='m-2'>
                            <img src={postgresImg} alt='postgresql' className='w-16 h-16' />
                            <p className='text-center'>postgres</p>
                        </div>
                        <div className='m-2'>
                            <img src={dockerImg} alt='docker' className='w-16 h-16' />
                            <p className='text-center'>Docker</p>
                        </div>
                        <div className='m-2'>
                            <img src={gitImg} alt='git' className='w-16 h-16' />
                            <p className='text-center'>Git</p>
                        </div>
                        <div className='m-2'>
                            <img src={mongoImg} alt='mongodb' className='w-16 h-16' />
                            <p className='text-center'>Mongodb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills