import React from 'react';

const SponsorCard = ({ type, heading, amount, description, image }) => {
  return (
    <div className="max-w-full md:max-w-md rounded overflow-hidden shadow-lg bg-gray-900 text-white m-4 relative lg:min-h-[25vh] lg:h-auto">
      <img className="absolute top-0 left-0 h-24 object-contain" src={image} alt="Sponsor Logo" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl md:text-xl lg:text-3xl mb-4">{heading}</div>
        <p className="text-gray-300 text-lg md:text-base lg:text-xl mb-4">{amount}</p>
        <p className="text-gray-300 text-lg md:text-base lg:text-xl mb-4">{description}</p>
      </div>
    </div>
  );
};

export default SponsorCard;
