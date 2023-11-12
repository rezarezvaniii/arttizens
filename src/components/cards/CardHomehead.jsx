import React from 'react';
import cardserv1 from "../../assets/picture/card-serv.cc83565a06acd3b70468ade8d1e7f891.svg"


const CardHomehead = () => {
    return ( 
        <>
        <div className='w-[31%] flex flex-col max-[1200px]:w-[46%] max-[850px]:w-3/4 max-[650px]:w-full  border-[1px] hover:text-[#E1B603] border-[#C0C7D1] mt-10 gap-10 p-12 items-center bg-white rounded-lg '>
          <img src={cardserv1} alt="" />
          <h1 className='text-[28px] font-IRANSansX-ExtraBold text-center '>
          Security and Fraud Detection
          </h1>
          <p className='font-IRANSansX-Light text-[16px] text-center '>
          We develop AI-powered security solutions to enhance the security of Blockchain networks.
          It can monitor network activity, detect suspicious behavior, and identify potential security threats or attacks.
          AI can assist in detecting fraudulent transactions, preventing unauthorized access, and ensuring the Blockchain network integrity
          </p>
        </div>
        </>
     );
}
 
export default CardHomehead;