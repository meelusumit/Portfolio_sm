import React from 'react'
import HTML from '../assets/html.png';
import CPP from '../assets/cppp.png'
import Python from '../assets/pythh.png'
import CSS from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import Rt from '../assets/react.png'
import Mysql from '../assets/mysql.png'
import Java from '../assets/java12.png'

import SkillComponent from './skillComponent';
import Course from './course'

export default function Skills (){
  return (
    <div name='skills' className='w-full h-screen bg-slate-700'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-3xl font-bold inline border-b-4 text-gray-400 '>Skills</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
          
          <SkillComponent src= {HTML} title ={ "HTML"}/>
          <SkillComponent src= {CPP} title ={ "C++"}/>
          <SkillComponent src= {Python} title ={ "Python"}/>
          <SkillComponent src= {CSS} title ={ "CSS"}/>
          <SkillComponent src= {Rt} title ={ "React"}/>
          <SkillComponent src= {Tailwind} title ={ "Tailwind"}/>
          <SkillComponent src= {Mysql} title ={ "MySQL"}/>
          <SkillComponent src= {Java} title ={ "Java"}/>

        </div>

       {/* <div>
          <p className='text-3xl font-bold inline border-b-4 text-gray-400 '>CourseWork</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>

            <div className='shadow-md  bg-gray-700 hover:scale-100 duration-500'>
              <img className='w-20 mx-auto' src={DSA} alt='DSA'/>
              <p className='my-4'>DSA</p>
            </div>

            <div className='shadow-md  bg-gray-700 hover:scale-100 duration-500'>
              <img className='w-20 mx-auto' src={DBMS} alt='DBMS'/>
              <p className='my-4 '>DBMS</p>
            </div>

            <div className='shadow-md  bg-gray-700 hover:scale-100 duration-500'>
              <img className='w-20 mx-auto' src={ML} alt='DSA'/>
              <p className='my-4 text-center'>ML</p>
            </div>

            <div className='shadow-md  bg-gray-700 hover:scale-100 duration-500'>
              <img className='w-20 mx-auto' src={OOP} alt='DSA'/>
              <p className='my-4 text-center'>OOPs</p>
            </div>
          </div>
        </div> */}

          <div>
          <p className='text-3xl font-bold inline border-b-4 text-gray-400 '>CourseWork</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>

          <Course title='Data Structures '/>
          <Course title='DBMS'/>
          <Course title='Machine Learning'/>
          <Course title='OOPs'/>
          
          </div>
        </div>

      </div>
    </div>
  )
}
