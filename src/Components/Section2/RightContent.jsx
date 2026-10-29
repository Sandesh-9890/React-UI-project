import React from 'react'
import Card from './Card'

const obj=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  },
  {
    img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  },
  {
    img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  },
  {
    img:'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  },
  {
    img:'https://images.unsplash.com/photo-1571365689578-618663443bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid debitis maiores, repellendus ab eum? Aliquid tenetur magnam architecto ullam pariatur expedita at unde? Molestias excepturi eos consequuntur provident eius.',

  }
]
const RightContent = () => {
  
    return (
      <div className='h-full   w-500 flex overflow-x-auto flex-nowrap scrollbar-none   p-10 gap-4'>
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
