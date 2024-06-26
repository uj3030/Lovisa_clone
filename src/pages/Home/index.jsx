import React from 'react'
import MainSection from '../../components/Home/MainSection'
import Testimonials from "../../components/Home/Testimonials"
import ImageGallary from "../../components/Home/ImageGallery"
import JewelleryBoxCards from "../../components/Home/JewelleryBoxCards"
import BestSellers from "../../components/Home/BestSellers"
import StyleCards from "../../components/Home/StyleCards"
import MyLovisaCards from "../../components/Home/MyLovisaCards"
import CartilagePiercings from "../../components/Home/CartilagePiercings";
import Image from "../../assets/images/home/img.jpg";
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
      <MainSection/>
      <Testimonials/>
      <Link to ="/collections"><img className='mt-[3%] w-[full] cursor-pointer'src={Image} alt="example"/></Link>
      <ImageGallary/>
      <JewelleryBoxCards/>
      <BestSellers/>
      <CartilagePiercings/>
      <StyleCards/>
      <div className='absolute  text-2xl w-full text-center mt-[5em] tracking-wide'>#MYLOVISA</div>
      <MyLovisaCards/>

      <div className='pt-[2rem] pb-[5rem] text-[#000000] text-sm tracking-tight cursor-pointer hover:underline'>
        <div className='w-full text-center uppercase leading-6'>show it to the world on instagram </div>
        <div className='w-full text-center '>#MYLOVISA @LOVISAJWELLERY </div>
      </div>
    </>
  )
}

export default Home