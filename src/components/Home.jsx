import React from 'react';
import Footer from "./Footer"
import { languages } from "../assets/data/languages";
import { useSelector } from "react-redux";
import headHome from "../assets/picture/Group 001 (1).6943f1ddbe4e5d7740dbd3333904157f.svg"
import playcircle from "../assets/picture/play-circle-svgrepo-com 1.svg"
import peericon from "../assets/picture/042-peer to peer.svg"
import CardHomehead from './cards/CardHomehead';
import brandpicture2 from "../assets/picture/Waves-WAVES.88355f16964af61d03ca001c031efc6c.svg"
import brandpicture1 from "../assets/picture/Lutron.ccbef0fb4a6c36bf44f53d8709aaf1ab.svg"
import brandpicture3 from "../assets/picture/Lutron.ccbef0fb4a6c36bf44f53d8709aaf1ab.svg"
import brandpicture4 from "../assets/picture/EOS-Coin-EOS.916f7933703c3c61e43ab32d562cf3ec.svg"
import brandpicture5 from "../assets/picture/Ethereum-Black 1.f6b4e3b341a62e01fb4e81762a8fdfc9.svg"
import headimg2 from "../assets/picture/pcbtc.b5faee3801a355b7fd13.png"
import cryptocurrencybitcoin1 from "../assets/picture/crypto-currency-bitcoin-code-21.9a6d5dce68ec90e01adb773371abbad4.svg"
import pictureheadehome from "../assets/picture/Group.6c43fcdd57f27b6c65c557f01266380c.svg"
import Frame43 from "../assets/picture/Frame 43.6efd421044c66f933f48.png"
import Frame41 from "../assets/picture/Frame 41.8790755d4575738c1454.png"
import earthpicture from "../assets/picture/893780_O9FG4R1 [Converted] 1.png"
import Framecoin1 from "../assets/picture/Frame coin 50.png"
import Framecoin2 from "../assets/picture/Frame 50.png"
import seminarpic from "../assets/picture/campaign-creators-gMsnXqILjp4-unsplash 1.png"




