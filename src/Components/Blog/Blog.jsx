import React from 'react'
import './Blog.css'
import { GoArrowRight } from "react-icons/go";


const Blog = () => {
  return (
    <>
    <div className="container">
      <div className="Main_text pb-[100px]">
        <div className="Text flex gap-[100px] justify-center items-center">
          <div className="First_side_text">
                      <div className="head_text1">
                        <h1>Latest Latest <i><u>blog</u></i> </h1>
                        <img src="img/i.png" alt="img" />
                        <div className='flex gap-[60px] mt-[15px]'>
                          <p>. 05 Feb, 2022</p>
                          <p>. 5 min</p>
                        </div>
                        <h2>Speech has never been free, and  that’s good</h2>
                      </div>
                      <div className="head_text1 mt-[54px]">
                        <img src="img/i2.png" alt="img" />
                        <div className='flex gap-[60px] mt-[15px]'>
                          <p>. 05 Feb, 2022</p>
                          <p>. 5 min</p>
                        </div>
                        <h2>Speech has never been free, and  that’s good</h2>
                      </div>
          </div>  
          <div className="Second_side_text ">
            <div className="T_button">
              <div className="button flex  ">
                <button className='button3 flex'>View All Blog
                  <GoArrowRight className='text-[#EF0101] w-[24px] h-[24px]  text-center '/>
                </button>
                </div>
              </div>
              <div className="Side-text mt-[10px]">
                <div className="head_text1 b mt-[54px]">
                  <img src="img/i3.png" alt="img" />
                  <div className='flex gap-[60px] mt-[15px]'>
                    <p>. 05 Feb, 2022</p>
                    <p>. 5 min</p>
                  </div>
                  <h2>Speech has never been free, and  that’s good</h2>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog