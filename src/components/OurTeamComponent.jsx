import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import img1 from "../assets/gallery/IMG20230325104956.jpg"
import img2 from "../assets/gallery/IMG20230325105037.jpg"
import img3 from "../assets/gallery/IMG20230325105048.jpg"
import img4 from "../assets/gallery/IMG20230325110308.jpg"
import { ArrowRightIcon } from '@radix-ui/react-icons';

const OurTeamComponent = () => {
  return (
    <div className="text-white py-10">
        <div className="container mx-auto px-4">
            <div className="flex mb-6 justify-center items-center hover:underline">
              <a href="/our-team">
                <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">OUR{" "}
                    <span className="inline bg-gradient-to-r from-[#5ac9eb]  to-[#4029ef] text-transparent bg-clip-text">
                        TEAM
                    </span>
                </h2>
              </a>
              {/* <button className="flex items-center px-4 py-2 bg-yellow-300 text-black hover:bg-yellow-500 rounded-md transition-colors ml-4">
                <ArrowRightIcon />
              </button> */}
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMemberCard
            name="Charan Teja"
            position="CEO"
            image={img1}
          />
          <TeamMemberCard
            name="Awesome Star"
            position="CTO"
            image={img2}
          />
          <TeamMemberCard
            name="Potugadu"
            position="Marketing Manager"
            image={img3}
          />
          <TeamMemberCard
            name="The Don"
            position="Lead Developer"
            image={img4}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponent;
