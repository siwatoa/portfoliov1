import React from 'react';
import NavBar from './sections/NavBar';
import HomeFirst from './sections/HomeFirst';
import AboutMe from './sections/AboutMe';
import SkillsMe from './sections/SkillsMe';


function App() {
  return (
    <>
      <div className='NavBar z-[500] sticky top-0'><NavBar /></div>
      <div className='Home -z-10'><HomeFirst /></div>
      <div className='About z-[-50]'><AboutMe /></div>
      <div className='Skill z-[-50]'><SkillsMe /></div>
    </>
  )
}
         
export default App
