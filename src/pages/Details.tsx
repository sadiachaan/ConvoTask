import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Explore from '../components/Explore/Explore';

const Details: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Explore/>
      <Footer />
    </div>
  );
};
export default Details;