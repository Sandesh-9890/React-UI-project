import React from 'react'

const Card = (props) => {
   
    
  return (
    <div>
      <div className='bg-red-100 w-55 rounded-4xl flex flex-wrap  h-100 border-2'>
        <img className='rounded-4xl object-cover'  src={props.img1} alt=""/>
      </div>
      
    </div>
  )
}

export default Card
