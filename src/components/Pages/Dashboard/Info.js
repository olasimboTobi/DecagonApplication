import React,{useEffect, useState} from 'react'
import home from   '../../Assets/DashboardImage/home.svg'
import useUser from '../../../hooks/useUser';

function Info() {
  const [address, setAddress] = useState({})
  const {user} = useUser()
//   console.log(user?.address)

//   useEffect(()=> {
//     setAddress(user?.address)
//   },[])
//   console.log(address)
  return (
    <div className='w-[95%] mx-auto  '>
        <div className='w-[100%] py-4 border-b-2 border-b-gray'>
            <h2 className='font-bold'>Address Information</h2>
            <p className='font-extralight text-gray w-[80%] mt-2'>Please take a moment to review your address information and make any necessary updates.</p>
        </div>                
        <div className='flex justify-start items-center gap-4 py-4'>
            <div className='px-2'>
                <img src={home} alt='home'/>
            </div>
            <div>
                <h2 className='font-bold text-[#101828]'>Home Address</h2>
                <p className='font-light text-[#101828]'>{user?.address?.address}, {user?.address?.city}</p>
            </div>
        </div>           
    </div>
  )
}

export default Info