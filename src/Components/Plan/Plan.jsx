import React from 'react'
import './Plan.css'
import { GoArrowRight } from "react-icons/go";


const Plan = () => {
  return (
    <>
    <div className="Plan">
        <div className="container">
            <div className="main_part ">
                <div className="Plan_M_text ">
                    <div className="plan_text">
                        <h1>Affordable <i><u>pricing plan</u></i></h1>
                    </div>
                </div>
                <div className="Main_flex flex justify-center items-center gap-10 relative">

                    <div>
                        <div className="plans mt-[40px] mb-[100px] flex ">
                            <div className="P_text">
                                <h2><b>MATERNITY</b></h2>
                                <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <div className="button flex mt-[20px] ">
                                    <button className='text-red-600 flex text-center font-Inter font-semibold text-[18px]'>Book Now

                                    <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center cursor-pointer'/>
                                    </button>
                                </div>
                            </div>
                            <div className="P_rate ml-[-58px]">
                                <h2><i>$500</i></h2>
                            </div>
                        </div>
                        <div className="plans mt-[40px] mb-[100px] flex ">
                            <div className="P_text">
                                <h2><b>Travel</b></h2>
                                <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <div className="button flex mt-[20px] ">
                                    <button className='text-red-600 flex text-center font-Inter font-semibold text-[18px]'>Book Now

                                    <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center cursor-pointer'/>
                                    </button>
                                </div>
                            </div>
                            <div className="P_rate ml-[-58px]">
                                <h2><i>$500</i></h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="plans mt-[40px] mb-[100px] flex ">
                            <div className="P_text">
                                <h2><b>Portrait</b></h2>
                                <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <div className="button flex mt-[20px] ">
                                    <button className='text-red-600 flex text-center font-Inter font-semibold text-[18px]'>Book Now

                                    <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center cursor-pointer'/>
                                    </button>
                                </div>
                            </div>
                            <div className="P_rate ml-[-58px]">
                                <h2><i>$500</i></h2>
                            </div>
                        </div>
                        <div className="plans mt-[40px] mb-[100px] flex ">
                            <div className="P_text">
                                <h2><b>Weeding</b></h2>
                                <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <div className="button flex mt-[20px] ">
                                    <button className='text-red-600 flex text-center font-Inter font-semibold text-[18px]'>Book Now

                                    <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center cursor-pointer'/>
                                    </button>
                                </div>
                            </div>
                            <div className="P_rate ml-[-58px]">
                                <h2><i>$500</i></h2>
                            </div>
                        </div>
                    </div>
                    <div className="Lines">
                        <div className="first_line bg-[#0b01093a] w-[921px] h-[1px] absolute top-[257px] left-[160px]"></div>
                        <div className="first_line bg-[#0b010942] w-[1px] h-[443px] absolute top-[44px] left-[618px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Plan