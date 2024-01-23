import React from 'react'
import UserAcct from './UserAcct'
import ShadowCard from '../../ReusableShadowCard/ShadowCard'
import { Routes, Route} from "react-router-dom";
import MyCurriculumPage from './MyCurriculumPage';

const Curriculum = () => {
  return (
    
  <>
    <div className="xsm:block xsm:w-full  md:flex md:w-full md:justify-between md:items-start ">
      <div className="hidden md:block md:w-[35%] lg:w-[30%] xl:w-[35%]  h-[100%]">
        <UserAcct />
      </div> 
      <ShadowCard width="" minHeight="" classN="xsm:w-[100%] xsm:min-h-[700px]  md:w-[68%]  lg:w-[69%] xl:w-[100%]">
        <div className="bg-[#F7F7F7] w-[100%] h-[100vh]">
          <MyCurriculumPage/>
        </div>
      </ShadowCard>
    
    </div> 

    <Routes>
      <Route path="/" element={(
        <div className="w-[100%] md:hidden">
           <UserAcct />
        </div>
      )}/>
      
      <Route path="myaccount" element={(
        <ShadowCard width="" minHeight="" classN="w-[100%] min-h-[820px] md:hidden ">
            <div className="">
              <MyCurriculumPage/>
            </div>
        </ShadowCard>
        )}/>
    </Routes> 
  </>
  )
}

export default Curriculum;