import React from 'react';
import { languages } from '../assets/data/languages';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import emailmail from "../assets/picture/email-mail-svgrepo-com.svg"
import youtubeGroup from "../assets/picture/youtubeGroup.svg"
import instaGroup from "../assets/picture/instaGroup.svg"
import telegramVector from "../assets/picture/telegramVector.svg"
import facebookVector from "../assets/picture/facebookVector.svg"
import twitterVector from "../assets/picture/twitterVector.svg"
import linkedinVector from "../assets/picture/linkedinVector.svg"
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AddIcon from '@mui/icons-material/Add';



const ContactUs = () => {

  const language = useSelector(state => state.language)

  return (
    <>
      <div className='px-[200px] max-[1300px]:px-[50px] max-[1100px]:flex-col max-[1100px]:items-center max-[1100px]:gap-10 flex bg-[#F2F2F2] pb-24'>
        <div className='w-1/2 max-[1100px]:w-3/4 max-[900px]:w-full '>
          <h3 className='font-IRANSansX-DemiBold text-[40px] '>در تماس باشید </h3>

          <div className='flex flex-wrap justify-between '>
            <div className=' flex flex-col gap-2 w-[44%]'>
              <p className='font-IRANSansX-DemiBold text-base '>{languages[language].Name}</p>
              <input className='bg-[#FFFAE6] font-IRANSansX-Medium text-sm  w-full outline-none focus:border-blue-500/[0.5] focus:border-4 rounded-full h-14 px-4 focus:bg-white transition-all duration-300	' type="email" placeholder={`${languages[language].Name}`} />
            </div>
            <div className=' flex flex-col gap-2 w-[44%]'>
              <p className='font-IRANSansX-DemiBold text-base '>{languages[language].Email}</p>
              <input className='bg-[#FFFAE6] font-IRANSansX-Medium text-sm  w-full outline-none focus:border-blue-500/[0.5] focus:border-4 rounded-full h-14 px-4 focus:bg-white transition-all duration-300	' type="text" placeholder={`${languages[language].Email}`} />
            </div>
            <div className=' flex flex-col gap-2 w-[44%]'>
              <p className='font-IRANSansX-DemiBold text-base '>{languages[language].Company}</p>
              <input className='bg-[#FFFAE6] font-IRANSansX-Medium text-sm  w-full outline-none focus:border-blue-500/[0.5] focus:border-4 rounded-full h-14 px-4 focus:bg-white transition-all duration-300	' type="text" placeholder={`${languages[language].Company}`} />
            </div>
            <div className=' flex flex-col gap-2 w-[44%]'>
              <p className='font-IRANSansX-DemiBold text-base '>{languages[language].Subject}</p>
              <input className='bg-[#FFFAE6] font-IRANSansX-Medium text-sm  w-full outline-none focus:border-blue-500/[0.5] focus:border-4 rounded-full h-14 px-4 focus:bg-white transition-all duration-300	' type="text" placeholder={`${languages[language].Subject}`} />
            </div>

            <div className=' flex flex-col gap-2 w-full'>
              <p className='font-IRANSansX-DemiBold text-base '>{languages[language].massege}</p>
              <textarea className='bg-[#FFFAE6] font-IRANSansX-Medium h-96 text-sm resize-y w-full outline-none focus:border-blue-500/[0.5] focus:border-4 rounded-2xl p-4 focus:bg-white transition-all duration-300	' type="text" placeholder={`${languages[language].placeHolder}`} />
            
            <button className='justify-between w-fit mt-10 rounded-full py-4 px-6 border-2 border-black font-IRANSansX-Bold text-sm from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#FFE57A]  to-[#B59100]'>
              {languages[language].massege}
            </button>
            </div>







          </div>

        </div>

        <div className='w-1/2 max-[1100px]:w-3/4 max-[900px]:w-full flex flex-col gap-6 items-center justify-center'>

          <h2 className='text-[24px] font-IRANSansX-DemiBold '>
            {languages[language].ContactHead}
          </h2>
          <p className='font-IRANSansX-Medium text-[16px] '>

          </p>

          <div className='font-IRANSansX-Medium text-[16px] my-10'>
            <p className='flex gap-2 items-center'>
              <img src={emailmail} alt="" />
              <a href="mailto:artizzens@gmail.com">
              artizzens@gmail.com

              </a>

            </p>
            <p className='flex gap-2 items-center'>
              <img src={emailmail} alt="" />
              <a href="mailto:supportartizzens@gmail.com">
              supportartizzens@gmail.com

              </a>

            </p>
            <p className='flex gap-2 items-center'>
              <img src={emailmail} alt="" />
            <a href="mailto:pressartizzens@gmail.com">
              pressartizzens@gmail.com

            </a>

            </p>
          </div>
          <h3 className='font-IRANSansX-Bold text-[20px] '>
            {languages[language].ContactSo}
          </h3>
          <div className='flex flex-wrap gap-6'>
            <img className='bg-black rounded-full   ' src={youtubeGroup} alt="" />
            <img className='bg-black rounded-full   ' src={instaGroup} alt="" />
            <img className='bg-black rounded-full   ' src={telegramVector} alt="" />
            <img className='bg-black rounded-full   ' src={facebookVector} alt="" />
            <img className='bg-black rounded-full   ' src={twitterVector} alt="" />
            <img className='bg-black rounded-full   ' src={linkedinVector} alt="" />
          </div>

        </div>
      </div>
      <div className='w-full items-center  flex-col gap-6 px-[200px] max-[900px]:px-[40px] flex justify-center bg-[#F2F2F2] pb-20'>
        <h2 className='font-IRANSansX-DemiBold text-[40px]'>
          {languages[language].Questions}
        </h2>
        <div className=' w-1/2 max-[1600px]:w-8/12 max-[1300px]:w-10/12 max-[1100px]:w-full '>
      
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p classname="font-IRANSansX-DemiBold text-[20px]">
                {languages[language].Questions1}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-IRANSansX-DemiBold text-[16px]">
                {languages[language].QuestionsText1}
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p classname="font-IRANSansX-DemiBold text-[20px]">
                {languages[language].Questions2}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-IRANSansX-DemiBold text-[16px]">
                {languages[language].QuestionsText2}
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p classname="font-IRANSansX-DemiBold text-[20px]">{languages[language].Questions3}</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-IRANSansX-DemiBold text-[16px]">
                {languages[language].QuestionsText3}

              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p classname="font-IRANSansX-DemiBold text-[20px]">
                {languages[language].Questions4}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-IRANSansX-DemiBold text-[16px]">
                {languages[language].QuestionsText4}
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p classname="font-IRANSansX-DemiBold text-[20px]">
                {languages[language].Questions5}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-IRANSansX-DemiBold text-[16px]">
                {languages[language].QuestionsText5}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;