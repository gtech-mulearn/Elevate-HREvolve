import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className=" md:px-16 px-8 py-12 relative">
      <svg
        width="138"
        height="363"
        viewBox="0 0 138 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-36 right-0 z-0 max-sm:hidden"
      >
        <path
          d="M2.96207 208.637C-11.9287 109.937 56.0123 17.8536 154.713 2.96283C253.413 -11.9279 345.496 56.0131 360.387 154.713C375.278 253.413 307.337 345.497 208.637 360.388C109.936 375.279 17.8528 307.338 2.96207 208.637ZM304.795 163.1C294.536 95.1028 231.097 48.2962 163.1 58.5549C95.1021 68.8136 48.2955 132.253 58.5541 200.25C68.8128 268.248 132.252 315.054 200.25 304.796C268.247 294.537 315.054 231.098 304.795 163.1Z"
          fill="url(#paint0_linear_73_7466)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_73_7466"
            x1="281.496"
            y1="-1.49425"
            x2="267.518"
            y2="417.891"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5F5D5C" />
            <stop offset="0.894552" />
          </linearGradient>
        </defs>
      </svg>

      <div className="">
        <div className="flex flex-col gap-12 md:flex-row">
          <img
            src="https://www.indiahrsummit.com/wp-content/uploads/2019/10/about-01.png"
            alt="placeholder"
            className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
          />
          <div className="lg:p-10">
            <h2 className="text-balance text-5xl font-american_Purpose md:text-7xl max-sm:text-4xl">
              About HR Evolve
            </h2>
            <p className="mt-1 text-muted-foreground md:mt-6 lg:text-xl text-base">
              HR Evolve is a dynamic, common community for HR professionals
              committed to improving the future of human resources. We honor the
              most practiced trends, strategies, and technologies through
              monthly sessions led by experts that provide members with
              practical insights to improve their workplaces. Join us to
              network, learn, and grow with leaders and contemporaries similarly
              passionate about reshaping HR.
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
