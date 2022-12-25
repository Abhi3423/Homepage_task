import React, { useState } from 'react';
import cross from '../Assets/cross.png';
import down from '../Assets/down.png';

export default function Navbar({showNav, setShowNav}) {
      
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    <>
    {showNav && <div className="w-full bg-black text-white py-10">    
        <div className='navbar sticky top-0 p-5 flex flex-row gap-8 items-center bg-black -mt-28'>
          <a className='text-white font-medium lg:ml-64 md:ml-80 ml-8' href="/">
          <img className="w-52" src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62e8d2ea218fb73fa66895dd_88x37.webp" alt=""/>
          </a>
          <button className="rounded-lg text-white ml-32 md:ml-0" onClick={() => setShowNav(false)}><img className='hover:bg-white' src={cross} alt="" /></button>
        </div>  
        <div className='w-full flex flex-col gap-4 items-center'>
          <div className='flex flex-row'>
          <a className='text-gray-400 hover:text-white' href="/">Courses <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='w-8 ml-4' src={down} alt=''/></a>
          </div>
          {isHovering && (
          <div className='flex flex-col gap-4 justify-center'>
            <a className='text-gray-400 hover:text-white self-center' href="/">Certificate Course in Data Science</a>
            <a className='text-gray-400 hover:text-white self-center' href="/">Full-Stack Development - Certificate Course</a>
            <a className='text-gray-400 hover:text-white self-center' href="/">Master's in Computer Science - MIA University</a>
            <a className='text-gray-400 hover:text-white self-center' href="/">Master's in Data Science - IU University</a>
            <a className='text-gray-400 hover:text-white self-center' href="/">Full-Stack Development - Pay After Placement</a>
          </div>
          )}
          <a className='text-gray-400 hover:text-white' href="/">Hire from Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Blog</a>
          <a className='text-gray-400 hover:text-white' href="/">Coding Contest</a>
          <a className='text-gray-400 hover:text-white' href="/">About Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Contact</a>
          <button className='bg-blue-600 text-white w-20 p-2 rounded-full'>Login</button>
          </div>
    </div>
    }
    </>
  )
}
