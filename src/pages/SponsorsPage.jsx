import React from 'react';
import { motion } from 'framer-motion';
import PrevSponsors from '../assets/prev sponsors/PrevSponsors.png';
import SponsorCard from '../components/SponsorCard';
import Platinum from '../assets/Platinum.png';
import Gold from '../assets/Gold.png';
import Silver from '../assets/Silver.png';
import Bronze from '../assets/Bronze.png';
import DashDivider from '../components/DashDivider';

function SponsorsPage() {
  return (
    <div>
      <motion.h2
        className="text-3xl lg:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline bg-gradient-to-r from-[#ecd167]  to-[#ffbf00] text-transparent bg-clip-text">
          SPONSORS
        </span>
      </motion.h2>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 justify-items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SponsorCard
            heading="Platinum Sponsor"
            amount="₹3,00,000"
            description="Fest will be named after the company, floor space for the company exhibits. A Company name, logo will be displayed on website, T-shirts and Main poster. Advertisements will be done in campus through banners"
            image={Platinum}
          />
          <SponsorCard
            heading="Gold Sponsor"
            amount="₹2,00,000"
            description="Fest will be co-sponsored by the company, floor space for the company exhibits. Company name and logo will be displayed in the website, main poster, T-shirts"
            image={Gold}
          />
          <SponsorCard
            heading="Silver Sponsor"
            amount="₹1,00,000"
            description="Events will be sponsored by the company. Company name and logo will be displayed on Website. Banners will be displayed in the Campus"
            image={Silver}
          />
          <SponsorCard
            heading="Bronze Sponsor"
            amount="₹50,000"
            description='An Advertisement will be published on half page of the souvenir. Company name and logo will be displayed on the banner. CONTRIBUTORS Company name and logo will be printed in the souvenir. Banners will be displayed in the campus'
            image={Bronze}
          />
        </motion.div>
      </div>
      <DashDivider />
      <div className="container flex flex-col justify-center items-center">
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline bg-gradient-to-r from-[#f67b7b]  to-[#f40c0c] text-transparent bg-clip-text">
            PREVIOUS SPONSORS
          </span>
        </motion.h2>
        <motion.div
          className="flex flex-1 justify-center items-center lg:w-[50vw]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={PrevSponsors} className="object-cover" alt="Previous Sponsors" />
        </motion.div>
      </div>
    </div>
  );
}

export default SponsorsPage;
