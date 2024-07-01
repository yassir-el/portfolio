import React from 'react'
import './NavBar.css'
import { IoOptionsSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";


const NavBar = () => {
    const [optionsShow, setOptionsShow] = React.useState(false);
    optionsShow ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    return (
        <div className='sticky bg-[#191924] w-full top-0 h-20 z-50'>

            <div className=' w-full container max-w-[1300px] mx-auto'>
                <div className='navbar flex justify-between py-6 text-black m-0'>
                    <div>
                        <h1 className="text-white text-3xl font-sans font-bold ">
                            Portfolio
                        </h1>
                    </div>
                    <ul className='flex text-white text-[1.1rem] items-center flex-row align gap-6 capitalize' >
                        <a href="#home">
                            <li className=''>home</li>
                        </a><a href="#skills">
                            <li>skills</li>
                        </a><a href="#projects">
                            <li>projects</li>
                        </a><a href="#contact">
                            <li>contact</li>
                        </a>
                    </ul>
                    {optionsShow ? <div className='mobile-ul hidden z-10 bg-[#191924] text-white p-0 m-0 fixed left-0 top-0  items-center h-full w-full justify-center '>
                        <ul className='flex text-4xl flex-col gap-6 text-white capitalize'>
                            <a href="#home" onClick={
                                () =>
                                    setOptionsShow(!optionsShow)
                            }>
                                <li>home</li>
                            </a><a href="#skills" onClick={() =>setOptionsShow(!optionsShow)}>
                                <li>skills</li>
                            </a><a href="#projects" onClick={() => setOptionsShow(!optionsShow)}>
                                <li>projects</li>
                            </a><a href="#contact" onClick={() => setOptionsShow(!optionsShow)}>
                                <li>contact</li>
                            </a>
                        </ul>
                    </div> : null}
                    <div className='options-mobile hidden cursor-pointer z-20 text-gray-500 hover:text-gray-100 ' onClick={
                        () =>
                            setOptionsShow(!optionsShow)

                    }>
                        {
                            optionsShow === false ? <FaBars size={30} />
                                : <MdCancel size={30} />
                        }
                    </div>
                </div >
            </div>

        </div>
    )
}

export default NavBar