import React from 'react'
import { motion } from "framer-motion";
import HeroSection from '../components/Home/HeroSection';
import FocusArea from '../components/Home/FocusArea';
import AnimatedTextSection from '../components/Home/AnimatedTextSection';
import OfferingsSection from '../components/Home/OfferingsSection';
import WorkSection from '../components/Home/WorkSection';
import FooterSection from '../components/Home/FooterSection';


const Home=() => {
    return (
        <div className="w-full bg-white">
            <main>
                {/* Hero Section with Image */}
                <HeroSection />


                <FocusArea />

                <AnimatedTextSection />

                <OfferingsSection />

                <WorkSection />




            </main>
        </div>
    )
}


export default Home
