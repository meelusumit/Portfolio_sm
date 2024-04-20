import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll';
import { BsPersonBadge } from 'react-icons/bs';
import { SiLeetcode } from "react-icons/si";
import Photo from '../assets/sumit_3.jpg';

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-slate-600 '>
         <div>
                    <img className='h-14 hover:cursor-zoom-in hover:transform hover:scale-125 duration-500' src={Photo} alt='Sumit'/>
                  </div>
        
            <ul className='hidden sm:flex'>
                <li>
                  <Link to='home' smooth={true} duration={500}>
                    Home 
                  </Link>
                </li>

                <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                  </Link>
                </li>

                <li>
                <Link to='skills' smooth={true} duration={500}>
                    Skills
                  </Link>
                </li>


                <li>
                <Link to='work' smooth={true} duration={500}>
                    Work
                  </Link>
                </li>


                <li>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
            </ul>
        

        <div onClick={handleClick} className='sm:hidden z-20 '>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-400 flex flex-col justify-center items-center'}>
            
            <li className='py-6 font-bold text-orange-950'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home 
                  </Link>
            </li>
           
            <li  className='py-6 font-bold text-orange-950'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                  </Link>
            </li>

            <li className='py-6 font-bold text-orange-950'>
            <Link onClick={handleClick} to='skill' smooth={true} duration={500}>
                    Skills
                  </Link>
            </li>

            <li className='py-6 font-bold text-orange-950'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                  </Link>
            </li>

            <li className='py-6 font-bold text-orange-950'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                  </Link>
            </li>

       </ul>

       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full'
            href="https://www.linkedin.com/in/sumit-meelu-6b7955245/">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-200'>
            <a className='flex justify-between items-center w-full'
            href="mailto:meelusumit45@gmail.com">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400'>
            <a className='flex justify-between items-center w-full'
            href="https://github.com/sumit45s">
              Github <FaGithub size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-400'>
            <a className='flex justify-between items-center w-full'
            href="https://drive.google.com/file/d/18MzsOLijCOB9FmSIZ3ARLWefDpjz_t_9/view?usp=sharing">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-300'>
            <a className='flex justify-between items-center w-full'
            href="https://leetcode.com/sumit_45_meelu/">
              Leetcode <SiLeetcode  size={30}/>
            </a>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar