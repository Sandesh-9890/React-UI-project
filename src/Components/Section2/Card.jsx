import React from 'react'

const Card = (props) => {
   
    
  return (
    <div>
      <div className=' overflow-x-auto  w-55 rounded-4xl flex flex-wrap  h-100 '>
        <img className='rounded-4xl object-cover '  src={props.img1} alt=""/>
      </div>
      
    </div>
  )
}

export default Card
