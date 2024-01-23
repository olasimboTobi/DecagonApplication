import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import user1 from   '../../Assets/DashboardImage/user1.svg'
import phone from   '../../Assets/DashboardImage/phone.svg'
import gender from   '../../Assets/DashboardImage/gender.svg'
import bloodgrp from   '../../Assets/DashboardImage/bloodgrp.svg'
import birth from   '../../Assets/DashboardImage/birth.svg'
import picz from   '../../Assets/DashboardImage/picz.svg'
import Info from './Info'
import useAuth from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import axios from '../../../api/axios';

const USER_URL = '/auth/me';

function ButtomBody() {
  const {auth} = useAuth()
  const {user, setUser} = useUser()
  console.log('oleg')

  useEffect(() => {

    let isMounted = true;

    const fetchData = async () => {
      console.log("test")
      try {
        const response = await axios.get(USER_URL, {
          headers: {
            'Authorization': `Bearer ${auth}`,
          },
        });
        console.log("string :", response);
        if (isMounted) {
          console.log(response.data);
          const data = response?.data;
          setUser(data);

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; 
    };
  }, []); 

  
  return (
    <div className='xsm:block xsm:w-[100%] md:flex md:w-[100%] md:justify-between md:items-start'>
        <div className='xsm:w-[100%] md:w-[74%] lg:w-[72%] xl:w-[69%]'>
            <div className='w-[100%] bg-white'>
                <div className='flex w-[95%] mx-auto justify-between items-center py-6 border-b-2 border-b-gray'>
                    <div className=''>
                        <h2 className='hidden md:block md:font-bold'>Application Details</h2>
                        <h2 className='xsm:font-bold md:hidden'>Your Application Details</h2>
                        <p className='font-extralight text-gray'>Personal Information</p>
                    </div>                
                    <div>
                        <button className='text-white bg-[#34A853] py-[0.5em] px-[1.4em] rounded-lg text-[1rem]'>Edit</button>
                    </div>                
                </div>
                <div className='hidden md:block md:w-[99%] md:mx-auto lg:w-[95%] lg:mx-auto'>
                    <div className='w-[100%] flex justify-between items-center flex-nowrap my-4'>
                        <div className='w-[95%] mx-auto flex justify-between items-center  my-6 px-2 md:w-[99.9%] md:mx-auto md:my-4 md:px-0 lg:w-[95%] lg:mx-auto lg:my-6 lg:px-2'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='px-2 md:px-0 lg:px-0 xl:px-2'>
                                    <img src={user1} alt='user'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>First Name</h2>
                                    <p className='font-light text-[#101828]'>{user.firstName}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-between items-center py-6 border-l-2 border-l-gray'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='px-2 md:px-0 lg:px-0 xl:px-2'>
                                    <img src={user1} alt='user'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>Last Name</h2>
                                    <p className='font-light text-[#101828]'>{user.lastName}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-between items-center py-6 border-l-2 border-l-gray'>
                            <div className='flex justify-between items-center gap-4 md:gap-0 lg:gap-4'>
                                <div className='px-2 md:px-0 lg:px-0 xl:px-2'>
                                    <img src={phone} alt='phone'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>Phone Number</h2>
                                    <p className='font-light text-[#101828]'>{user.phone}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='w-[100%] flex justify-between items-center flex-nowrap my-4'>
                        <div className='w-[95%] mx-auto flex justify-between items-center  my-6 px-2'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='px-2 md:px-0 lg:px-0 xl:px-2'>
                                    <img src={gender} alt='gender'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>Gender</h2>
                                    <p className='font-light text-[#101828]'>{user.gender}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-between items-center py-6 border-l-2 border-l-gray'>
                            <div className='flex justify-between items-center gap-4 md:gap-0 lg:gap-4'>
                                <div className='px-2 md:px-0 lg:px-0 xl:px-2'>
                                    <img src={bloodgrp} alt='bloodgrp'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>BloodGroup</h2>
                                    <p className='font-light text-[#101828]'>{user.bloodGroup}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-between items-center py-6 border-l-2 border-l-gray'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='px-2 md:px-0 lg:px-0 xl:px-2'>
                                    <img src={birth} alt='birth'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>Date of Birth</h2>
                                    <p className='font-light text-[#101828]'>{user.birthDate}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='xsm:w-[99%] xsm:mx-auto  md:hidden '>
                    <div className='w-[100%] flex justify-between items-center flex-nowrap my-2'>
                        <div className='w-[95%] mx-auto flex justify-between items-center px-2'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className=''>
                                    <img src={user1} alt='user'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>First Name</h2>
                                    <p className='font-light text-[#101828]'>{user.firstName}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-between items-center py-2'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className=''>
                                    <img src={user1} alt='user'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>Last Name</h2>
                                    <p className='font-light text-[#101828]'>{user.lastName}</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='w-[100%] flex justify-between items-center flex-nowrap my-2'>
                        
                        <div className='w-[95%] mx-auto flex justify-between items-center px-2'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className=''>
                                    <img src={gender} alt='gender'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>Gender</h2>
                                    <p className='font-light text-[#101828]'>{user.gender}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-between items-center py-2 '>
                            <div className='flex justify-between items-center gap-4 '>
                                <div className=''>
                                    <img src={bloodgrp} alt='bloodgrp'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>BloodGroup</h2>
                                    <p className='font-light text-[#101828]'>{user.bloodGroup}</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className='w-[100%] flex justify-between items-center flex-nowrap my-2'>
                        <div className='w-[95%] mx-auto flex justify-between items-center  px-2'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className=''>
                                    <img src={phone} alt='phone'/>
                                </div>
                                <div>
                                    <h2 className='font-bold text-[#101828]'>Phone Number</h2>
                                    <p className='font-light text-[#101828]'>{user.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-between items-center '>
                            <div className='w-[95%] mx-auto flex justify-between items-center py-2 '>
                                <div className='flex justify-between items-center gap-4'>
                                    <div className=''>
                                        <img src={birth} alt='birth'/>
                                    </div>
                                    <div>
                                        <h2 className='font-bold text-[#101828]'>Date of Birth</h2>
                                        <p className='font-light text-[#101828]'>{user.birthDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                </div>
            </div>
            <div className='xsm:w-[100%] xsm:bg-white xsm:my-12 md:w-[100%] md:bg-white md:my-6'>
                <Info/>
            </div>
        </div>
        
        <div className='xsm:w-[100%] md:w-[26%] md:self-center lg:w-[30%] lg:self-center xl:w-[28%] '>
            <div className="w-[100%] relative">
                <div className='w-[100%] ' >
                    <img className="w-[100%] object-fit " src={picz} alt="/" />
                </div>
                
                <div className='absolute w-[100%] bottom-8 left-1 text-[#FFFFFF] md:left-2 lg:left-2 xl:left-3'>
                    <div className='w-[100%]  mb-4 md:w-[100%] md:mx-auto  lg:w-[100%] lg:mx-auto xl:w-[99%] xl:mx-auto'>
                        <div className='text-[1.7rem] text-wrap  md:text-[0.5rem]  lg:text-[1.2rem] xl:text-[1.5rem]'>Invite your friends & Loved ones to Launch career in software engineering.</div> 
                    </div>
                    <button className='font-light text-[1.2rem] text-nowrap py-[1em] px-[3.5em] bg-[#34A853] rounded-lg md:text-[0.6rem] md:py-[0.6em] md:px-[0.7em] lg:text-[1rem] lg:py-[0.6em] lg:px-[1em] xl:text-[1.2rem] xl:py-[0.5em] xl:px-[2em]'>Click to invite</button>
                </div>
                
            </div> 
        </div>
    </div>
  )
}

export default ButtomBody;




    