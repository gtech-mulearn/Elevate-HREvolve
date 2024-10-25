import About from "@/components/about";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Partners from "@/components/partners";
import Speakers from "@/components/speakers";
import Navbar from "@/components/ui/nav";
import WhyYouShould from "@/components/whyYouShould";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Landing />
      <About />
      <WhyYouShould />
      <Speakers />
      <Partners />
      <Footer />
    </div>
  );
}
