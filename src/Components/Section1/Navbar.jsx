import React from 'react'

const Navbar = () => {
  return (
    <div className='h-15 w-screen  flex items-center justify-between '>
      <div className='ml-5 bg-black text-white h-7 text-base non-italic w-32 flex justify-center  rounded-2xl  content-evenly'>Target Audience</div>
      <button className='mr-5 bg-gray-50 rounded-2xl h-8 w-50'>Digital banking platform</button>
    </div>
  )
}

export default Navbar
