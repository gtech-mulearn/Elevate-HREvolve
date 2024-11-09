import Image from "next/image";

const Speakers = () => {
  return (
    <section className="pt-32 px-8 relative">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Our Expert Speakers
        </h2>
      </div>
      <svg
        width="300"
        height="580"
        viewBox="0 0 300 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 -z-10 max-sm:hidden"
      >
        <path
          d="M-275.835 333.221C-299.675 175.207 -190.905 27.786 -32.8912 3.94675C125.122 -19.8925 272.543 88.8774 296.383 246.891C320.222 404.905 211.452 552.326 53.4384 576.165C-104.575 600.004 -251.996 491.234 -275.835 333.221ZM207.383 260.318C190.959 151.458 89.3964 76.5231 -19.4639 92.9467C-128.324 109.37 -203.259 210.933 -186.836 319.793C-170.412 428.654 -68.8493 503.588 40.0111 487.165C148.871 470.741 223.806 369.179 207.383 260.318Z"
          fill="url(#paint0_linear_73_5231)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_73_5231"
            x1="170.082"
            y1="-3.18879"
            x2="147.705"
            y2="668.224"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="#504E4D" />
          </linearGradient>
        </defs>
      </svg>

      <div className=" mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <Image
              alt="speaker"
              key={i}
              width={500}
              height={500}
              src={`/speakeres/${i + 1}.jpg`}
              className="rounded-lg w-full md:w-[50vw]"
              draggable={false}
            ></Image>
          ))}
      </div>
    </section>
  );
};

export default Speakers;
