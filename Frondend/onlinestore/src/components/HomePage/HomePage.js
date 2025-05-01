import React from 'react';
import TopBanner from './TopBanner';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import HeroSection from './HeroSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <TopBanner />
      <Header />
      <NavigationMenu />
      <HeroSection />
    </>
  );
};

export default HomePage;
