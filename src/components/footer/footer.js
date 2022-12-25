import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

function footer() {
  return (
    <div className='flex flex-col bg-black mt-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16'>
         <div className='col-span-2 md:col-span-1 xl:ml-28 lg:ml-20 ml-8'><a href="/">
            <img className="w-40" src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62e8d2ea218fb73fa66895dd_88x37.webp" alt=""/>
        </a>
         </div>
         <div className='flex flex-col gap-2 w-8/12 md:mt-0 mt-12 md:ml-0 ml-8'>
             <h1 className='text-sm text-white font-bold'>COURSES</h1>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Certificate Course in Full Stack Development</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Certificate Course in Data Science</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Master's in Computer Science</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Master's in Data Science</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Full Stack Development - Pay After Placement</a>
         </div>
         <div className='flex flex-col gap-2 md:mt-0 mt-12'>
             <h1 className='text-sm text-white font-bold'>COMPANY</h1>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">About Us</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Blog</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Hire From Us</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Careers</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Contact</a>
         </div>
         <div className='flex flex-col gap-2 lg:-ml-20 md:ml-72 ml-8 lg:mt-0 md:mt-8 mt-12 lg:col-span-1 md:col-span-2'>
             <h1 className='text-sm text-white font-bold'>MORE</h1>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Newton Coding Contest</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Launchpad</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Sign In</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Create Account</a>
         </div>
      </div>

      <div className='md:self-center md:ml-0 ml-8 text-xl font-bold text-gray-200 mt-8'>Follow Us</div>

      <div className='flex flex-row md:self-center ml-8 md:ml-0 gap-4 mt-8'>
        <a href="/"><FaInstagramSquare style={{"background-color":"white","color":"blue","border-radius":"6px"}}  size={40}></FaInstagramSquare></a>
        <a href="/"><FaTwitterSquare style={{"background-color":"white","color":"blue","border-radius":"6px"}}  size={40}></FaTwitterSquare></a>
        <a href="/"><FaYoutubeSquare style={{"background-color":"white","color":"blue","border-radius":"6px"}}  size={40}></FaYoutubeSquare></a>
        <a href="/"><FaLinkedin style={{"background-color":"white","color":"blue","border-radius":"6px"}} size={40}></FaLinkedin></a>
      </div>
      <br></br>
      <hr className='border-gray-700'></hr>
      <br></br>

      <div className='md:self-center flex flex-col md:flex-row gap-4 ml-8 md:ml-0'>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">© 2022 Incanus Technologies Pvt Ltd.</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Terms & Conditions</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Privacy Policy</a>
             <a className='text-gray-400 hover:text-gray-200 font-bold' href="/">Grievance Redressal</a>
      </div>

      <div className='md:self-center mt-8 ml-8 md:ml-0'>
        <a href="/">
            <img className="w-52" src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62e8d2ea218fb73fa66895dd_88x37.webp" alt=""/>
        </a>
      </div>
      
      <br></br>
    </div>
  )
}

export default footer
