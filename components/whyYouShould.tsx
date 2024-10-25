import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarRange } from "lucide-react";

const WhyYouShould = () => {
  const data = [
    "The Biggest & Most Prestigious HR Summit & Awards in India",
    "Meet everyone who can help your HR Tech ideas grow.",
    "How HR leaders can best address challenges at Work?",
    "Experts Speaker In The Field",
    "An Exclusive Startup Zone",
    "Generate Sales Leads",
  ];
  return (
    <section className="px-16 pt-16 w-full">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Why You Should Attend
        </h2>
      </div>
      <div className=" mt-16 flex gap-8 flex-wrap justify-center">
        {/* {people.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
          </div>
        ))} */}
        {data.map((item) => (
          <div
            key={item}
            className="flex flex-col justify-between gap-24 items-center  max-w-60 bg-gray-100 p-8 rounded-lg"
          >
            <CalendarRange size={50} />

            <p className="text-center align-text-top text-lg font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyYouShould;
