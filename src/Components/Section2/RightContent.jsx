import React from 'react'
import Card from './Card'

const obj=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  }
]
const RightContent = () => {
  
    return (
      <div className=' w-500 flex flex-wrap  p-25 gap-4'>
     {
      obj.map((ele)=>{
        return(
          <div className=''>
            <Card img1={ele.img} content={ele.content} />
          </div>
        )
        
      })
     }
      
    </div>
    )
  
}

export default RightContent
