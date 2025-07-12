import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'

import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text=" I am a seasoned full-stack web developer with a mastery of HTML, CSS, JavaScript, Bootstrap, ReactJS, ExpressJS, NodeJS, and MongoDB. Specializing in crafting bespoke, responsive websites, I combine technical expertise with a creative flair to deliver cutting-edge digital solutions.With a commitment to user-centric design and seamless functionality, I transform complex ideas into intuitive, visually compelling web experiences.My passion lies in leveraging the latest technologies to create impactful solutions that meet and exceed client expectations." />
      <AboutContent />
      {/* <Foooter /> */}
    </div>
  )
}

export default About
