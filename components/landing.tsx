"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Landing = () => {
  const container = useRef(null!);
  const landing_container = useRef(null!);
  const topSvgRef = useRef(null);
  const bottomSvgRef = useRef(null);

  const toggleScroll = (enable: boolean) => {
    document.body.style.overflow = enable ? "auto" : "hidden";
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const topSvg = topSvgRef.current;
      const bottomSvg = bottomSvgRef.current;
      if (topSvg && bottomSvg) {
        gsap.to(topSvg, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(bottomSvg, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: landing_container }
  );

  useGSAP(
    () => {
      toggleScroll(false);

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
        },
      });
      tl.to(".word-container", {
        x: "0%",
        ease: "power4.out",
        duration: 0.5,
        delay: 1,
      })
        .to(".char0", { y: 0, ease: "power4.out" })
        .to(".char0", {
          y: -100,
          ease: "power4.out",
        })
        .to(".char1", { y: 0, ease: "power4.out" }, "-=1.5")
        .to(".char1", {
          y: -100,
          ease: "power4.out",
        })
        .to(".char2", { y: 0, ease: "power4.out" }, "-=1.5")
        .to(".char2", {
          y: -100,
          ease: "power4.out",
        })
        .to(".char3", { y: 0, ease: "power4.out" }, "-=1.5")
        .to(".char3", {
          y: -100,
          ease: "power4.out",
        })
        .to(
          ".word-container",
          {
            x: "50%",
            ease: "power4.out",
            duration: 0.5,
          },
          "-=1.5"
        )
        .to(".E", { scale: 250, duration: 1.5, ease: "power4.out" }, "a")
        .to(".loader", { background: "white", ease: "power4.out" }, "a")
        .to(".loader", {
          clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)",
          ease: "power4.out",
          duration: 1.5,
          onComplete: () => {
            toggleScroll(true);
            landing_animation();
          },
        });
    },
    { scope: container }
  );

  const { contextSafe } = useGSAP({ scope: container });

  const ani_words = ["ngage", "ncourage", "nhance", "volve"];
  const landing_animation = contextSafe(() => {
    console.log("landing animation");
    const tl = gsap.timeline({ duration: 0.2, ease: "power2.out" });
    tl.to("h1", {
      y: 0,
      opacity: 1,
    })
      .to(
        "span",
        {
          y: 0,
          opacity: 1,
          delay: 0.1,
        },
        "a"
      )
      .to(
        "p",
        {
          y: 0,
          opacity: 1,
          delay: 0.15,
        },
        "a"
      )
      .to(
        "img",
        {
          y: 0,
          opacity: 1,
          delay: 0.2,
        },
        "a"
      );
  });
  return (
    <section ref={container} className="p-8 px-0">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        className="loader absolute overflow-hidden h-screen w-full bg-black top-0 left-0 z-50 flex justify-center items-center text-white text-5xl md:text-8xl uppercase font-bold"
      >
        <div className="relative container word-container translate-x-[50%]">
          <span className="E inline-block">E</span>
          {ani_words.map((word, main_index) => (
            <span
              style={{
                display: "inline-block",
              }}
              key={main_index}
              className="absolute flex overflow-clip"
            >
              {word.split("").map((letter, index) => (
                <span
                  key={index}
                  style={{
                    transform: `translateY(${100}%)`,
                  }}
                  className={`char${main_index} inline-block`}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div
        ref={landing_container}
        className="min-h-screen flex gap-5 justify-center items-center flex-col relative"
      >
        <svg
          ref={topSvgRef}
          width="342"
          height="594"
          viewBox="0 0 342 594"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute max-sm:hidden top-0 right-0 -z-0 w-[50vw] md:w-[25vw]"
        >
          <path
            d="M4.21951 341.552C-20.2031 179.672 91.2283 28.6436 253.108 4.22104C414.988 -20.2015 566.017 91.2298 590.439 253.11C614.862 414.99 503.43 566.018 341.55 590.441C179.67 614.863 28.6421 503.432 4.21951 341.552ZM499.262 266.866C482.436 155.342 378.388 78.5732 266.864 95.3987C155.34 112.224 78.5717 216.272 95.3972 327.796C112.223 439.32 216.27 516.088 327.795 499.263C439.319 482.438 516.087 378.39 499.262 266.866Z"
            fill="url(#paint0_linear_969_605)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_969_605"
              x1="461.048"
              y1="-3.0891"
              x2="438.123"
              y2="684.753"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.723038" stop-color="#333333" />
              <stop offset="0.894552" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          ref={bottomSvgRef}
          width="300"
          height="580"
          viewBox="0 0 300 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute max-sm:hidden bottom-0 left-0 -z-0 w-[50vw] md:w-[25vw]"
        >
          <path
            d="M-275.836 333.221C-299.675 175.207 -190.905 27.786 -32.8917 3.94675C125.122 -19.8925 272.543 88.8773 296.382 246.891C320.221 404.905 211.452 552.326 53.4379 576.165C-104.576 600.004 -251.997 491.234 -275.836 333.221ZM207.382 260.318C190.959 151.458 89.3959 76.5231 -19.4644 92.9467C-128.325 109.37 -203.26 210.933 -186.836 319.793C-170.412 428.654 -68.8498 503.588 40.0106 487.165C148.871 470.741 223.806 369.179 207.382 260.318Z"
            fill="url(#paint0_linear_969_604)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_969_604"
              x1="170.081"
              y1="-3.18879"
              x2="147.704"
              y2="668.224"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stop-color="#504E4D" />
            </linearGradient>
          </defs>
        </svg>

        <h1 className="translate-y-14 opacity-0 uppercase lg:text-[10rem] text-8xl max-sm:text-7xl font-american_Purpose leading-[0.7] flex flex-col justify-center items-center">
          Elevate&apos;24
          <span className="translate-y-14 opacity-0 md:text-3xl text-lg uppercase tracking-widest font-sans">
            shaping the future
          </span>
        </h1>
        <Button className={cn("text-xl p-8 mt-12 bg-[#333333]")}>
          <Link href={"https://makemypass.com/elevate-2024"}>Register Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default Landing;
