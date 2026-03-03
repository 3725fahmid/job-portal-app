import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ExploreCategory from '../components/ExploreCategory'
import PostJobCTA from '../components/PostJobCTA'
import FeaturedJobs from '../components/FeaturedJobs'
import Footer from '../components/Footer'
import LatestJobs from '../components/LatestJobs'

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ExploreCategory />
            <PostJobCTA />
            <FeaturedJobs />
            <LatestJobs />
            <Footer />
        </>
    )
}

export default Home