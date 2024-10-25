import { ChevronRight, CircleCheckBig } from "lucide-react";

import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-32 md:px-16 px-8">
      <div className="">
        <div className="flex flex-col gap-12 md:flex-row">
          <img
            src="https://www.indiahrsummit.com/wp-content/uploads/2019/10/about-01.png"
            alt="placeholder"
            className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
          />
          <div className="lg:p-10">
            <h2 className="text-balance text-2xl font-bold md:text-4xl ">
              Built with the latest technology stack
            </h2>
            <p className="mt-1 text-muted-foreground md:mt-6">
              The India HR Summit 2024 (IHRS2024) is the most prestigious annual
              conference on human resources for top executives and HR
              professionals in India organized By Synnex Group.
            </p>

            <p className="mt-1 text-muted-foreground md:mt-6">
              It is a non-profit and self-funded event for HR professionals to
              keep abreast with the trends, best practices and to strengthen
              their network. India HR Summit 2024” with the theme “Moving
              Towards the Next Gen HR” seeks to provide a platform for industry
              stakeholders to work out a road map for unleashing the true
              potential of the Business.
            </p>

            <div className="flex mt-6 gap-5">
              <Button className="w-full sm:w-auto">Register</Button>
              <Button variant={"outline"} className="">
                Learn more <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
