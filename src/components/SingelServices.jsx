
import coin1 from "../assets/img/coin-serv-1.svg";
import coin2 from "../assets/img/coin-serv-2.svg";
import coin3 from "../assets/img/coin-serv-3.svg";
import card1 from "../assets/img/card-1.svg";
import card2 from "../assets/img/card-2.svg";
import card3 from "../assets/img/card-3.svg";
import { useSelector } from 'react-redux';
import { languages } from '../assets/data/languages';
import { useParams } from "react-router-dom";
import Footer from "./Footer";



const SingelServices = () => {

  const language = useSelector(state => state.language);
  const serv = languages[language].services;
  const { id } = useParams();
  const card = serv.find(card => card.id === Number(id));

    console.log(card)
  return (
    <>
     <div className='w-full py-16 max-[1300px]:px-[100px]  px-[220px] border-[1px] border-black flex justify-between from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#FFE57A] to-[#B59100]'>
      <div className='flex flex-col w-1/2 max-[1050px]:w-full max-[1050px]:items-center justify-center'>
        <h1 className='font-IRANSansX-DemiBold text-[88px] max-[1050px]:text-[44px]'>
          {card.title}
        </h1>
      </div>
      <div className="max-[1050px]:hidden">
        <img src={coin1} alt="" />
      </div>
    </div>


      <div className="flex flex-col px-[200px]  max-[900px]:px-[100px] max-[650px]:px-6">
        <div className="flex gap-4  mt-4">
          <p className="font-bold text-[20px] ">
            {card.text1}
          </p>
        </div>
        <div className="flex justify-center my-4">
          <img src={coin2} alt="BTC" width={"450px"} height={"530px"} />
        </div>
        <p classname="font-bold text-[20px] mt-4">{card.texttitle1}</p>
        <p style={{color:'#E1B603' , fontWeight:'700' , fontSize:'20px'}}>{card.texttitle2}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead1}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet1}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead2}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet2}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead3}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet3}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead4}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet4}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead5}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet5}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead6}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet6}</p>
        <div className="row gap-4  mt-5">
          <h3 className="font-bold text-[24px]">{card.texthead2}</h3>
          <p classname="font-bold text-[20px] mt-4">
            {card.text3}
          </p>
          <h3 className="font-bold text-[24px]">{card.texthead3}</h3>
          <p classname="font-bold text-[20px] mt-4">{card.text4}</p>
        </div>
        <div className="flex justify-center my-4">
          <img src={coin3} alt="BTC" width={"500px"} height={"390px"} />
        </div>
        <h3 className="font-bold text-[24px]">{card.textbeethead7}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet7}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead8}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet8}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead9}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet9}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead10}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet10}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead11}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet11}</p>
        <h3 className="font-bold text-[24px]">{card.textbeethead12}</h3>
        <p classname="font-bold text-[20px] mt-4">{card.textbeet12}</p>
        <p style={{color:'#E1B603' , fontWeight:'700' , fontSize:'20px'}}>{card.texttitle3}</p>

        <div className="row gap-4  mt-5">
          {/* <h3>{card.textsub3}</h3>
          <p>
            {card.text4}
          </p> */}
        </div>
        <div className="my-4">
          <div className="flex justify-center">

          <img src={coin1} alt="BTC" width={"500px"} height={"330px"} />
          </div>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>
            {card.textsubhead1}
          </p>
          <ul style={{ fontSize: '20px', fontWeight: '500' }}>
            <p classname="font-bold text-[20px] mt-4">{card.textsub1}</p>
            <p classname="font-bold text-[20px] mt-4">{card.textsub2}</p>
            <p classname="font-bold text-[20px] mt-4">{card.textsub3}</p>
            <p classname="font-bold text-[20px] mt-4">{card.textsub4}</p>
            <p classname="font-bold text-[20px] mt-4">{card.textsub5}</p>
            <p classname="font-bold text-[20px] mt-4">{card.textsub6}</p>
            <p classname="font-bold text-[20px] mt-4">{card.textsub7}</p>
            <p classname="font-bold text-[20px] mt-4">{card.textsub8}</p>
          </ul>
        </div>
        <div className="row gap-4  mt-5">
        </div>
        <div className="row justify-content-center gap-4  my-5">
         
         
        </div>
      </div>


      <Footer/>
    </>
  );
}

export default SingelServices;