import React from 'react'
import './BannerSection2.css'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

const BannerSection2 = () => {
  return (
    <>
    <div className="BannerSection2">
        <div className="container">
            <div className="Main_banner1">
                <div className="Banner_logo">
                    <ul>
                        <li><Link to={'#'}><img src="img/Logo1.png" alt="Sponsor logo" /></Link></li>
                        <li><Link to={'#'}><img src="img/Logo2.png" alt="Sponsor logo" /></Link></li>
                        <li><Link to={'#'}><img src="img/Logo3.png" alt="Sponsor logo" /></Link></li>
                        <li><Link to={'#'}><img src="img/Logo4.png" alt="Sponsor logo" /></Link></li>
                        <li><Link to={'#'}><img src="img/Logo5.png" alt="Sponsor logo" /></Link></li>
                        <li><Link to={'#'}><img src="img/Logo6.png" alt="Sponsor logo" /></Link></li>
                        <li><Link to={'#'}><img src="img/Logo7.png" alt="Sponsor logo" /></Link></li>
                        <li><Link to={'#'}><img src="img/Logo8.png" alt="Sponsor logo" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="BannerSection relative">
                <div className="BannerS2_Main_text">
                    <h1>I enjoy <u>capturing</u> people</h1>
                    <p>-ELLINA MARY</p>
                    <div className="imge">

                        <img src="img/Image.png" alt="img" />
                    </div>
                </div>
                <div className="BannerS2_Main_text1">
                    <img src="img/b2.png" alt="" />
                </div>
                <img className=' imges' src="img/Contact.png" alt="img" />

            </div>
            <div className="Banner_Contact_text ml-[142px] mt-[61px]">
                <div className="first">
                    <p>Hi there! <img src="img/hi.png" alt="img" /></p>
                </div>
                <div className="Second">
                    <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you  free.</p>
                </div>
                <div className="Third ">
                    <p>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
                    <div className="button flex mt-[40px] ">
                        <button className='button1'>Contact with Me</button>
                        <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center '/>
                    </div>
                </div>
            </div>
            <div className="Valueable_text ">
                <div className="main_img">
                    <img src="img/g.png" alt="img" />
                </div>
                <div className="text ">
                    <h2>Got many <i>valuable <u>awards</u></i></h2>
                </div>
                <div className="Main_text">
                    <p>2021 - The Artist Award</p>
                    <p>2020 - MKEL/Best Prir</p>
                    <p>2019 - Portrait Award</p>
                    <p>2018 - Berlin Talent</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BannerSection2