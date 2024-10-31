import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedMenu } from './components/FeaturedMenu';
import { SpecialOffers } from './components/SpecialOffers';
import { Reviews } from './components/Reviews';
import { OrderProcess } from './components/OrderProcess';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedMenu />
        <SpecialOffers />
        <OrderProcess />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;