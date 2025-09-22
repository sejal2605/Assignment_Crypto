import React from "react";
import Hero from "./Hero/Hero";
import StatCardList from "./StatCard/StatCardList";
import EMISection from "./EMI/EMISection";
import MarketData from "./MarketData/MarketData";
import TrackCrypto from "./TrackCrypto/TrackCrypto";
import CryptoRewardBanner from "./CryptoReward/CryptoRewardBanner";
import ChainsSection from "./ChainSection/ChainsSection";
import FeaturesSection from "./Feature/FeaturesSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <StatCardList />
      <EMISection />
      <MarketData />
      <TrackCrypto />
      <FeaturesSection />
      <ChainsSection />
      <CryptoRewardBanner />
    </>
  );
};

export default Home;
