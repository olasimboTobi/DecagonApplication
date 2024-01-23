import React from 'react'
import { NavLink, useLocation, Link } from "react-router-dom";
import ShadowCard from '../../ReusableShadowCard/ShadowCard';
import decagonLogo from   '../../Assets/LoginImages/decagonImg.svg'
import avatarActive from "../../Assets/DashboardImage/avatarActive.svg"
import resource from "../../Assets/DashboardImage/resource.svg"
import schedule from "../../Assets/DashboardImage/schedule.svg"
import admission from "../../Assets/DashboardImage/admission.svg"
import curriculum from "../../Assets/DashboardImage/preCuri.svg"
import logout from "../../Assets/DashboardImage/logout.svg"
import useAuth from '../../../hooks/useAuth';
import {BsChevronDown} from "react-icons/bs"



const UserAcct = () => {

  const { setAuth } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <>
        <div className="w-[100%] min-h-fit ">
            <ShadowCard width="w-[100%]" minHeight="min-height-[544px]" classN="whitespace-nowrap sm:whitespace-nowrap md:whitespace-nowrap">
            <div className="overflow-y-scroll  bottom-0 ">
                <div className='flex justify-center shadow-b-md border-b-2 pt-6 pb-4 w-[100%]'>
                    <img src={decagonLogo} className='w-[50%] pt-4' alt='decagonLogo'/>
                </div>
                <div className='border-b-2 pb-4'>
                <div className='w-[80%] mx-auto my-6 '>
                  <div className='font-normal text-[#98A2B3] text-[1rem] letter-spacing: -0.009rem mb-6'>Dashboard</div>
                  <nav>
                    <ul className="flex flex-col gap-2 pt-4 w-full leading-relaxed tracking-wide text-lg">
                      <li>
                        {" "}
                        <NavLink
                          to="/myaccount"
                          className={({ isActive }) =>
                            isActive
                              ? "group fill-current flex gap-2 px-6 py-2 bg-[#F2F4F7] border-l-2 rounded-md border-[#F2F4F7] font-semibold text-[#34A853]"
                              : "group flex gap-2  items-center  transition ease-out duration-500 px-6 py-2 font-normal text-[1rem] text-[#667085]"
                          }
                        >
                        <div className="flex w-full gap-2 justify-start items-center">
                          <img
                            src={
                              location.pathname === "/myaccount"
                                ? avatarActive
                                : avatarActive
                            }
                            alt="account"
                          />
                          <div className="flex w-[98%] justify-between items-center">
                          
                            My Account
                            
                            <BsChevronDown className=""/>
            
                          </div>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        {" "}
                        <NavLink
                          to="/resources"
                          className={({ isActive }) =>
                            isActive
                              ? "group fill-current flex gap-2 px-6 py-2 bg-[#F2F4F7] border-l-2 rounded-md border-[#F2F4F7] font-semibold text-[#34A853]"
                              : "group flex gap-2  items-center  transition ease-out duration-500 px-6 py-2 font-normal text-[1rem] text-[#667085]"
                          }
                        >
                        <div className="flex w-full gap-2 justify-start items-center">
                          <img
                            src={
                              location.pathname === "/resources"
                                ? resource
                                : resource
                            }
                            alt="account"
                          />
                          <div className="flex w-[98%] justify-between items-center">
                          
                            Resources
                          
                          </div>
                          </div>
                        </NavLink>
                      </li>


                      <li>
                        {" "}
                        <NavLink
                          to="/schedule"
                          className={({ isActive }) =>
                            isActive
                              ? "group fill-current flex gap-2 px-6 py-2 bg-[#F2F4F7] border-l-2 rounded-md border-[#F2F4F7] font-semibold text-[#34A853]"
                              : "group flex gap-2  items-center  transition ease-out duration-500 px-6 py-2 font-normal text-[1rem] text-[#667085]"
                          }
                        >
                        <div className="flex w-full gap-2 justify-start items-center">
                          <img
                            src={
                              location.pathname === "/schedule"
                                ? schedule
                                : schedule
                            }
                            alt="schedule"
                          />
                          <div className="flex w-[98%] justify-between items-center">
                          
                            Schedule Assessment
                            
                          </div>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        {" "}
                        <NavLink
                          to="/admission"
                          className={({ isActive }) =>
                            isActive
                              ? "group fill-current flex gap-2 px-6 py-2 bg-[#F2F4F7] border-l-2 rounded-md border-[#F2F4F7] font-semibold text-[#34A853]"
                              : "group flex gap-2  items-center  transition ease-out duration-500 px-6 py-2 font-normal text-[1rem] text-[#667085]"
                          }
                        >
                        <div className="flex w-full gap-2 justify-start items-center">
                          <img
                            src={
                              location.pathname === "/admission"
                                ? admission
                                : admission
                            }
                            alt="admin"
                          />
                          <div className="flex w-[98%] justify-between items-center">
                          
                            Admission Clearence
                            
                          </div>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        {" "}
                        <NavLink
                          to="/curriculum"
                          className={({ isActive }) =>
                            isActive
                              ? "group fill-current flex gap-2 px-6 py-2 bg-[#F2F4F7] border-l-2 rounded-md border-[#F2F4F7] font-semibold text-[#34A853] md:gap-1 md:px-3.5 md:py-2 lg:gap-2 lg:px-6 lg:py-2"
                              : "group flex gap-2  items-center  transition ease-out duration-500 px-6 py-2 font-normal text-[1rem] text-[#667085]"
                          }
                        >
                        <div className="flex w-full gap-2 justify-start items-center">
                          <img
                            src={
                              location.pathname === "/curriculum"
                                ? curriculum
                                : curriculum
                            }
                            alt="curriculum"
                          />
                          <div className="flex w-[98%] justify-between items-center">
                          
                            Pre-curriculum
                            
                          </div>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div>
                <nav>
                <ul className="flex flex-col gap-2 pt-4 w-full leading-relaxed tracking-wide text-lg">
                      <li>
                        {" "}
                        <NavLink
                          to="/other"
                          className={({ isActive }) =>
                            isActive
                              ? "group fill-current flex gap-2 px-6 py-2 bg-[#F2F4F7] border-l-2 rounded-md border-[#F2F4F7] font-semibold text-[#34A853]"
                              : "group flex gap-2  items-center  transition ease-out duration-500 px-6 py-2 font-normal text-[1rem] text-[#667085]"
                          }
                        >
                        <div className="flex w-full gap-2 justify-start items-center">
                         
                          <div className="flex w-[98%] justify-between items-center">
                          
                            Others
                            
                          </div>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        {" "}
                        <NavLink
                          to="/"
                          onClick={handleLogout} 
                          className={({ isActive }) =>
                            isActive
                              ? "group fill-current flex gap-2 px-6 py-2 bg-[#F2F4F7] border-l-2 rounded-md border-[#F2F4F7] font-semibold text-[#34A853]"
                              : "group flex gap-2  items-center  transition ease-out duration-500 px-6 py-2 font-normal text-[1rem] text-[#667085]"
                          }
                        >
                        <div className="flex w-full gap-2 justify-start items-center">
                          <img
                            src={
                              location.pathname === "/resources"
                                ? logout
                                : logout
                            }
                            alt="account"
                          />
                          <div className="flex w-[98%] justify-between items-center">
                          
                            Logout
                           
                          </div>
                          </div>
                        </NavLink>
                      </li>
                  </ul>
                </nav>
              </div>
            </div>
            </ShadowCard>
        </div>
    
    </>
  )
}

export default UserAcct;