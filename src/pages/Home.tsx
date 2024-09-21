import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import RecipeGrid from '../components/RecipeGrid/RecipeGrid';
import Footer from '../components/Footer/Footer';
import Explore from '../components/Explore/Explore';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Explore/>
      <RecipeGrid />
      <Footer />
    </div>
  );
};
export default Home;
