import React from 'react';
import { languages } from '../assets/data/languages';
import { useSelector } from 'react-redux';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';




const Footer = () => {


  const language = useSelector(state => state.language);

  return (
    <>

      <div className='px-[200px] w-full pb-10 max-[1400px]:px-[100px] max-[1200px]:px-[50px]'>



        <div className="max-[1000px]:hidden w-full flex mt-16  justify-between  flex-wrap max-[940px]:justify-between" >

          <div className="min-[940px]:w-[16%] pe-6 h-full ">
            <ul className="flex flex-col items-start mt-12 ">
              <li className="font-IRANSansX-Bold text-[20px]  ">{languages[language].Footer1}</li>

              <li className="font-IRANSansX-Light text-[14px]  cursor-pointer mt-4">{languages[language].Footer1text1}</li>
              <li className="font-IRANSansX-Light text-[14px]  cursor-pointer mt-1">{languages[language].Footer1text2}</li>
              <li className="font-IRANSansX-Light text-[14px]  cursor-pointer mt-1">{languages[language].Footer1text3}</li>
              <li className="font-IRANSansX-Light text-[14px]  cursor-pointer mt-1">{languages[language].Footer1text4}</li>
              <li className="font-IRANSansX-Light text-[14px]  cursor-pointer mt-1">{languages[language].Footer1text5}</li>

            </ul>

          </div>

          <div className="min-[940px]:w-[16%] pe-6 h-full ">
            <ul className="flex flex-col items-start mt-12 ">
              <li className="font-IRANSansX-Bold text-[20px]  ">{languages[language].Footer2}</li>

              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-4">{languages[language].Footer2text1}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer2text2}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer2text3}</li>

            </ul>

          </div>

          <div className="min-[940px]:w-[16%] pe-6 h-full ">
            <ul className="flex flex-col items-start mt-12 ">
              <li className="font-IRANSansX-Bold text-[20px]  ">{languages[language].Footer3}</li>

              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-4">{languages[language].Footer3text1}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer3text2}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer3text3}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer3text4}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer3text5}</li>

            </ul>

          </div>

          <div className="min-[940px]:w-[16%] pe-6 h-full ">
            <ul className="flex flex-col items-start mt-12 ">
              <li className="font-IRANSansX-Bold text-[20px]  ">{languages[language].Footer4}</li>

              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-4">{languages[language].Footer4text1}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer4text2}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer4text3}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer4text4}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer4text5}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer4text6}</li>

            </ul>

          </div>

          <div className="min-[940px]:w-[16%] pe-6 h-full ">
            <ul className="flex flex-col items-start mt-12 ">
              <li className="font-IRANSansX-Bold text-[20px]  ">{languages[language].Footer5}</li>

              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-4">{languages[language].Footer5text1}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer5text2}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer5text3}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer5text4}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer5text5}</li>
              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-1">{languages[language].Footer5text6}</li>

            </ul>

          </div>

          <div className="min-[940px]:w-[16%] pe-6 h-full ">
            <ul className="flex flex-col items-start mt-12 ">
              <li className="font-IRANSansX-Bold text-[20px]  ">{languages[language].Footer6}</li>

              <li className="font-IRANSansX-Light text-[14px] cursor-pointer mt-4">{languages[language].Footer6text1}</li>

            </ul>

          </div>

        </div>

      </div>


      <div style={{ width: "100%", backgroundColor: 'white', marginTop: '50px' }} className="min-[1000px]:hidden">
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className='font-IRANSansX-DemiBold text-[20px]'>
              {languages[language].Footer1}
            </p>
          </AccordionSummary>
          <AccordionDetails>

            <div className="flex flex-col gap-3 font-IRANSansX-DemiBold text-[16px]">
              <span>{languages[language].Footer1text1}</span>
              <span>{languages[language].Footer1text2}</span>
              <span>{languages[language].Footer1text3}</span>
              <span>{languages[language].Footer1text4}</span>
              <span>{languages[language].Footer1text5}</span>
            </div>

          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className='font-IRANSansX-DemiBold text-[20px]'>
              {languages[language].Footer2}
            </p>
          </AccordionSummary>
          <AccordionDetails>

            <div className="flex flex-col gap-3 font-IRANSansX-DemiBold text-[16px]">
              <span>{languages[language].Footer2text1}</span>
              <span>{languages[language].Footer2text2}</span>
              <span>{languages[language].Footer2text3}</span>
            </div>

          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className='font-IRANSansX-DemiBold text-[20px]'>
              {languages[language].Footer3}</p>
          </AccordionSummary>
          <AccordionDetails>

            <div className="flex flex-col gap-3 font-IRANSansX-DemiBold text-[16px]">

              <span>{languages[language].Footer3text1}</span>
              <span>{languages[language].Footer3text2}</span>
              <span>{languages[language].Footer3text3}</span>
              <span>{languages[language].Footer3text4}</span>
            </div>


          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className='font-IRANSansX-DemiBold text-[20px]'>
              {languages[language].Footer4}
            </p>
          </AccordionSummary>
          <AccordionDetails>

            <div className="flex flex-col gap-3 font-IRANSansX-DemiBold text-[16px]">
              <span>{languages[language].Footer4text1}</span>
              <span>{languages[language].Footer4text2}</span>
              <span>{languages[language].Footer4text3}</span>
              <span>{languages[language].Footer4text4}</span>
              <span>{languages[language].Footer4text5}</span>
              <span>{languages[language].Footer4text6}</span>
            </div>

          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className='font-IRANSansX-DemiBold text-[20px]'>
              {languages[language].Footer5}
            </p>
          </AccordionSummary>
          <AccordionDetails>

            <div className="flex flex-col gap-3 font-IRANSansX-DemiBold text-[16px]">
              <span>{languages[language].Footer5text1}</span>
              <span>{languages[language].Footer5text2}</span>
              <span>{languages[language].Footer5text3}</span>
              <span>{languages[language].Footer5text4}</span>
              <span>{languages[language].Footer5text5}</span>
              <span>{languages[language].Footer5text6}</span>
            </div>

          </AccordionDetails>
        </Accordion>
        <div className=" pb-5">
          {/* <img src={Logo} className="align-self-center" alt="Arrtiznes" /> */}
          <p className="">
            {languages[language].FooterCopy}
          </p>
        </div>
      </div>



    </>
  );
}

export default Footer;