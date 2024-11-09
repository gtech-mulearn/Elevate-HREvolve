import About from "@/components/about";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Partners from "@/components/partners";
import Speakers from "@/components/speakers";
import Countdown from "@/components/ui/countdown";
import Navbar from "@/components/ui/nav";
import WhyYouShould from "@/components/whyYouShould";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <Landing />
      <Countdown targetDate="2024-12-31T00:00:00" />
      <About />
      <WhyYouShould />
      <Speakers />
      <Partners />
      <Footer />
    </div>
  );
}
