import React from 'react'
import "./home.css"
import Navbar from '../navbar/navbar';
import pcgif from '../Assets/programming-computer.gif';
import recaptcha from '../Assets/recaptcha.svg';
import Hires from '../Assets/Hiring_companies.webp';

export default function home() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='box1 w-full h-screen flex flex-col md:flex-row'>
                <div className='box11 w-full  md:w-2/5 h-fit md:h-screen flex flex-col'>
                    <span className='box11-item1 text-5xl md:text-4xl lg:text-6xl font-bold mt-10 text-center md:text-left md:ml-3 lg:ml-24'>Take your Career </span>
                    <span className='box11-item2 text-5xl md:text-4xl lg:text-6xl font-bold text-center md:text-left md:ml-3 lg:ml-24'>to the next level</span>
                    <span className='box11-item3 text-2xl lg:text-3xl font-semibold mt-12 text-gray-800 text-center lg:text-left lg:ml-24 md:w-9/12'>Build a rockstar tech career with us and earn ₹5-40 LPA</span>
                    <button className='box11-item4 bg-blue-600 text-white text-xl font-medium w-4/12 md:w-4/12 mt-8 p-2 rounded-full self-center md:self-start md:ml-3 lg:ml-24'>Start now</button>
                    <img className='box11-item5 h-3/6 w-8/12 ml-20' src={pcgif} alt='' />
                </div>

                <div className='box12  w-full md:w-3/5 h-fit md:h-screen flex flex-col'>
                    <div className='box12-item1  max-w-screen-sm mt-28 ml-28 md:ml-32 lg:ml-96 self-center rounded-lg drop-shadow-xl shadow-gray-500'>
                    <span className='text-2xl text-gray-600 font-semibold ml-12 items-stretch'>Book a FREE class today</span>
                    <form>
                        <label>
                            <br></br>
                            Full Name
                            <br></br>
                            <input className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{"height":"6vh"}} type="text" placeholder='Your Name' name="name" />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Email
                            <br></br>
                            <input className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{"height":"6vh"}} type="text" placeholder='Enter email' name="name" />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Phone Number
                            <br></br>
                            <input className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{"height":"6vh"}} type="text" placeholder='+91' name="Number" />
                        </label>
                        <br></br>
                        <br></br>
                        <span className='ml-4 text-xs text-gray-800'>By clicking Sign Up, you agree to our <a className='underline text-blue-600' href="/">Terms & Conditions</a></span>
                        <button className='w-8/12 h-11 bg-blue-400 text-white mt-3 rounded-md' type="submit">Send OTP</button>
                        <img className="w-20 mt-12 mr-52 float-right cursor-pointer" src={recaptcha} alt="google_recaptcha"/>
                    </form>
                    </div>
                </div>
            </div>
            <div className='box2 w-full h-screen flex flex-col '>
                <div className='box21 w-full h-1/2 text-center'>
                    <h1 className='text-xl font-semibold text-gray-800 mt-8 align-center'>A JOURNEY THAT IS TRUSTED</h1>
                    <div className='w-full mt-8 h-3/5 flex md:flex-row flex-col'>
                        <div className='self-center w-1/4'>
                        <span className='text-4xl font-extrabold text-blue-400'>2000+</span><br></br>
                        <span className='text-2xl font-medium text-gray-600'>Students<br></br>Placed</span>
                        </div> 

                        <div className='self-center w-1/4'>
                        <span className='text-4xl font-extrabold'>1000+</span><br></br>
                        <span className='text-2xl font-medium text-gray-600'>Industry<br></br>Experts</span>
                        </div>

                        <div className='self-center w-1/4'>
                        <span className='text-4xl font-extrabold'>1500+</span><br></br>
                        <span className='text-2xl font-medium text-gray-600'>Hiring<br></br>Partners</span>
                        </div>

                        <div className='self-center w-1/4'>
                        <span className='text-4xl font-extrabold'>90%</span><br></br>
                        <span className='text-2xl font-medium text-gray-600'>Placement<br></br>Rate</span>
                        </div>
                    </div>
                </div>
                <div className='box22 w-full h-1/2'>
                    <h1 className='text-xl font-semibold text-gray-800 mt-8 align-center text-center'>NEWTON SCHOOL STUDENTS WORK AT TOP COMPANIES</h1>
                    <img className="mt-12 w-4/5 ml-48" src={Hires} alt="Hiring Companies"/>
                </div>
            </div>
        </div>
    )
}