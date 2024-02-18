import React from "react";
import OUWhiteLogo from "../assets/OUWhiteLogo.png";
import InfinityLogoWhite from "../assets/InfinityLogoWhite.png";
import { CalendarIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <div className="flex flex-1 my-10 lg:flex-row h-[60vh] lg:h-[80vh] align-middle justify-center">
      <main className="text-4xl lg:text-4xl font-bold">
        <h2 className="inline">Department of</h2>
        <br />
        <h1 className="inline">
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Computer Science & Engineering
          </span>{" "}
        </h1>{" "}
        {/* Center the image here */}
        <div className="flex justify-center items-center">
          <img src={OUWhiteLogo} alt="Osmania University Logo" />
        </div>
        <main className="text-3xl font-bold">Presents</main>
        <br />
        <div className="text-2xl lg:text-3xl font-semibold items-center justify-center">
          <p>A NATIONAL TECHNICAL SYMPOSIUM</p>
        </div>
        {/* Make changes here */}
        <div className="flex flex-row items-center justify-center">
          {/* Container for the InfinityLogoWhite image */}
          <div className="w-1/3 -mx-5">
            <img
              src={InfinityLogoWhite}
              className="object-contain h-auto max-h-[50vh]"
            />
          </div>
          {/* Container for the INFINITY 2K24 text */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-sans font-extrabold lg:text-9xl mt-3">
              INFINITY
              <br />
              2K24
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-row lg:items-center justify-center mt-4 items-end">
          <CalendarIcon className="w-12 h-12 lg:w-16 lg:h-16 mr-4 lg:mr-6" />
          <p className="text-lg lg:text-2xl">
            22<sup>nd</sup> March - 23<sup>rd</sup> March
          </p>
        </div>
      </main>
    </div>
  );
}

export default Hero;
