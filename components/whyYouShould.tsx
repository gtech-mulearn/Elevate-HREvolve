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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray<ContainerElement>(".elem-container").forEach((item) => {
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
      });
    });
  });

  return (
    <section ref={container} className="px-16 pt-16 w-full">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Why You Should Attend
        </h2>
      </div>
      <div className=" mt-16 flex gap-8 flex-wrap justify-center">
        {data.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-between items-end elem-container container",
              {
                "flex-row-reverse": i % 2 === 0,
              }
            )}
          >
            <div className="w-1/2 _text-content">
              <h1 className="font-american_Purpose text-7xl mb-8">
                {item.title}
              </h1>
              <div className="text-3xl tracking-tight">{item.description}</div>
            </div>
            <div className="overflow-y-clip">
              <Image
                src={`/why/img${i + 1}.webp`}
                alt="why attend"
                width={500}
                height={500}
                className="rounded-lg _images"
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
