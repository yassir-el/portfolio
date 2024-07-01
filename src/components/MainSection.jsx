import React from 'react'
import Typewriter from 'typewriter-effect';
import Lottie from 'react-lottie';
import animationData from '../assets/animation/heroAnimtion'

const MainSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }

  };

  return (
    <div>
      <div className='flex flex-row text-2xl min-h-[450px]'>
        <div className='flex  flex-col lg:flex-row gap-2 lg:p-6 '>
          <div className='flex w-full flex-col gap-12 lg:text-left justify-center'>
            <h1 className='lg:text-6xl text-4xl lg:font-bold '>
              Hi, My name is <br className='hidden lg:block' /> Yassir El Massafi
            </h1>
            <h2 className='sm:text-4xl text-2xl flex'>
              I am a &nbsp;  <span className='text-[#854CE6]'>
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer', 'Front End Developer', 'Back End Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <p className=' sm:text-[20px] text-[15px]  text-[#F2F3F495] '>
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
            </p>
          </div>
          <div className='w-full flex flex-row lg:justify-end justify-center '>
            <Lottie
              options={defaultOptions}
              className="my-lottie-animation"
              style={
                {
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  maxWidth: 500,
                  maxHeight: 500
                }
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection