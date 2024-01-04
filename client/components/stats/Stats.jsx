import React from 'react';

const TrustedCompaniesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-blue-800">
      <h1 className="text-5xl font-bold mb-8">Trusted by worldwide health organizations</h1>
      
      <div className="flex justify-center w-full">
           <div className='w-1/3 flex justify-center items-center  '>  <img src="/assets/images/who.png" alt="Company 1" className="mx-4 w-1/2 " /></div>
           <div className='w-1/3  flex justify-center items-center'>  <img src="/assets/images/cdc.png" alt="Company 2" className="mx-4 w-1/2" /></div>
           <div className='w-1/3  flex justify-center items-center' >   <img src="/assets/images/ihf.png" alt="Company 3" className="mx-4 w-1/2 " />
      </div>

         
      </div>
    </div>
  );
};

export default TrustedCompaniesSection;
