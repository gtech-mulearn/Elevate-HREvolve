import { ChevronRight } from "lucide-react";

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
              WHAT IS ELEVATE?
            </h2>
            <p className="mt-1 text-muted-foreground md:mt-6">
              It's a high-profile HR conclave designed to bring together
              over 250 HR professionals, CEOs, and business leaders.
              The event aims to redefine human resource practices and
              explore strategies for shaping future-ready HR solutions.
              An opportunity to foster connections, inspire innovation,
              and transform the way HR operates in today's dynamic
              workplace.
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
