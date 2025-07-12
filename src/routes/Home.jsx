import React from 'react'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'

import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Skills from '../components/Skills'
import AboutContent from '../components/AboutContent'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeSection />
            <AboutContent/>
            {/* <Skills/>
            <ProjectSection />
            <ContactSection/> */}
            {/* <Foooter /> */}
        </div>
    )
}

export default Home
