import React,{useState} from 'react'
import navDashboard from   '../../Assets/DashboardImage/navDashboard.svg'
import navDashboard2 from   '../../Assets/DashboardImage/navDashboard2.svg'
import ButtomBody from './ButtomBody';

function BodyAcct() {
    const [isAccepted, setIsAccepted] = useState(true);
    console.log("BodyAcct")

    const handleAccept = () => {
        setIsAccepted(true);
      };

    const handleDecline = () => {
    setIsAccepted(false);
    };

    return (
        <div className='xsm:w-[95%] xsm:mx-auto xsm:bg-[#F7F7F7]  md:w-[99%] md:mx-auto md:bg-[#F7F7F7]  lg:w-[99%] lg:mx-auto lg:bg-[#F7F7F7]  xl:w-[95%] xl:mx-auto xl:bg-[#F7F7F7]'>
            <div className="xsm:w-[100%]  xsm:py-4  md:w-[100%]  md:py-6  lg:w-[100%]  lg:py-6 xl:w-[100%]  xl:py-6 ">
                <div className='hidden md:block md:w-[100%]' >
                    <img className="w-[100%]  object-fit cursor-pointer" src={navDashboard} alt="/" />
                </div>

                <div className='xsm:w-[100%] md:hidden ' >
                    <img className="w-[100%]  object-fit " src={navDashboard2} alt="/" />
                </div>  
            </div>

            <div className='hidden md:block md:w-[100%]'>
                <div className="w-[100%] bg-[#5C6881] rounded-t-lg  py-[1.1%] px-[1%]">
                    <div className='text-[#FFFFFF] text-nowrap text-[1.1rem]'>Your application</div>
                </div>
                <div className='w-[100%]  bg-white  p-4 border-1'>
                    <div className='flex justify-start items-start w-[99.5%] mx-auto h-[18vh]  bg-white border-1 md:w-[99.9%] md:mx-auto md:h-[20vh] lg:w-[99.5%] lg:mx-auto lg:h-[12vh] xl:h-[18vh]'>
                    <div className='font-light w-[25%] h-[100%] text-[#101828] text-[1.2rem] border-r-2 border-gray-400 md:w-[30%] lg:w-[25%] '>Application Status:</div>
                    <div className='w-[100%]'>
                            <div className='w-[92%] mx-auto bg-white '>
                                <h1 className='font-bold text-[#101828] text-[1.2rem]'>You've been offered Admission. </h1>
                                <p className='font-light my-2'>We are delighted to inform you that you have been accepted into the Decagon elite software engineering training program. Please accept or decline your offer using the buttons below.</p>
                                <div className='gap-2'>
                                    <button className={isAccepted ? 'py-[0.5em] px-[1.5em] bg-[#34A853] rounded-lg text-white' : 'py-[0.5em] px-[1.5em] bg-[#F9FAFB] rounded-lg text-[#101828]'} onClick={handleAccept }>Accept</button>
                                    <button className={!isAccepted ? 'py-[0.5em] px-[1.5em] bg-[#34A853] rounded-lg text-white' : 'py-[0.5em] px-[1.5em] bg-[#F9FAFB] rounded-lg text-[#101828]'} onClick={handleDecline }>Decline</button>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:block md:w-[100%]'>
                <p className='font-semibold w-[26.2%] text-[1rem] mt-2 mb-4 text-[#34A853] text-nowrap border-b-2 border-b-[#34A853] md:w-[53%] lg:w-[38.2%] xl:w-[26.2%]'>View / update offer and acceptance</p>
            </div>

            <div className='w-[100%]'>
                <ButtomBody/>
            </div>

        </div>
    )
    }

export default BodyAcct