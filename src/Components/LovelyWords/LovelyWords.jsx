import React from 'react'
import './LovelyWords.css'
import { GoArrowRight } from "react-icons/go";


const LovelyWords = () => {
  return (
    <>
    <div className="LovelyWords">
        <div className="container">
            <div className="main_item">
                <div className="Wors_head">
                    <h1>Lovely <i><u>words</u> from my clients</i></h1>
                    <div className="Lbotton">
                        <div className="button flex mt-[40px] ">
                            <button className='button1'>View All Reviews</button>
                            <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center '/>
                        </div>
                    </div>
                </div>
                <div className="reviews ">
                    <div className="Review_img">
                        <img src="img/r.png" alt="imgh" />
                    </div>
                    <div className="Review_text mt-[100px]">
                        <p>"<b>Jenifer Lofez</b> is Just an awesome photografer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive,
                        My entire family was impressed by her 
                        and photographs.</p>
                        <h3><i>-JASON & GUIDRY</i></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default LovelyWords