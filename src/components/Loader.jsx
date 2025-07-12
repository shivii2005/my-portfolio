// src/components/Loader.jsx
import React from "react";
import ParticleRing from "./ParticleRing";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999]">
      <ParticleRing />
    </div>
  );
};

export default Loader;
