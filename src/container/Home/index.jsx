import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import BannerSection from "../../component/landingPage/BannerSection";
import FeatureSection from "../../component/landingPage/FeatureSection";
import CurriculumSection from "../../component/landingPage/CurriculumSection";
import TestimonySection from "../../component/landingPage/TestimonySection";
import CarrearSection from "../../component/landingPage/CarrearSection";
import JournySection from "../../component/landingPage/journySection";

export default function Home() {
    return (
        <>
            <Navbar />
            <BannerSection/>
            <FeatureSection/>
            <CurriculumSection/>
            <TestimonySection/>
            <CarrearSection/>
            <JournySection/>
            <Footer />
        </>
    );
}