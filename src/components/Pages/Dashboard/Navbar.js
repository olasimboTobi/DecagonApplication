import React from 'react'
import decagonImg from   '../../Assets/LoginImages/decagonImg.svg'
import ham from   '../../Assets/DashboardImage/hamburger.svg'

function Navbar() {
  return (
    <div className='xsm:w-[100%] xsm:mx-auto xsm:bg-[#FFFFFF] md:hidden '>
      <div className="flex justify-between w-[95%] mx-auto  py-6  md:hidden">
        <div className='xsm:w-[50%] md:hidden ' >
            <img className="w-[100%]  object-fit " src={decagonImg} alt="/" />
        </div>  
        <div className='xsm:w-[10%] md:hidden cursor-pointer' >
            <img className="w-[100%]  object-fit " src={ham} alt="/" />
        </div>  
      </div>
    </div>
  )
}

export default Navbar




















// import React,{useState} from 'react';
// import { useNavigate } from "react-router-dom";
// import decagonLogo from   '../../Assets/LoginImages/decagonImg.svg'
// import { Link } from "react-scroll";

// const Navbar = () => {
//   let navigate = useNavigate();

//   const routeChange = () => {
//     navigate("/aboutus");
//   };
//   const pathChange = () => {
//     navigate("/products");
//   };
//   const homeRoute = () => {
//     navigate("/");
//   };

//   const [navbarOpen, setNavbarOpen] = useState(false);


//   return (
//     <>
//       <section className="w-full relative shadow-lg flex flex-wrap items-center  justify-between px-2 py-3 bg-white mb-3 ">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between">
//             <div className="py-4 ">
//               <img
//                 src={decagonLogo }
//                 alt="logo"
//                 className="w-[50%] cursor-pointer"
//               ></img>
//             </div>

          
//           </div>
          
//         </div>
//       </section>
//     </>
//   )
// }

// export default Navbar