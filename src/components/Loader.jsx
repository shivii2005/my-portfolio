import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Solar System - kasanima.json";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Lottie Animation */}
      <div className="w-[250px] h-[250px]">
        <Lottie
          animationData={loadingAnimation}
          loop
          autoplay
          speed={2.5}
        />
      </div>

      {/* Name Below Animation */}
      <h1 className="mt-4 text-white text-4xl sm:text-5xl font-bold tracking-wider">
        shivangi
      </h1>
    </div>
  );
};

export default Loader;
