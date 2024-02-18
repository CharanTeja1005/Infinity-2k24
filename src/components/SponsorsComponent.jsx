import React from 'react';
import sp1 from '../assets/prev sponsors/sp1.jpg';
import sp2 from '../assets/prev sponsors/sp2.jpg';
import sp3 from '../assets/prev sponsors/sp3.gif';
import sp4 from '../assets/prev sponsors/sp4.jpeg';

const SponsorsComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <a href="/our-team" className='hover:underline'>
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">OUR{" "}
            <span className="inline bg-gradient-to-r from-[#7ee168]  to-[#20ff07] text-transparent bg-clip-text">
                SPONSORS
            </span>
        </h2>
      </a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Row */}
        <div className="md:col-span-3 flex justify-center">
          <img src={sp1} alt="Sponsor 1" className="h-auto max-h-36" />
        </div>
        {/* Second Row */}
        <div className="md:col-span-1 flex justify-center">
          <img src={sp2} alt="Sponsor 2" className="h-auto max-h-36" />
        </div>
        <div className="md:col-span-1 flex justify-center">
          <img src={sp3} alt="Sponsor 3" className="h-auto max-h-36" />
        </div>
        <div className="md:col-span-1 flex justify-center">
          <img src={sp4} alt="Sponsor 4" className="h-auto max-h-36" />
        </div>
      </div>
    </div>
  );
};

export default SponsorsComponent;
