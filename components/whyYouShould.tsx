"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type ContainerElement = Element & {
  querySelector(selector: string): Element | null;
};

const WhyYouShould = () => {
  const data = [
    {
      title: "Build a Culture that Thrives",
      description:
        "Learn how to create high-performance cultures that align with strategic goals and boost employee engagement.",
    },
    {
      title: "Put Well-being at the Center",
      description:
        "Walk away with ideas you can put into place tomorrow to tackle real-world HR issues and improve workplace practices.",
    },
    {
      title: "Connect, Collaborate, and Grow",
      description:
        "Network with industry leaders and build connections that fuel growth and innovation.",
    },
    {
      title: "Walk Away with Real-World Solutions",
      description:
        "Take home strategies and toolkits ready for immediate implementation.",
    },
    {
      title: "Create a Workplace Where People Thrive",
      description:
        "Learn how to build inclusive, people-centered workplaces that empower individuals.",
    },
    {
      title: "Be Part of HR's Evolution",
      description:
        "Contribute to shaping the future of HR by engaging in transformative discussions.",
    },
  ];

  const container = useRef(null!);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils
        .toArray<ContainerElement>(".elem-container")
        .forEach((item) => {
          const image = item.querySelector("._images");
          const text = item.querySelector("._text-content");
          gsap.to(image, {
            scrollTrigger: {
              trigger: item,
              start: "top 30%",
              end: "bottom 20%",
              scrub: true,
              // markers: true,
            },
            yPercent: 25,
            duration: 1,
            ease: "power2.inOut",
          });
          gsap.to(text, {
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
              // markers: true,
            },
            yPercent: -50,
            duration: 1,
            ease: "power2.inOut",
          });
        });
      gsap.to("svg", {
        yPercent: 250,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom top",
          scrub: 1,
          // markers: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="px-16 pt-16 w-full relative">
      <svg
        width="218"
        height="449"
        viewBox="0 0 218 449"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 z-0"
      >
        <path
          d="M446.2 258.203C464.648 135.928 380.478 21.8494 258.203 3.40196C135.928 -15.0455 21.8495 69.1236 3.40209 191.399C-15.0454 313.674 69.1237 427.752 191.399 446.2C313.674 464.647 427.753 380.478 446.2 258.203ZM72.2727 201.789C84.9817 117.55 163.574 59.5635 247.813 72.2725C332.052 84.9815 390.038 163.574 377.329 247.813C364.62 332.052 286.028 390.038 201.789 377.329C117.55 364.62 59.5636 286.028 72.2727 201.789Z"
          fill="url(#paint0_linear_1_2073)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_2073"
            x1="101.137"
            y1="-2.11972"
            x2="118.453"
            y2="517.438"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0104101" stop-color="#5F5D5C" />
            <stop offset="0.894552" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="156"
        height="421"
        viewBox="0 0 156 421"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 bottom-1/2 -z-[1]"
      >
        <path
          d="M152.854 179.29C170.126 293.773 91.3203 400.582 -23.1629 417.854C-137.646 435.126 -244.455 356.32 -261.726 241.837C-278.998 127.354 -200.193 20.5452 -85.7099 3.27337C28.7733 -13.9985 135.582 64.8068 152.854 179.29ZM-197.245 232.109C-185.346 310.98 -111.762 365.271 -32.8911 353.372C45.9798 341.473 100.271 267.889 88.3721 189.018C76.4729 110.147 2.88928 55.856 -75.9816 67.7551C-154.853 79.6542 -209.144 153.238 -197.245 232.109Z"
          fill="url(#paint0_linear_1_788)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_788"
            x1="-170.22"
            y1="423.023"
            x2="-154.007"
            y2="-63.4252"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0553736" stop-color="#5F5D5C" />
            <stop offset="0.894552" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty font-american_Purpose text-5xl md:text-7xl max-sm:text-4xl">
          Why You Should Attend
        </h2>
      </div>
      <div className=" mt-16 flex gap-8 flex-wrap justify-center">
        {data.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-between gap-5 items-end elem-container container",
              {
                "flex-row-reverse": i % 2 === 0,
              }
            )}
          >
            <div className="w-1/2 _text-content">
              <h1 className="font-american_Purpose xl:text-7xl lg:text-5xl text-3xl mb-8">
                {item.title}
              </h1>
              <div className=" lg:text-3xl text-2xl tracking-tight">
                {item.description}
              </div>
            </div>
            <div className="overflow-y-clip">
              <Image
                src={`/why/img${i + 1}.webp`}
                alt="why attend"
                width={500}
                height={500}
                className="rounded-lg _images max-lg:w-[40vw]"
                draggable={false}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyYouShould;
