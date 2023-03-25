import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import CompanyInfo from "../CompanyInfo";
import CompanyDetails from "../CompanyDetails";

function Home() {
  return (
    <>
      <HeroSection />
      <CompanyInfo />
      <CompanyDetails />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
