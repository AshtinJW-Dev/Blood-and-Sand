// src/app/landing/page.tsx
import Hero from "../../pages/landing/sections/Hero";
import Features from "../../pages/landing/sections/Features";
import CTA from "../../pages/landing/sections/CTA";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
    </>
  );
};

export default LandingPage;
