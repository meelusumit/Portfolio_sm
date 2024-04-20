import React from 'react'

function Course (props) 
{
  return (
    <div className='shadow-md  items-center hover:scale-110 duration-500 hover:bg-red-500'>
    <p className='my-4 mx-auto text-gray-300'>{props.title}</p>
    </div>
  )
}

export default Course