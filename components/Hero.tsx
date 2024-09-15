import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaInstagram, FaGithub } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'/>
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
          <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2]flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

      <div className='flex justify-center relative my-20'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'> 
          <TextGenerateEffect 
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words="Hello welcome to my profile let's immediately connect and follow my account"/>

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi I`am Dimas. Backend engineer based in Jakarta.</p>
          <div className='flex gap-4'>
          <a href="https://www.instagram.com/dimas_if23">
            <MagicButton 
            title='Follow my instagram'
            icon={<FaInstagram  />}
            position='right'
            handleClick={() => {}}
            OtherClasses=''
            />
          </a>
          <a href="https://www.github.com/dimas292">
            <MagicButton 
            title='Follow my githb'
            icon={<FaGithub  />}
            position='right'
            handleClick={() =>{}}
            OtherClasses=''
            />
          </a>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Hero
