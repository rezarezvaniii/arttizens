import React from 'react';
import { useSelector } from 'react-redux';
import { languages } from '../assets/data/languages';
import headerservicespic from "../assets/picture/21389572_Business_employer_doing_presentation_discussion_teamwork_people_character_flat_design_style_Vector_Illustration_ [Converted] 1.png"
import pictureportfulio1 from "../assets/picture/bab28c167907781 1.png"
import Footer from './Footer';




const Portfolio = () => {

  const language = useSelector(state => state.language);

  const Portfol = languages[language].portf;
  console.log(Portfol)

  return (<>

    <div className='w-full py-16 px-[220px] max-[1100px]:px-[100px]  border-[1px] border-black flex justify-between from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#FFE57A] to-[#B59100]'>
      <div className='flex flex-col w-1/2 max-[900px]:items-center max-[900px]:w-full   justify-center'>
        <h1 className='font-IRANSansX-DemiBold text-[88px] '>
          {languages[language].portfhead}
        </h1>
      </div>
      <div className='max-[900px]:hidden'>
        <img src={headerservicespic} alt="" />
      </div>
    </div>

    <div className='w-full flex flex-col px-[300px] max-[1500px]:px-[200px] max-[1250px]:px-[100px] max-[600px]:px-[50px] bg-[#F2F2F2]'>
      <div className='w-full flex justify-center'>
        <p className='text-center from-[0%] mt-5 font-IRANSansX-DemiBold text-[#E1B603] text-[24px] border-b-4 border-white'>All</p>
      </div>


      <div className='w-full flex justify-between gap-10 max-[750px]:justify-center max-[800px]:gap-5 flex-wrap mt-10 pb-20'>

        {Portfol.map((item, index) => (
          <div key={index} className='hovercarting w-[30%] max-[800px]:mt-5 max-[500px]:w-full max-[750px]:w-3/4 max-[1050px]:w-[45%] bg-white flex flex-col gap-4 rounded-xl p-6 shadow-[0_6px_16px_-2px_rgba(0,0,0,0.5)]'>
            <img className='rounded-xl' src={item.img} alt="" />
            <p className='text-[18px] font-IRANSansX-Bold'>{item.title}</p>
            <p className='text-[18px] font-IRANSansX-Bold'>{item.content}</p>
          </div>
        ))}

      </div>
    </div>

    <Footer />



  </>);
}

export default Portfolio;