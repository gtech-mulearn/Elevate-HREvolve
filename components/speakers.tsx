import Image from "next/image";

const Speakers = () => {
  return (
    <section className="pt-32 px-8">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Our Expert Speakers
        </h2>
      </div>
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
