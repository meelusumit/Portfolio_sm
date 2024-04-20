import React from 'react'
// import Namm from '../assets/sumit_3.jpg'
import Travel from '../assets/sunrise-1014712_640.jpg'
import Ipl from '../assets/hand-drawn-ipl-cricket-illustration_23-2149213601.avif'

const Work = () => 
{
  return (
    <div name='work' className='w-full sm:h-screen text-gray-300 bg-slate-700'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-3xl font-bold inline border-b-4'>Work</p>
          <p className='py-4 '>Here is some my work, technologies i have explored!!</p>
        </div>

      {/* Container*/}
        <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-4'>
          {/*Grid item */}
          <div  style={{backgroundImage:`url(${Ipl})`}} className='shadow-lg shadow-orange-300 group container rounded-nd flex justify-center items-center mx-auto content-div'>
           
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-blue-950 tracking-wider'>
                IPL win Predictor
              </span>

              <div className='pt-8 text-center'>
              {/*<a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-pink-100 text-white font-bold text-lg'>
                    DEMO
                  </button>
                </a>
              */}
                <a href='https://github.com/meelusumit/Win_Prediction.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-pink-200 text-white font-bold text-lg'>
                    CODE
                  </button>
                </a>

              </div>
            </div>
          </div>


          <div  style={{backgroundImage:`url(${Travel})`}} className='shadow-lg shadow-orange-300 group container rounded-nd flex justify-center items-center mx-auto content-div'>
           
           {/* Hover effects */}
           <div className='opacity-0 group-hover:opacity-100'>
             <span className='text-2xl font-bold text-white tracking-wider'>
               Travel Application
             </span>

             <div className='pt-8 text-center'>
               <a href='https://travel-destinationn.web.app/'>
                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-emerald-200 text-white font-bold text-lg'>
                   DEMO
                 </button>
               </a>
               <a href='https://github.com/meelusumit/Travel-Website.git'>
                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-pink-100 text-white font-bold text-lg'>
                   CODE
                 </button>
               </a>

             </div>

           </div>
         </div>

         
        </div>


      </div>
    </div>

  )
}

export default Work