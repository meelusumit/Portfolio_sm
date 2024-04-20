import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-700'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'> Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-yellow-50'> Sumit meelu</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-white'> Welcome to My Portfolio!</h2>
        
        <p className='text-lime-100 py-4 max-w-[700px]'>Computer Science and Engineering student at NIT Jalandhar. I'm passionate about coding and innovation, exploring fields of machine learning and frontend development. I'm excited to explore challenging technical roles that emphasize creativity, collaboration, and continuous growth.  </p>
       
       
        <div >
        <Link to='about' smooth={true} duration={500}>
                  
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-300 hover:border-purple-300'>
            View next 
           <span className='group-hover:rotate-90 duration-300'>
           <HiArrowNarrowRight className='ml-4'/> 
           </span>
          </button>

        </Link>
        </div> 

      </div>
    </div>
  )
}

export default Home