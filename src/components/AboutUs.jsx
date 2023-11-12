import React from 'react';
import background1ecfa from "../assets/picture/background.1ecfa020b47d752336a0.png"
import { useSelector } from 'react-redux';
import { languages } from '../assets/data/languages';
import Frame182 from "../assets/picture/Frame 182.png"
import Grouppic4 from "../assets/picture/Group 4.svg"
import Grouppic5 from "../assets/picture/Group 5.svg"
import Grouppic6 from "../assets/picture/Group 6.svg"
import brandpicture2 from "../assets/picture/Waves-WAVES.88355f16964af61d03ca001c031efc6c.svg"
import brandpicture1 from "../assets/picture/Lutron.ccbef0fb4a6c36bf44f53d8709aaf1ab.svg"
import brandpicture3 from "../assets/picture/Lutron.ccbef0fb4a6c36bf44f53d8709aaf1ab.svg"
import brandpicture4 from "../assets/picture/EOS-Coin-EOS.916f7933703c3c61e43ab32d562cf3ec.svg"
import brandpicture5 from "../assets/picture/Ethereum-Black 1.f6b4e3b341a62e01fb4e81762a8fdfc9.svg"
import Footer from './Footer';



const AboutUs = () => {

  const language = useSelector(state => state.language);


  return (
    <>

      <div className='w-full flex bg-[#F2F2F2]'>
        <div className='w-1/2 max-[1180px]:mt-20 max-[1180px]:w-full flex flex-col justify-center gap-44 max-[1180px]:pe-[200px] max-[700px]:ps-[50px] max-[700px]:pe-[50px] ps-[200px] pe-[100px] '>
          <div className=' flex flex-col gap-5'>
            <h3 className='font-IRANSansX-DemiBold text-[40px] '>
              {languages[language].Mission}
            </h3>
            <p className='font-IRANSansX-Light text-[16px] '>
              {languages[language].TextMission}
            </p>

          </div>

          <div className='flex flex-col gap-5'>
            <h3 className='font-IRANSansX-DemiBold text-[40px] '>
              {languages[language].Story}
            </h3>
            <p className='font-IRANSansX-Light text-[16px] '>
              {languages[language].TextMission}
            </p>

          </div>

        </div>
        <div className='w-1/2 flex max-[1180px]:hidden justify-center'>
          <img src={background1ecfa} alt="" />
        </div>


      </div>


      <div className='w-full bg-[#F2F2F2] flex max-[1100px]:px-[100px] max-[400px]:px-4 max-[550px]:px-[50px] flex-col px-[200px] '>
        <div className='mt-16'>

          <h2 className='font-IRANSansX-DemiBold text-[40px]'>
            {languages[language].Team}
          </h2>

          <div className='flex mt-10 justify-center gap-10 max-[1500px]:flex-wrap w-full'>


            <div className='bg-white max-[1500px]:w-[45%] max-[980px]:w-3/4 max-[700px]:w-full w-[31%] rounded-lg p-6 flex flex-col gap-4 shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
              <div className='flex items-center gap-2'>
                <img src={Frame182} alt="" />
                <div className='flex flex-col gap-2'>
                  <h3 className='font-IRANSansX-DemiBold text-[14px]'>Sara Mohave</h3>
                  <p className='font-IRANSansX-Light text-[12px] text-[#647488]'>{languages[language].Teamleader}</p>
                </div>
              </div>
              <p className='font-IRANSansX-Light pe-3 text-[14px] text-[#647488]'>
                {languages[language].TeamCaption}
              </p>

              <div className='flex gap-1'>
                <img src={Grouppic5} alt="" />
                <img src={Grouppic4} alt="" />
                <img src={Grouppic6} alt="" />
              </div>

            </div>

            <div className='bg-white max-[1500px]:w-[45%] max-[980px]:w-3/4 max-[700px]:w-full w-[31%] rounded-lg p-6 flex flex-col gap-4 shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
              <div className='flex items-center gap-2'>
                <img src={Frame182} alt="" />
                <div className='flex flex-col gap-2'>
                  <h3 className='font-IRANSansX-DemiBold text-[14px]'>Sara Mohave</h3>
                  <p className='font-IRANSansX-Light text-[12px] text-[#647488]'>{languages[language].Teamleader}</p>
                </div>
              </div>
              <p className='font-IRANSansX-Light pe-3 text-[14px] text-[#647488]'>
                {languages[language].TeamCaption}
              </p>

              <div className='flex gap-1'>
                <img src={Grouppic5} alt="" />
                <img src={Grouppic4} alt="" />
                <img src={Grouppic6} alt="" />
              </div>

            </div>


            <div className='bg-white max-[1500px]:w-[45%] max-[980px]:w-3/4 max-[700px]:w-full w-[31%] rounded-lg p-6 flex flex-col gap-4 shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
              <div className='flex items-center gap-2'>
                <img src={Frame182} alt="" />
                <div className='flex flex-col gap-2'>
                  <h3 className='font-IRANSansX-DemiBold text-[14px]'>Sara Mohave</h3>
                  <p className='font-IRANSansX-Light text-[12px] text-[#647488]'>{languages[language].Teamleader}</p>
                </div>
              </div>
              <p className='font-IRANSansX-Light pe-3 text-[14px] text-[#647488]'>
                {languages[language].TeamCaption}
              </p>

              <div className='flex gap-1'>
                <img src={Grouppic5} alt="" />
                <img src={Grouppic4} alt="" />
                <img src={Grouppic6} alt="" />
              </div>

            </div>
          </div>

        </div>


        <h2 className='text-center text-[40px] font-IRANSansX-DemiBold mt-10 '>
          {languages[language].MyPartners}
        </h2>

        <p className='font-IRANSansX-Light text-[14px] text-[#647488] text-center mt-4'>
          Neque rhoncus in amet ipsum eget lacus odio. Viverra mus eu amet risus tempor pretium habitant et. Ut aliquam eu morbi ullamcorper in.
        </p>


        <div className='w-full  flex justify-center py-4 gap-20 max-[550px]:gap-0 max-[400px]:gap-10 max-[850px]:flex-wrap mt-10'>
          <img className='w-1/12 max-[1500px]:w-2/12 max-[850px]:w-4/12 max-[550px]:w-[44%] ' src={brandpicture1} alt="" />
          <img className='w-1/12 max-[1500px]:w-2/12 max-[850px]:w-4/12 max-[550px]:w-[44%] ' src={brandpicture2} alt="" />
          <img className='w-1/12 max-[1500px]:w-2/12 max-[850px]:w-4/12 max-[550px]:w-[44%] ' src={brandpicture3} alt="" />
          <img className='w-1/12 max-[1500px]:w-2/12 max-[850px]:w-4/12 max-[550px]:w-[44%] ' src={brandpicture4} alt="" />
          <img className='w-1/12 max-[1500px]:w-2/12 max-[850px]:w-4/12 max-[550px]:w-[44%] ' src={brandpicture5} alt="" />
        </div>

      </div>



      <Footer />









    </>
  );
}

export default AboutUs;