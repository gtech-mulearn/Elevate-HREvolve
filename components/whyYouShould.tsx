import { CalendarRange } from "lucide-react";

const WhyYouShould = () => {
  const data = [
    {
      title: "Stay in the know",
      description:
        "Learn from the latest human resource trends, strategies, and technologies shaping the industry.",
    },
    {
      title: "Actionable Strategies",
      description:
        "Walk away with ideas you can put into place tomorrow to tackle real-world HR issues and improve workplace practices.",
    },
    {
      title: "Meet and Network",
      description:
        "Network with industry experts, C-level peers, and thought leaders that drive HR innovation.",
    },
    {
      title: "Discover the Next Generation of Tools",
      description:
        "Get up close with the next generation of HR tech and solutions that enable better, more efficient workplaces.",
    },
    {
      title: "Community Growth",
      description:
        "Multiply these efforts with a friendly community networking around the future of HR and professional development.",
    },
  ];
  return (
    <section className="px-16 pt-16 w-full">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Why You Should Attend
        </h2>
      </div>
      <div className=" mt-16 flex gap-8 flex-wrap justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-24 items-center  max-w-72 bg-gray-100 p-8 rounded-lg shadow-xl"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <CalendarRange size={50} />
              <p className="text-center align-text-top text-lg font-bold ">
                {item.title}
              </p>
            </div>

            <p className="text-center align-text-top text-lg font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyYouShould;
