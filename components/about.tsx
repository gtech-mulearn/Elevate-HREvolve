import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className=" md:px-16 px-8 py-12 relative">
      <div className="">
        <div className="flex flex-col gap-12 md:flex-row">
          <Image
            height={500}
            width={500}
            src="/landing.jpg"
            alt="placeholder"
            className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
          />
          <div className="lg:p-10">
            <h2 className="text-balance text-5xl font-american_Purpose md:text-7xl max-sm:text-4xl">
              About HR Evolve
            </h2>
            <p className="mt-1 text-muted-foreground md:mt-6 lg:text-xl text-base text-black">
              HR Evolve is a dynamic, common community for HR professionals
              committed to improving the future of human resources. We honor the
              most practiced trends, strategies, and technologies through
              monthly sessions led by experts that provide members with
              practical insights to improve their workplaces. Join us to
              network, learn, and grow with leaders and contemporaries similarly
              passionate about reshaping HR.
            </p>

            <div className="flex flex-col lg:flex-row mt-6 gap-5">
              <Button className="w-full sm:w-auto text-lg p-6 ">
                <Link href={"https://makemypass.com/elevate-2024"}>
                  Register Now
                </Link>
              </Button>
              <Button variant={"outline"} className="text-lg p-6">
                <Link
                  className="flex justify-center items-center"
                  href={"https://hrevolve.org"}
                >
                  Learn about HR Evolve <ChevronRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
