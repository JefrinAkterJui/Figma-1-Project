import React from 'react'
import './Discover.css'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";


const Discover = () => {
  return (
    <>
    <div className="Juis-Discover">
        <div className="container">
            <div className="main_part">
                <div className="head_text">
                    <h1>Discover my featured works</h1>
                </div>
                <div className="Discover_navbar">
                    <ul>
                        <li><Link to={'#'}>All</Link></li>
                        <li><Link to={'#'}>Maternity</Link></li>
                        <li><Link to={'#'}>Portrait</Link></li>
                        <li><Link to={'#'}>Travel</Link></li>
                        <li><Link to={'#'}>Weeding</Link></li>
                    </ul>
                </div>
                <div className="Discover_imges">
                    <img className='img1 w-[290px] h-[310px] mt-[100px]' src="img/h.png" alt="imge" />
                    <img className='img2 w-[307px] h-[357px]' src="img/Maternity.png" alt="imge" />
                    <img className='img3 w-[290px] h-[310px] mt-[100px]' src="img/Weeding.png" alt="imge" />
                    <img className='img4 w-[307px] h-[357px]' src="img/Portrait.png" alt="imge" />
                </div>
                <div className="Discover_buton flex justify-center items-center">
                    <div className="button flex mt-[40px] ">
                        <button className='button2'>View All Works</button>
                        <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center '/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Discover