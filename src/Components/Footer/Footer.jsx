import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="Jui-footer bg-[#0B0109] py-[100px]">
        <div className="container">
            <div className="main">
                <div className="fotter_text flex flex-col justify-center items-center text-center">
                    <img src="img/logo.png" alt="" />
                    <p>© 2022 Elliana Mary  All Rights Reserved</p>
                    <img className='mt-[48px]' src="img/Line.png" alt="" />
                    <div className="footer_nav mt-[36px]">
                        <ul >
                            <li>
                                <Link  className='text-white hover:text-red-600 duration-300' >About</Link>
                                <Link  className='text-white hover:text-red-600 duration-300' >Project</Link>
                                <Link  className='text-white hover:text-red-600 duration-300' >Blog</Link>
                                <Link  className='text-white hover:text-red-600 duration-300' >Pricing</Link>
                                <Link  className='text-white hover:text-red-600 duration-300' >Studio</Link>
                                <Link  className='text-white hover:text-red-600 duration-300' >Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <img className='mt-[36px]' src="img/l.png" alt="img" />
                    <div className="footer_nav2 mt-[36px]">
                        <ul>
                            <li>
                                <Link  className='text-white hover:text-red-600 duration-300'>Facebook</Link>
                                <Link  className='text-white hover:text-red-600 duration-300'>Twitter</Link>
                                <Link  className='text-white hover:text-red-600 duration-300'>Instagram</Link>
                                <Link  className='text-white hover:text-red-600 duration-300'>Linkedin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer