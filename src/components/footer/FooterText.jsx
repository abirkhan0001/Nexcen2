import React from 'react';
import Button from '../../button/PrimaryBtn';

const FooterText = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-[#F5F7FA] py-8 px-4 min-h-[180px] sm:min-h-[220px] md:min-h-[250px]">
      <h1 className="text-2xl sm:text-3xl md:text-[35px] font-semibold leading-tight text-center max-w-3xl">
        Pellentesque suscipit<br /> fringilla libero eu.
      </h1>
      <div>
        <Button className="">
          Get a Demo
        </Button>
      </div>
    </div>
  );
};

export default FooterText;
