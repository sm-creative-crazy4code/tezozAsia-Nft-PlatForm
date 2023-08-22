import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col gradient-bg-footer">
    <div className="w-full flex flex-col justify-between items-center my-1">
      

      <div className="flex flex-row justify-center items-center ">
        <img src={logo} alt="logo" className="w-8" />
        <span className="text-white text-xs">
          TezAsia © 2023 - 2024 With Love 💚 CryptoDuo/TezoAsia
        </span>
      </div>
    </div>
  </div>
  )
}

export default Footer
