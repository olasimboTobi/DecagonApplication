import React from 'react'
import decagonLogo from   '../../Assets/LoginImages/decagonImg.svg'
import microsoftLogo from   '../../Assets/LoginImages/microsoftLogo.svg'
import indeedLogo from   '../../Assets/LoginImages/indeedLogo.svg'
import flutterwaveLogo from   '../../Assets/LoginImages/flutterwaveLogo.svg'
import carbonLogo from   '../../Assets/LoginImages/carbonLogo.svg'
import interswitchLogo from   '../../Assets/LoginImages/interswitch.svg'
import LoginForm from './LoginForm';


const LoginPageLeftSide = () => {
  return (
    <div className='xsm:w-[100%] xsm:h-[20%] xsm:mt-0 xsm:bg-[#FFFFFF]  md:w-[95%] md:mx-auto md:h-[40%] md:mt-40 lg:w-[85%] lg:mx-auto lg:h-[40%] lg:mt-80 xl:w-[80%] xl:mx-auto xl:h-[40%] xl:mt-12'>
        <div className='w-[100%] bg-[#FFFFFF]'>
            <div className='xsm:flex xsm:justify-center xsm:bg-[#F9FAFB] xsm:pt-4 xsm:pb-8 md:flex md:justify-center md:bg-[#FFFFFF] md:pt-0 md:pb-0 lg:flex lg:justify-center lg:bg-[#FFFFFF] lg:pt-0 lg:pb-0 xl:flex xl:justify-center xl:bg-[#FFFFFF] xl:pt-0 xl:pb-0'>
                <img src={decagonLogo} className='xsm:w-[30%] md:w-[50%] lg:w-[40%] xl:w-[20%]' alt='decagonLogo'/>
            </div>
            <div className='flex flex-col items-center justify-between mt-6 w-[100%]'>
                <div className='flex flex-col items-center justify-between w-[100%] bg-[#FFFFFF] mb-4'> 
                    <div className='flex flex-col items-center justify-start w-[95%] mx-auto'>
                        <h2 className='xsm:font-bold xsm:text-[1.2rem] letter-spacing-[0.016rem] text-wrap text-center xsm:w-[85%] xsm:mx-auto bg-white  text-[#101828] leading-7 letter-spacing-[0.016rem] md:text-[1.5rem] md:w-[95%] md:mx-auto lg:text-[1.5rem] lg:w-[90%] lg:mx-auto xl:text-[1.5rem] xl:w-[60%] xl:mx-auto'>Transform into a world-class<span className='text-[#34A853]'> Software Engineer </span> in 6 months</h2>
                        <p className='xsm:font-normal text-[0.8rem] text-[#5C6881] leading-tight text-wrap text-center xsm:w-[98%] xsm:mx-auto my-2 md:text-[1.2rem] md:w-[100%] md:mx-auto lg:text-[1.2rem] lg:w-[100%] lg:mx-auto xl:text-[0.875rem] xl:w-[60%] xl:mx-auto'>Join our 6-month software engineering program for expertise, mentorship, internships, and job placement support. Elevate your career now! 🚀</p>
                    </div>
                    <div className='xsm:w-[85%] mx-auto mb-4 md:w-[75%] md:mx-auto md:mb-4 lg:w-[75%] lg:mx-auto lg:mb-4 xl:w-[55%] xl:mx-auto xl:mb-4'>
                        <div className='w-[100%]'>
                            <p className='font-bold xsm:w-[80%] xsm:mx-auto leading-tight text-wrap text-center text-[0.875rem] text-[#101828] md:w-[100%] md:mx-auto md:text-[1.2rem] lg:w-[80%] lg:mx-auto lg:text-[1.2rem] 2xl:w-[0%] 2xl:mx-auto '>Where some of our alumni works</p>
                        </div>
                        <div className='w-[100%] flex justify-between items-center mt-2'>
                            <div>
                                <img src={microsoftLogo} alt='microsoftLogo'/>
                            </div>
                            <div>
                                <img src={indeedLogo} alt='indeedLogo'/>  
                            </div>
                            <div>
                                <img src={flutterwaveLogo} alt='flutterwaveLogo'/>
                            </div>
                            <div>
                                <img src={carbonLogo} alt='carbonLogo'/>
                            </div>
                            <div>
                                <img src={interswitchLogo} alt='interswitchLogo'/>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block md:w-[100%] md:mx-auto  lg:w-[99%] lg:mx-auto xl:w-[64%] xl:mx-auto'>
                        <div className='xsm:w-[60%] xsm:mx-auto flex justify-between items-center md:w-[70%] md:mx-auto  lg:w-[60%] lg:mx-auto'>
                            <button className='px-[0.5em] py-[0.45em] gap-2.5 text-[#34A853] text-nowrap font-semibold rounded-md border-[0.063rem] md:px-[0.9em] md:py-[0.85em] md:gap-2.5 lg:px-[0.8em] lg:py-[0.75em] lg:gap-2.5  xl:px-[0.5em] xl:py-[0.45em] xl:gap-2.5'>Learn More</button>
                            <div>
                                <p className='text-wrap xsm:text-[0.875rem] xsm:p-1 md:text-[0.875rem] md:p-1 lg:text-[0.875rem] lg:p-1 xl:text-[0.875rem] xl:p-1'>Download our Training Brochure</p>
                            </div>
                        </div>
                    </div>
                    <div className='xsm:block md:hidden'> 
                        <button className=' border-gray-200 px-24 py-2 border-[1px] text-nowrap shadow-lg outline-0 rounded-md  text-[#34A853]'>Learn More</button>
                        <div className='w-[75%] mx-auto my-2'>
                            <p className='text-wrap text-[0.875rem] p-0 '>Download our Training Brochure</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F5F5] w-full p-4'> </div>
                <div className='w-[100%]  bg-[#FFFFFF]'>
                    <LoginForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPageLeftSide
