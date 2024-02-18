import React from 'react';
import Footer from '../components/Footer';
import BinarySeparator from '../components/BinarySeparator';
import WaterDropGridEffect from '../components/WaterDropGridEffect';
import StarsCanvas from '../components/StarsCanvas';
import { MouseTrailComponent } from '../components/MouseTrailComponent';
import Hero from '../components/Hero';
import AboutInfinity from '../components/AboutInfinity';
import GenAIComponent from '../components/GenAIComponent';
import OurTeamComponent from '../components/OurTeamComponent';
import SponsorsComponent from '../components/SponsorsComponent';
import DashDivider from '../components/DashDivider';
import GalleryComponent from '../components/GalleryComponent';

function Home() {
  return (
    <div className='my-10'>
      <div className='text-5xl font-semibold italic bg-purple-800'>
        INFINITY 2K24
      </div>
      <StarsCanvas/>
      <Hero/>

      <BinarySeparator/>

      <AboutInfinity/>

      <BinarySeparator/>

      <GenAIComponent/>

      <BinarySeparator/>

      <OurTeamComponent/>
      {/* <MouseTrailComponent/> */}
      <DashDivider/>

      <SponsorsComponent/>

      <DashDivider/>

      <GalleryComponent/>
          {/* <StaggeredAnimationComponent/> */}
      {/* <div className="shadow h-[50vh]"></div> */}
      <Footer/>
    </div>
  )
}

export default Home;
