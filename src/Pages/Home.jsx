import React from 'react'
import Banner from '../Components/Banner/Banner'
import BannerSection2 from '../Components/BannerSection2/BannerSection2'
import Discover from '../Components/Discover/Discover'
import LovelyWords from '../Components/LovelyWords/LovelyWords'
import Plan from '../Components/Plan/Plan'
import Ready from '../Components/Ready/Ready'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/footer'

const Home = () => {
  return (
    <>
    <Banner/>
    <BannerSection2/>
    <Discover/>
    <LovelyWords/>
    <Plan/>
    <Ready/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home