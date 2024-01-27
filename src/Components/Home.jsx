import React, { useContext, useEffect } from 'react'
import HeroSection from './HeroSection'
import NoteContext from '../NoteContext';
import Service from './Service';
import Contact from './Contact';
function Home() {
  const {updateHomePage}=useContext(NoteContext);
useEffect(()=> {
  updateHomePage()
},[]);
  return (
    <>
    <HeroSection/>
    <Service/>
    <Contact/>
    </>
  )
}

export default Home;