import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
    <nav className='Jui-nav '>
        <div className="container">
            <div className="main_nav  ">
              <div className="nav_imge">
                <img src="img/logo.png" alt="imge" />
              </div>
              <div className="Nav_item">
                <ul>
                  <li><Link to={'#'}>About</Link></li>
                  <li><Link to={'#'}>Project</Link></li>
                  <li><Link to={'#'}>Blog</Link></li>
                  <li><Link to={'#'}>Pricing</Link></li>
                  <li><Link to={'#'}>Studio</Link></li>
                  <li><Link to={'#'}>Contact</Link></li>
                </ul>
              </div>
              <div className="Nav_icon ">
                <HiOutlineBars3 className='Line_icon' />
              </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar