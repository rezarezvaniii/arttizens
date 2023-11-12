import React from 'react';
import logoarttizens from "../assets/picture/logo (1) 2.svg"
import LanguageSelectore from "./LanguageSelector";
import { languages } from "../assets/data/languages";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';



const Header = () => {

  const location = useLocation()
  console.log(location.pathname)

  const language = useSelector(state => state.language);
  const [drawermenu, setDrawermenu] = useState(false)

  const handleDrawerOpen = () => {
    setDrawermenu(!drawermenu)
  }


  console.log(language)

  return (
    <>
      <div className={`${language === "fa" && drawermenu ?
          "translate-x-0"
          :
          ""
        }
        ${language === "fa" && drawermenu === false ?
          "translate-x-[100%]"
          :
          ""
        }

          ${language === "en" && drawermenu ?
          "translate-x-0"
          :
          ""
        }
            ${language === "en" && drawermenu === false ?
          "-translate-x-[100%]"
          :
          ""
        }



       
        fixed transition-all duration-300 z-40 h-screen w-1/2 bg-black  min-[950px]:hidden  `}>
        <div className='w-full flex px-4 mt-4 justify-between '>
          <img className='h-fit' src={logoarttizens} alt="" />
          <button onClick={handleDrawerOpen} className='text-white min-[950px]:hidden'>
            <CloseIcon />

          </button>
        </div>

        <div className=' flex flex-col gap-4 px-8 mt-5'>

          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : 'text-white')} to={"/Home"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navHome}
            </p>
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : 'text-white')} to={"/services"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navServices}
            </p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : 'text-white')} to={"/portfolio"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navPortfolio}
            </p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : 'text-white')} to={"/aboutus"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navAboutUs}
            </p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : 'text-white')} to={"/contactus"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navContactUs}
            </p>
          </NavLink>
        </div>

      </div>



      <div className='w-full px-[220px] max-[1180px]:px-[100px] max-[450px]:px-[50px] flex justify-between items-center h-20'>

        <div className='flex gap-4 items-center max-[950px]:hidden'>
          <img className='h-fit' src={logoarttizens} alt="" />
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : '')} to={"/Home"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navHome}
            </p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : '')} to={"/services"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navServices}
            </p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : '')} to={"/portfolio"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navPortfolio}
            </p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : '')} to={"/aboutus"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navAboutUs}
            </p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text from-[0%] via-[#FFE57A] via-[48%] bg-gradient-to-tr from-[#B59100] to-[#B59100]' : '')} to={"/contactus"}>
            <p className='font-IRANSansX-Bold cursor-pointer text-lg'>
              {languages[language].navContactUs}
            </p>
          </NavLink>

        </div>


        <button onClick={handleDrawerOpen} className='min-[950px]:hidden'>
          <MenuIcon />

        </button>

        <LanguageSelectore />

      </div>


    </>
  );
}

export default Header;