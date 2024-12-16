import React from 'react'
import './Ready.css'
import { GoArrowRight } from "react-icons/go";


const Ready = () => {
  return (
    <>
    <div className="container">
        <div className="main_section flex gap-[90px] justify-center items-center py-[150px]">
            <div className="Main_imge">
                <img src="img/m.png" alt="img" />
            </div>
           
            <div className="main_text mt-[97px]">
                    <div className="main">
                        <h1>Ready to make your <i><u>moment</u></i> <i><u>memorable?</u></i></h1>
                    </div>
                    <div className="button&text flex gap-[115px]">
                        <div className='flex mt-[40px]'>

                            <button className='button2 '>Book Now</button>
                            <GoArrowRight className='text-[#EF0101] cursor-pointer w-[24px] h-[24px]  text-center '/>
                        </div>
                        <div className="contact pt-5">
                            <p><u>514 905 9958</u></p>
                            <p><u>hello@support.com</u></p>
                        </div>
                    </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Ready