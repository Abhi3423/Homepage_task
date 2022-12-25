import React from 'react'
import "./home.css"
import Navbar from '../navbar/navbar';
import pcgif from '../Assets/programming-computer.gif';
import recaptcha from '../Assets/recaptcha.svg';
import Hires from '../Assets/Hiring_companies.webp';
import Placement from '../Assets/Placement Handbook.webp';

export default function home() {
    return (
        <div>

            <Navbar></Navbar>

            <div className='box1 w-full flex flex-col md:flex-row'>
                <div className='box11 w-full  md:w-2/5 h-fit  flex flex-col'>
                    <span className='box11-item1 text-5xl md:text-4xl lg:text-6xl font-bold mt-10 text-center md:text-left md:ml-3 lg:ml-24'>Take your Career </span>
                    <span className='box11-item2 text-5xl md:text-4xl lg:text-6xl font-bold text-center md:text-left md:ml-3 lg:ml-24'>to the next level</span>
                    <span className='box11-item3 text-2xl lg:text-3xl font-semibold mt-12 text-gray-800 text-center lg:text-left lg:ml-24 md:w-9/12'>Build a rockstar tech career with us and earn ₹5-40 LPA</span>
                    <button className='box11-item4 bg-blue-600 text-white text-xl font-medium w-4/12 md:w-4/12 mt-8 p-2 rounded-full self-center md:self-start md:ml-3 lg:ml-24'>Start now</button>
                    <img className='box11-item5 h-3/6 w-8/12 ml-20' src={pcgif} alt='' />
                </div>

                <div className='box12  w-full md:w-3/5 h-fit flex flex-col'>
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
                            <input className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{"height":"6vh"}} type="email" placeholder='Enter email' name="name" />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Phone Number
                            <br></br>
                            <input className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{"height":"6vh"}} type="number" placeholder='+91' name="Number" />
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

            <div className='box2 w-full flex flex-col '>
                <div className='box21 w-full h-fit text-center mt-6 items-center'>
                    <h1 className='text-xl font-semibold text-gray-800 mt-8 align-center'>A JOURNEY THAT IS TRUSTED</h1>
                    <div className='w-full mt-8 h-3/5 grid grid-cols-2 md:grid-cols-4 gap-12 p-2.5'>
                        <div className='flex flex-col justify-self-center'>
                        <span className='self-center text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-300 inline-block text-transparent bg-clip-text'>2000+</span>
                        <span className='text-2xl font-medium text-gray-600'>Students<br></br>Placed</span>
                        </div> 

                        <div className='flex flex-col justify-self-center'>
                        <span className='text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-300 inline-block text-transparent bg-clip-text'>1000+</span>
                        <span className='text-2xl font-medium text-gray-600'>Industry<br></br>Experts</span>
                        </div>

                        <div className='flex flex-col justify-self-center'>
                        <span className='text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-300 inline-block text-transparent bg-clip-text'>1500+</span>
                        <span className='text-2xl font-medium text-gray-600'>Hiring<br></br>Partners</span>
                        </div>

                        <div className='flex flex-col justify-self-center'>
                        <span className='text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-300 inline-block text-transparent bg-clip-text'>90%</span>
                        <span className='text-2xl font-medium text-gray-600'>Placement<br></br>Rate</span>
                        </div>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div className='box22 w-full h-1/2 flex flex-col items-center'>
                    <h1 className='text-md md:text-xl font-semibold text-gray-800 mt-8 '>NEWTON SCHOOL STUDENTS WORK AT TOP COMPANIES</h1>
                    <img className="mt-12 w-4/5" src={Hires} alt="Hiring Companies"/>
                </div>
            </div>
        
            <div className='box3 w-full flex flex-col md:flex-row mt-16'>
            <div className='box31  w-full md:w-5/12 h-fit flex flex-col'>
                    <div className='box31-item1  w-7/12 md:w-9/12 mt-28 ml-28 md:ml-32 lg:ml-48'>
                    <span className='text-4xl text-gray-600 font-bold w-80'>Download our placement handbook</span>
                    <form>
                        <label>
                            <br></br>
                            Full Name
                            <br></br>
                            <input className='border-2 bg-gray-200 border-solid w-full mt-2 indent-2 rounded-full' style={{"height":"6vh"}} type="text" name="name" />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Email Address
                            <br></br>
                            <input className='border-2 bg-gray-200 border-solid w-full mt-2 indent-2 rounded-full' style={{"height":"6vh"}} type="email" name="email" />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Phone
                            <br></br>
                            <input className='border-2 bg-gray-200 border-solid w-full mt-2 indent-2 rounded-full' style={{"height":"6vh"}} type="number" name="Number" />
                        </label>
                        <br></br>
                        <br></br>
                        <button className='w-4/12 h-11 bg-blue-600 md:text-sm lg:text-lg text-white font-bold mt-3 rounded-full' type="submit">Download</button>
                    </form>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full md:w-7/12'>
                    <img className=' w-4/5 md:w-64 lg:w-96' src={Placement} alt="Placement Handbook"/>
                </div>
            </div>

            <div className='box4 mt-16 w-full flex flex-col'>
                <h1 className='self-center text-xl font-semibold'>EXPLORE OUR OFFERINGS</h1>
                <h2 className='self-center text-4xl font-bold text-gray-700 mt-8'>Unlimited learning</h2>
                <h3 className='self-center text-4xl font-bold text-gray-700'>Assured outcomes</h3>
                <div className='w-full mt-8 h-3/5 grid grid-cols-1 lg:grid-cols-4 gap-12 p-2.5'>

                        <div className='flex flex-col justify-self-center w-4/5 lg:ml-52 xl:ml-72'>
                           
                                <div className='bg-blue-700 text-center rounded-t-lg'>
                                    <br></br>
                                    <span className='text-white font-semibold'>Certificate Course</span><br></br><br></br>
                                    <span className='text-white text-xl font-bold'>Full Stack<br></br>Development</span><br></br><br></br>
                                    <button className='w-6/12 h-1/5 bg-white md:text-sm lg:text-md text-black font-semibold mt-3 rounded-full' href="/">Apply Now</button>
                                    <br></br>
                                    <br></br><br></br>
                                </div>
                                <div className='bg-black rounded-b-lg text-center'>
                                    <br></br>
                                    <br></br>
                                    <span className='text-gray-500'> &#x2714; Live online classes<br></br> &#x2714; Flexible duration<br></br> &#x2714; EMI from ₹5,800*<br></br> &#x2714; Salary 8-50 LPA <br></br> &#x2714; 800+ hiring partners <br></br> &#x2714; Fully live classes </span><br></br><br></br><br></br>
                                </div>

                        </div> 

                        <div className='flex flex-col justify-self-center w-4/5 lg:ml-12 xl:ml-24'>
                           
                                <div className='bg-blue-700 text-center rounded-t-lg'>
                                    <br></br>
                                    <span className='text-white font-semibold'>MIA University, Spain</span><br></br><br></br>
                                    <span className='text-white text-xl font-bold'>Master's in Computer<br></br>Science</span><br></br><br></br>
                                    <button className='w-6/12 h-1/5 bg-white md:text-sm lg:text-md text-black font-semibold mt-3 rounded-full' href="/">Apply Now</button>
                                    <br></br>
                                    <br></br><br></br>
                                </div>
                                <div className='bg-black rounded-b-lg text-center'>
                                    <br></br>
                                    <br></br>
                                    <span className='text-gray-500'> &#x2714; Live online classes<br></br> &#x2714; Dual alumni status<br></br> &#x2714; EMI from ₹6,800*<br></br> &#x2714; 60 ECTS credits <br></br> &#x2714; 800+ hiring partners <br></br> &#x2714; Lifetime placement <br></br>assistance </span><br></br><br></br>
                                </div>
                                  
                        </div> 

                        <div className='flex flex-col justify-self-center w-4/5 lg:mr-28 xl:mr-24'>
                           
                                <div className='bg-blue-700 text-center rounded-t-lg'>
                                    <br></br>
                                    <span className='text-white font-semibold'>Certificate Course</span><br></br><br></br>
                                    <span className='text-white text-xl font-bold'>Certificate Course in<br></br>Data Science</span><br></br><br></br>
                                    <button className='w-6/12 h-1/5 bg-white md:text-sm lg:text-md text-black font-semibold mt-3 rounded-full' href="/">Apply Now</button>
                                    <br></br>
                                    <br></br><br></br>
                                </div>
                                <div className='bg-black rounded-b-lg text-center'>
                                    <br></br>
                                    <br></br>
                                    <span className='text-gray-500'> &#x2714; Live online classes<br></br> &#x2714; Professional certificate<br></br> &#x2714; EMI from ₹5,500*<br></br> &#x2714; Interview preparation <br></br> &#x2714; 800+ hiring partners <br></br> &#x2714; Lifetime placement <br></br> assistance </span><br></br><br></br>
                                </div>
                                  
                        </div> 


                        <div className='flex flex-col justify-self-center w-4/5 lg:mr-60 xl:mr-72'>
                           
                                <div className='bg-blue-700 text-center rounded-t-lg'>
                                    <br></br>
                                    <span className='text-white font-semibold'>Pay After Placement</span><br></br><br></br>
                                    <span className='text-white text-xl font-bold'>Full Stack<br></br>Development</span><br></br><br></br>
                                    <button className='w-6/12 h-1/5 bg-white md:text-sm lg:text-md text-black font-semibold mt-3 rounded-full' href="/">Apply Now</button>
                                    <br></br>
                                    <br></br><br></br>
                                </div>
                                <div className='bg-black rounded-b-lg text-center'>
                                    <br></br>
                                    <br></br>
                                    <span className='text-gray-500'> &#x2714; Live online classes<br></br> &#x2714; Fully live classes<br></br> &#x2714; Pay after placement<br></br> &#x2714; Salary 5-40 LPA <br></br> &#x2714; 800+ hiring partners <br></br> &#x2714; Soft skills training </span><br></br><br></br><br></br>
                                </div>
                                  
                        </div> 


                </div>
            </div>

            <div className='box5 w-full flex flex-col bg-black'>
              <h1 className='self-center font-bold text-xl text-gray-200 mt-8'>WELCOME TO THE OUTCOME POWERHOUSE</h1>
              <h2 className='self-center font-bold text-2xl md:text-5xl text-gray-200 mt-4'>Your recipe for a rockstar career</h2>
              <div className='self-center w-8/12 grid grid-cols-2 gap-16 mt-12'>
                <div className='flex flex-col'>
                    <img className='w-12 md:w-16 lg:w-20' src='https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62fcb40be43d3b0b49038ff3_perspective_matte%209.webp' alt=''/>
                    <span className='font-semibold text-gray-200 text-sm md:text-base lg:text-lg mt-4'>Personal guidance</span>
                    <span className='text-base text-gray-300 mt-4'>Get groomed by experienced software developers who are working in the top companies.</span>
                    <br></br>
                    <hr></hr>
                </div>

                <div className='flex flex-col'>
                    <img className='w-12 md:w-16 lg:w-20' src='https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62fcb40be43d3b0b49038ff3_perspective_matte%209.webp' alt=''/>
                    <span className='font-semibold text-gray-200 text-sm md:text-base lg:text-lg mt-4'>Dedicated placement team</span>
                    <span className='text-base text-gray-300 mt-4'>A team of warriors ensure your profile reaches top companies.</span>
                    <br></br><br></br>
                    <hr></hr>
                </div>

                <div className='flex flex-col'>
                    <img className='w-12 md:w-16 lg:w-20' src='https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62fcb40be43d3b0b49038ff3_perspective_matte%209.webp' alt=''/>
                    <span className='font-semibold text-gray-200 text-sm md:text-base lg:text-lg mt-4'>Unlimited Interview Practice</span>
                    <span className='text-base text-gray-300 mt-4'>Gain confidence with unlimited mock interviews before the real interview.</span>
                    <br></br>
                </div>

                <div className='flex flex-col'>
                    <img className='w-12 md:w-16 lg:w-20' src='https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62fcb40be43d3b0b49038ff3_perspective_matte%209.webp' alt=''/>
                    <span className='font-semibold text-gray-200 text-sm md:text-base lg:text-lg mt-4'>Lifelong support</span>
                    <span className='text-base text-gray-300 mt-4'>Newton School does not end with the course. Your journey with us goes beyond any course.</span>
                    <br></br>
                </div>

              </div>
              <br></br>
            </div>
            
            <div className='box6 w-full flex flex-col mt-12 bg-yellow-200' style={{"height":"150vh"}}>
              <h1 className='self-center font-semibold text-black text-xl'>THE NEWTON FAMILY</h1>
              <h2 className='self-center font-bold text-gray-700 text-2xl md:text-4xl mt-4'>Be a part of the new-age tech generation</h2>
              <div className='self-center grid grid-cols-3 gap-1'>
                <div className='box1 flex flex-col'>
                    <div className='flex flex-row'></div>
                    <p>Hello Connections!<br></br>I am thrilled to announce that I've started my professional journey with Mobileum as Associate Software Engineer.<br></br>I would like to thank my family and friends for their constant support and also the entire team of Newton School for providing this amazing opportunity to kickstart my career.<br></br>Looking forward to a great learning experience!</p>
                </div>
              </div>
            </div>
            
            <div className='box7 w-full flex flex-col mt-8'>
               <h1 className='self-center font-semibold'>MAKING A BUZZ, FOR THE RIGHT REASONS</h1>
               <h2 className='self-center font-bold text-gray-700 text-3xl mt-4'>In the news</h2>
            </div>
        </div>
    )
}
