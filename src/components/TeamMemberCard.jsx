import React from 'react';

const TeamMemberCard = ({ name, position, image }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover border border-gray-300" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-900 mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
