import React, { useContext,useEffect } from 'react'
import HeroSection from './HeroSection'
import NoteContext from '../NoteContext';
function About() {
  const {updateAboutPage}=useContext(NoteContext);
  useEffect(()=>{
    updateAboutPage();
  },[]);
  return (
    <>
    <h1 style={{textAlign:"center"}}>About Me</h1>
    <HeroSection />
   </>
  )
}

export default About