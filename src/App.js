import React from 'react'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
import Campaignes from 'components/Campaignes'
import Favorites from 'components/Favorites'
import MobileApp from 'components/MobileApp'
import Cards from 'components/Cards'
import Footer from 'components/Footer'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className='dark:bg-primary-color'>
        <Categories />
        <Campaignes />
        <Favorites />
        <MobileApp />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
