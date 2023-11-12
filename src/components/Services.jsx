import React from 'react';
import { useSelector } from 'react-redux';
import { languages } from '../assets/data/languages';
import headservimg from "../assets/picture/servicesGroup.png"
import { Link } from 'react-router-dom';
import Footer from './Footer';




const Services = () => {

  const language = useSelector(state => state.language);

  const cartposted = languages[language].services;



  console.log(cartposted)

  return (
    <>

      <div className='w-full py-16 px-[220px] max-[1250px]:px-[100px] max-[520px]:px-0 border-[1px] border-black flex justify-between from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#FFE57A] to-[#B59100]'>
        <div className='flex flex-col w-1/2 max-[1000px]:w-full max-[1000px]:items-center justify-center'>
          <h1 className='font-IRANSansX-DemiBold text-[88px] max-[590px]:text-[40px]'>
            {languages[language].navServices}
          </h1>
        </div>
        <div className='max-[1000px]:hidden'>
          <img src={headservimg} alt="" />
        </div>
      </div>


      <div className='w-full flex flex-col px-[200px] max-[1350px]:px-[100px] max-[520px]:px-4 bg-[#F2F2F2]'>
        <div className='w-full flex justify-center'>
          <p className='text-center from-[0%] mt-5 font-IRANSansX-DemiBold text-[#E1B603] text-[24px] border-b-4 border-white'>All</p>
        </div>


        <div className='w-full flex justify-center gap-10  flex-wrap mt-10 pb-20'>

          {cartposted.map((item, index) => (

            item.id % 3 === 2 ?
              <Link key={index} to={`/Services/${item.id}`} className='hovercarting max-[1100px]:w-[45%] max-[780px]:w-3/4 max-[630px]:w-full w-[30%] gap-6 bg-white flex flex-col shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)] rounded-lg p-6'>
                <img className='rounded-xl' src={item.img} alt="" />
              <div className='flex flex-col gap-4'>
                <p className='text-[24px] font-IRANSansX-Bold'>{item.title}</p>
                <p className='text-[18px] font-IRANSansX-Bold'>{item.text}</p>
              
                </div>  
              </Link>

              :
              <Link key={index} to={`/Services/${item.id}`} className='hovercarting max-[1100px]:w-[45%] max-[780px]:w-3/4 max-[630px]:w-full w-[30%] gap-6 bg-white flex flex-col shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)] rounded-xl p-6'>
               <div className='flex flex-col gap-4'>
                <p className='text-[24px] font-IRANSansX-Bold'>{item.title}</p>
                <p className='text-[18px] font-IRANSansX-Bold'>{item.text}</p>

               </div>
                <img className='rounded-xl' src={item.img} alt="" />
              </Link>

          ))}

        </div>
      </div>


            <Footer />

    </>
  );
}

export default Services;