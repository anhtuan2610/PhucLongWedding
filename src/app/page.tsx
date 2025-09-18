"use client";

import Menu from "../components/home/menu";
import Image from "next/image";
import Services from "../components/home/services";
import Videos from "../components/home/videos";
import About from "../components/home/about";
import Partners from "../components/home/partners";
// import Blogs from "../components/home/blog";
import Feedbacks from "../components/home/feedbacks";
import ContactForm from "../components/home/contact-form";
import Footer from "../components/home/footer";
import Header from "../components/home/header";
import { useState } from "react";
import ExperienceStats from "@/components/home/experience-stats";
import FadeInSection from "@/components/common/fade-insection";

export default function Home() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="flex-1 bg-white min-h-screen overflow-x-hidden">
      <Header />
      <div className="h-[1px] w-full bg-orange-400"></div>
      <Menu />

      {/* banner */}
      <div className="relative aspect-[16/9]">
        {!videoError ? (
          <video
            src="/videos/banner.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/home/banner-placeholder.png"
            onError={() => setVideoError(true)}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src="/images/home/banner-placeholder.png"
            alt="banner fallback"
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* content */}
      <div className="px-2 flex justify-center mb-8">
        <div className="max-w-[1180px] mx-auto">
          <FadeInSection delay={0.2}>
            <Services />
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Videos />
          </FadeInSection>
        </div>
      </div>

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <Partners />
      </FadeInSection>

      <FadeInSection>
        <ExperienceStats />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <Feedbacks />
      </FadeInSection>

      <FadeInSection>
        <ContactForm />
      </FadeInSection>

      <Footer />
    </div>
  );
}
