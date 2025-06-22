import React from "react";
import ProductsSection from "@/components/Productitems";
import StatisticsSection from "@/components/statistics-section";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/why-you-us";
import Infrastructure from "@/components/Infrastructure";
import WhoWeAre from "@/components/Whoweare";

const page = () => {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <StatisticsSection />
      <WhyChooseUs />
      <Infrastructure />
      <WhoWeAre />=
    </div>
  );
};

export default page;