const Home = () => {

  const language = useSelector(state => state.language);
  const widthprogress1 = 80;
  const widthprogress2 = 90;
  const widthprogress3 = 85;


  return (
    <>
      <div className='w-full py-16 px-[220px] max-[1180px]:px-[100px] border-[1px] border-black  flex justify-between from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#FFE57A]  to-[#B59100]'>
        <div className='flex flex-col w-1/2 max-[1130px]:w-3/4 max-[900px]:w-full'>
          <p className=''>
            {languages[language].headerone}
          </p>
          <h3 className='mt-4 text-[48px] font-IRANSansX-ExtraBold w-1/2 max-[1600px]:w-10/12'>
            {languages[language].headertwo}
          </h3>
          <p className='w-1/2 mt-6 font-IRANSansX-Light text-[16px]  max-[1600px]:w-10/12'>
            {languages[language].headerText}
          </p>
          <p className='mt-10 flex gap-2 items-center'>
            <img src={playcircle} alt="" />
            <span className='font-IRANSansX-ExtraBold text-[14px]'>
              {languages[language].btn}
            </span>
          </p>
        </div>
        <img className='w-1/2 max-[1130px]:hidden' src={headHome} alt="" />
      </div>

      <div className='w-full flex justify-center max-[1000px]:bg-[#F2F2F2] min-[1000px]:relative -top-16 '>
        <div className='w-8/12 max-[1000px]:flex-col max-[1000px]:items-center  max-[1000px]:mt-10  flex justify-center gap-6 min-[1000px]:absolute'>
          <div className='w-[280px] h-[200px] max-[1000px]:w-[70%] px-[40px] py-[40px] items-center flex flex-col gap-6 rounded-lg border-[1px] border-black from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-br from-[#FFE57A]  to-[#B59100]'>
            <img className='w-fit h-fit' src={peericon} alt="" />
            <p className='font-IRANSansX-ExtraBold text-center text-[20px] '>{languages[language].card}</p>
          </div>
          <div className='w-[280px] h-[200px] max-[1000px]:w-[70%] px-[40px] py-[40px] items-center flex flex-col gap-6 rounded-lg border-[1px] border-black from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-br from-[#FFE57A]  to-[#B59100]'>
            <img className='w-fit h-fit' src={peericon} alt="" />
            <p className='font-IRANSansX-ExtraBold text-center text-[20px] '>{languages[language].cardhome1}</p>
          </div>
          <div className='w-[280px] h-[200px] max-[1000px]:w-[70%] px-[40px] py-[40px] items-center flex flex-col gap-6 rounded-lg border-[1px] border-black from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-br from-[#FFE57A]  to-[#B59100]'>
            <img className='w-fit h-fit' src={peericon} alt="" />
            <p className='font-IRANSansX-ExtraBold text-center text-[20px] '>{languages[language].cardhome2}</p>
          </div>

        </div>
      </div>




      <div className='w-full max-[1000px]:h-20 h-48 bg-[#F2F2F2]'>

      </div>

      <p className='text-center font-IRANSansX-light text-[16px]  bg-[#F2F2F2]'>
        {languages[language].servhead}
      </p>

      <div className='bg-[#F2F2F2] w-full pb-16'>

        <div className='w-full justify-center flex bg-[#F2F2F2] '>
          <h2 className='font-IRANSansX-ExtraBold text-[32px] mt-8 text-center w-5/12 max-[1400px]:w-10/12'>
            {languages[language].headerBody1}
          </h2>
        </div>

        <div className='w-full px-[210px] max-[1400px]:px-[100px] max-[550px]:px-6 max-[850px]:justify-center flex flex-wrap justify-between mt-20 '>

          <CardHomehead />
          <CardHomehead />
          <CardHomehead />
          <CardHomehead />
          <CardHomehead />
          <CardHomehead />

        </div>

      </div>

      <div className='w-full flex justify-center py-4 max-[600px]:flex-wrap '>
        <img src={brandpicture1} alt="" />
        <img src={brandpicture2} alt="" />
        <img src={brandpicture3} alt="" />
        <img src={brandpicture4} alt="" />
        <img src={brandpicture5} alt="" />
      </div>

      <div className='w-full  px-[220px] max-[850px]:px-[100px] max-[550px]:px-6 py-16 flex border-[1px] border-black from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#FFE57A]  to-[#B59100]'>

        <div className='w-1/2 max-[1250px]:w-full'>
          <p className=''>
            {languages[language].extext}
          </p>
          <h3 className='mt-4 text-[32px] font-IRANSansX-ExtraBold'>
            {languages[language].exhead}
          </h3>
          <div className='flex max-[550px]:hidden gap-5 mt-4'>
            <div className='bg-gradient-to-tr to-[#FFE57A] from-[#B59100] p-4 rounded-xl shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
              <img src={cryptocurrencybitcoin1} alt="" />
            </div>
            <div className='bg-gradient-to-tr to-[#FFE57A] from-[#B59100] p-4 rounded-xl shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
              <img src={cryptocurrencybitcoin1} alt="" />
            </div>
            <div className='bg-gradient-to-tr to-[#FFE57A] from-[#B59100] p-4 rounded-xl shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
              <img src={cryptocurrencybitcoin1} alt="" />
            </div>
            <div className='bg-gradient-to-tr to-[#FFE57A] from-[#B59100] p-4 rounded-xl shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
              <img src={cryptocurrencybitcoin1} alt="" />
            </div>


          </div>

          <p className='text-xl font-IRANSansX-ExtraBold mt-6'>
            {languages[language].exhead1}
          </p>
          <p className='w-1/2 max-[850px]:w-3/4 mt-6 font-IRANSansX-Light text-[14px] '>
            {languages[language].extext2}
          </p>
          <p className='font-IRANSansX-ExtraBold text-[14px] text-[#5A7EFF] mt-4'>
            {languages[language].exbtn}
          </p>

        </div>

        <div className='w-1/2 max-[1250px]:hidden  flex justify-end'>
          <img src={headimg2} alt="" />

        </div>

      </div>



      <div className='bg-[#F2F2F2] w-full flex flex-col pb-20'>

        <p className='text-center text-base font-IRANSansX-Light text-[#353E49] mt-12 max-[]:'>{languages[language].servhead}</p>

        <div className='w-full flex flex-col items-center'>
          <p className='font-IRANSansX-ExtraBold text-[32px] text-center w-1/4 max-[1320px]:w-2/4 mt-10'>{languages[language].servhead3}</p>
          <span className='font-IRANSansX-Light text-base text-center w-3/4 mt-6'>{languages[language].servtext}</span>
        </div>
        <div className='flex max-[750px]:hidden justify-center mt-8'>
          <img src={pictureheadehome} alt="" />

        </div>

      </div>

      <div className='w-full flex max-[1150px]:flex-col max-[1150px]:gap-10 max-[1150px]:items-center '>
        <div className='w-1/2 max-[630px]:w-full flex max-[1150px]:w-10/12 max-[650px]:w-full'>
          <div className='w-6/12 flex max-[630px]:w-full flex-col pt-16 ps-20'>
            <p className='text-[52px] font-IRANSansX-ExtraBold text-[#E1B603]'>
              +30
            </p>
            <h2 className='font-IRANSansX-DemiBold text-[20px] mt-2'>
              {languages[language].card1}
            </h2>
            <p className='font-IRANSansX-Light  w-3/4 text-[14px] mt-2'>
              {languages[language].cardText1}
            </p>
            <p className='font-IRANSansX-DemiBold w-fit text-[12px] mt-6 cursor-pointer text-[#E1B603]'>
              {languages[language].more}
            </p>
          </div>
          <div className='w-6/12 max-[630px]:hidden h-ful16 flex justify-start '><img src={Frame43} alt="" /></div>

        </div>
        <div className='w-1/2 max-[630px]:w-full flex max-[1150px]:w-10/12 max-[650px]:w-full'>
          <div className='w-6/12 max-[630px]:w-full ps-24 flex flex-col pt-16 '>
            <p className='text-[52px] font-IRANSansX-ExtraBold text-[#E1B603]'>
              +125
            </p>
            <h2 className='font-IRANSansX-DemiBold text-[20px] mt-2'>
              {languages[language].card2}
            </h2>
            <p className='font-IRANSansX-Light w-3/4 max-[630px]:w-full text-[14px] mt-2'>
              {languages[language].cardText2}
            </p>
            <p className='font-IRANSansX-DemiBold w-fit text-[12px] mt-6 cursor-pointer text-[#E1B603]'>
              {languages[language].more}
            </p>
          </div>
          <div className='w-6/12 max-[630px]:hidden flex justify-start'><img src={Frame41} alt="" /></div>

        </div>
      </div>


      <div className=' w-full relative py-10'>
        <img className='absolute top-0 translate-x-1/2 right-1/2' src={earthpicture} alt="" />
        <p className='text-center font-IRANSansX-light text-[16px] '>
          {languages[language].servhead}
        </p>
        <h3 className='font-IRANSansX-Bold text-[32px] text-center mt-4 '>
          {languages[language].Myservices}
        </h3>
        <div className='w-full justify-center flex max-[1100px]:flex-col max-[1100px]:items-center gap-10 mt-8'>
          <div className='w-4/12 p-12 rounded-lg  from-[0%] via-[#FFE57A] via-[48%] max-[1100px]:w-3/4 bg-gradient-to-tr from-[#FFE57A]  to-[#B59100]'>
            <div className='flex gap-2 items-center'>
              <img src={Framecoin1} alt="" />
              <p className='font-IRANSansX-Bold text-[20px] '>{languages[language].cardServicesBody}</p>
            </div>
            <p>
              {languages[language].cardSevicestext}
            </p>

          </div>
          <div className='w-4/12 p-12 rounded-lg  from-[0%] via-[#FFE57A] via-[48%] max-[1100px]:w-3/4 bg-gradient-to-tr from-[#FFE57A]  to-[#B59100]'>
            <div className='flex gap-2 items-center'>
              <img src={Framecoin2} alt="" />
              <p className='font-IRANSansX-Bold text-[20px] '>{languages[language].cardServicesBody}</p>
            </div>
            <p>
              {languages[language].cardSevicestext}
            </p>

          </div>
        </div>


      </div>




      <div className='w-full flex px-[200px] max-[1230px]:px-[100px] '>
        <div className='w-8/12 flex flex-col gap-8 max-[1050px]:w-full '>
        <p className='font-IRANSansX-light text-[16px] mt-12'>
          {languages[language].techead}
        </p>

        <h3 className='font-IRANSansX-DemiBold text-[32px] w-4/12 max-[950px]:w-full'>
          {languages[language].techead2}
        </h3>
        <p className='font-IRANSansX-Light text-[16px] w-1/2 max-[1050px]:w-3/4'>
          {languages[language].tecText}
        </p>

        <div className='flex flex-col gap-2'>
          <p className='font-IRANSansX-Light text-xs'>{languages[language].tecbar1}</p>
          <div className='bg-[#C7D3EB] h-3 w-96 max-[600px]:w-10/12 relative rounded-full'>
            <p className='absolute -end-20 max-[470px]:-end-14 -top-1 text-[#E1B603] font-IRANSansX-DemiBold'>{widthprogress1}%</p>
            <div style={{width: `${widthprogress1}%`,}} className={`rounded-full z-30 from-[0%] h-3 top-[1px]  via-[#FFE57A] via-[50%] bg-gradient-to-br from-[#B59100]  to-[#B59100]  `}>

            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-IRANSansX-Light text-xs'>{languages[language].tecbar2}</p>
          <div className='bg-[#C7D3EB] h-3 w-96 max-[600px]:w-10/12 relative rounded-full'>
            <p className='absolute -end-20 max-[470px]:-end-14 -top-1 text-[#E1B603] font-IRANSansX-DemiBold'>{widthprogress2}%</p>
            <div style={{width: `${widthprogress2}%`,}} className={`rounded-full z-30 from-[0%] h-3 top-[1px]  via-[#FFE57A] via-[50%] bg-gradient-to-br from-[#B59100]  to-[#B59100]  `}>

            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-IRANSansX-Light text-xs'>{languages[language].tecbar3}</p>
          <div className='bg-[#C7D3EB] h-3 w-96 max-[600px]:w-10/12 relative rounded-full'>
            <p className='absolute -end-20 max-[470px]:-end-14 -top-1 text-[#E1B603] font-IRANSansX-DemiBold'>{widthprogress3}%</p>
            <div style={{width: `${widthprogress3}%`,}} className={`rounded-full z-30 from-[0%] h-3 top-[1px]  via-[#FFE57A] via-[50%] bg-gradient-to-br from-[#B59100]  to-[#B59100]  `}>

            </div>
          </div>
        </div>


        </div>

        <div className='w-4/12 max-[1050px]:hidden'>
          <div class="grid grid-cols-2 grid-rows-2 gap-4">
            <div class="col-span-2 row-span-2"></div>
            <div class="col-span-1 row-span-1"><img src={seminarpic} alt="" /></div>
            <div class="col-span-1 row-span-1 mt-6"><img src={seminarpic} alt="" /></div>
            <div class="col-span-1 row-span-1 "><img src={seminarpic} alt="" /></div>
            <div class="col-span-1 row-span-1 mt-6"><img src={seminarpic} alt="" /></div>
          </div>
        </div>

      </div>





      <Footer />












    </>
  );
}

export default Home;