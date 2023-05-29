import React from "react";

import HeroSection from "@/components/truewind/hero-section";
import Carousal from "@/components/truewind/carousal";
import Featured from "@/components/truewind/featured";
import SmartBookkeeping from "@/components/truewind/smart-bookkeeping";
import Testimonials from "@/components/truewind/testimonials";

const TruewindPage = () => {
  return (
    <div>
      <HeroSection />
      <Carousal />
      <SmartBookkeeping />
      <Testimonials />
      {/* <Featured />  */}
    </div>
  );
};

export default TruewindPage;
