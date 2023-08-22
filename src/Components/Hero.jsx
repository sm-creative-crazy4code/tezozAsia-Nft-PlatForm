import React from 'react'
import { twitter,facebook,github } from '../assets'
import ImageGeneration from './ImageGeneration'


// src\assets\nftbg2.png
const Hero = () => {
  return (
    // https://i.pinimg.com/originals/8f/cd/f0/8fcdf0268bad32c255fcadb1b5337304.png
    <div
      className="bg-[url('https://i.pinimg.com/originals/80/8f/60/808f60af7106d74758ce0239485d700a.png')]
        bg-no-repeat bg-cover pt-10 "
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
            A.I Arts <br />
            <span className="text-gradient">NFTs</span> Collection
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>

         <ImageGeneration />


          <button
            className="shadow-xl shadow-black text-white
            bg-[#219665cd] hover:bg-[#30b043] p-2
            rounded-full cursor-pointer my-4"
            onClick={()=>{}}
          >
            Mint Now
          </button>

          <a
            href="https://daltonic.github.io/"
            className="flex flex-row justify-center space-x-2 items-center
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          >
            <img
              className="w-11 h-11 object-contain rounded-full"
              src=""
              alt="Adulam Logo"
            />
            <div className="flex flex-col font-semibold">
              <span className="text-white text-sm">0xf55...146a</span>
              <span className="text-[#219665cd] text-xs">Daltonic</span>
            </div>
          </a>

          <p className="text-white text-sm font-medium text-center">
            Gospel Darlington kick-started his journey as a software engineer in
            2016. <br /> Over the years, he has grown full-blown skills in
            JavaScript stacks such as <br /> React, ReactNative, VueJs, and now
            blockchain.
          </p>

          <ul className="flex flex-row justify-center space-x-2 items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://github.com/Daltonic"
            >
              <img className="w-7 h-7" src={github} alt="Github" />
            </a>
            
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://fb.com/darlington.gospel01"
            >
              <img className="w-7 h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://twitter.com/idaltonic"
            >
              <img className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
            {/* <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://darlingtongospel.medium.com/"
            >
              <img className="w-7 h-7" src="" alt="medium" />
            </a> */}
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#30b043] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
