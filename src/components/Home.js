import React from 'react'
import About from './About';
import Blog from './Blog';
import FilteredResults from './FilteredResults';
import FilterSection from './FilterSection';
import Homebanner from './Homebanner';
import Navbar from './Navbar';
import OtherProperties from './OtherProperties';

const Home = () => {
  return (
    <>
      <Navbar />
      <Homebanner />
      <FilterSection />
      <FilteredResults />
      <About />
      <OtherProperties />
      <Blog />
    </>
  )
}

export default Home