import React from 'react'
import './Banner.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <div className="banner">
        <Navbar/>
        <div className="container">
            <div className="Banner_main_text flex">
                <div className="Banner_bottom_text mt-[500px]">
                    <h2>ELLYANA MARY</h2>
                    <p>Professional Photographer</p>
                </div>
                <div className="banner_main_text relative">
                    <h1>Love to <br /> <u>capture</u> the <br />
                        best <u>moments</u>
                    </h1>
                    <p>Distinctively re-engineer process-centric growth 
                       strategies without granular process improvements.
                    </p>
                    <video controls className="banner_video">
                        <source src="Video/video1.mp4" type="video/mp4" />
                    </video>
                    <div className="Vimg absolute">
                        <Link><img src="img/Video.png" alt="" /></Link>
                    </div>
                </div>
                <div className="Bannser_side_nav">
                    <ul>
                        <li><Link to={'#'}> <u>Facebook</u></Link></li>
                        <li><Link to={'#'}> <u>Twitter</u></Link></li>
                        <li><Link to={'#'}> <u>Instagram</u></Link></li>
                        <li><Link to={'#'}> <u>Linkedin</u></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner