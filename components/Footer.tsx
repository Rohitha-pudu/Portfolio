import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-3 my-9'>
        Made By 
        <div className='text-[#e6c45d]'>Rohitha Pudu</div>
         <FaHeart size={20} color="white" />
    </div>
  )
}

export default Footer