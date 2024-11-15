"use client";
import { ReactLenis } from "lenis/react"; //hade to change everyting to client becaues of lenis🥲🥲

import About from "@/components/about";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Location from "@/components/location";
import Partners from "@/components/partners";
import Speakers from "@/components/speakers";
import Timeline from "@/components/timeline";
import Countdown from "@/components/ui/countdown";
import Navbar from "@/components/ui/nav";
import WhyYouShould from "@/components/whyYouShould";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="flex flex-col relative">
        <Navbar />
        <Landing />
        <Countdown targetDate="2024-11-21T09:00:00+05:30" />
        <About />
        <WhyYouShould />
        <Speakers />
        <Timeline />
        <Partners />
        <Location />
        <Footer />
      </div>
    </ReactLenis>
  );
}
