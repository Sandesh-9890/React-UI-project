import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const LeftContent = () => {
  return (
    <div className='bg-yellow-300 w-200 h-127 flex flex-col justify-between'>
      
        <div className='mt-7 ml-9 h-32 w-60  '>
          <h1 className='text-4xl  '>Prospective <br />
            <span className='rounded-2xl place-content-center justify-items-start'>customer</span><br />
            segmentation
          </h1>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur tempore, doloremque consectetur assumenda necessitatibus.</p>
        </div>
        <ArrowUpRight className='size-17 ml-5 h-25' />  

    </div>
  )
}

export default LeftContent
