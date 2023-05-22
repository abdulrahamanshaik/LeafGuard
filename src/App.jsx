import React from "react";
import MyCarousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AnimSection from "./components/AnimSection";
import { BrowserRouter } from "react-router-dom";

import LGAdvantageSection from "./components/LGAdvantageSection";
import LifetimeSection from "./components/LifetimeSection";
import Articles from "./components/ArticlesSection";
import Footer from "./components/Footer";
import LGInstallationSection from "./components/LGInstallationSection";
import LimitedTimeOffer from "./components/LimitedTimeOffer";
import GetFreeEstimate from "./components/GetFreeEstimate";

import useScrollPosition from "@react-hook/window-scroll";

const App = () => {
  const scrollY = useScrollPosition();

  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      {scrollY >= 500 && <GetFreeEstimate />}
      <AnimSection />
      <LGAdvantageSection />
      <LGInstallationSection />
      <LifetimeSection />
      <MyCarousel />
      <Articles />
      <Footer />
      <LimitedTimeOffer />
    </BrowserRouter>
  );
};

export default App;
