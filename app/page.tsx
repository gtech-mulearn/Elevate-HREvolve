import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Partners from "@/components/partners";
import Speakers from "@/components/speakers";
import Navbar from "@/components/ui/nav";
import WhyYouShould from "@/components/whyYouShould";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Landing />
      <WhyYouShould />
      <Speakers />
      <Partners />
      <Footer />
    </div>
  );
}
