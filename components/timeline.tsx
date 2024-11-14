import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Timeline = () => {
  const schedules = [
    {
      time: "9:00 AM",
      activity: "Registration and Networking",
      speaker: null,
      topic: null,
    },
    {
      time: "10:00 AM",
      activity: "Welcome address",
      speaker: null,
      topic: null,
    },
    {
      time: "10:15 AM",
      activity: "Inaugural function",
      speaker: null,
      topic: null,
    },
    {
      time: "11:00 AM",
      activity: "Keynote Address",
      speaker: "Raj Raghavan",
      speakerTitle: "Chief People & Business Officer at CogniZant Inc",
      topic: "Shaping the Future: Leading with Agility, Innovation and Purpose",
    },
    {
      time: "11:45 AM",
      activity: "Power Talk",
      speaker: "Debashis Das",
      speakerTitle: "Senior Director - South & Advisory Services, APAC, SHRM",
      topic: "Leadership by SHRM",
    },
    {
      time: "12:15 PM",
      activity: "Special Address",
      speaker: "Pratap G.",
      speakerTitle: "CEO, GreyHound Experience",
      topic:
        "People Function as an Innovation Hub: Driving Culture of creativity and Experimentation",
    },
    {
      time: "2:00 PM",
      activity: "Special Address",
      speaker: "Rip Dominic",
      speakerTitle:
        "Chief Evangelist, Fractal Analytics & Chairman, FiresNite Consulting",
      topic:
        "Shaping the Future of Human Behaviour with Insights from Neuroscience",
    },
    {
      time: "2:45 PM",
      activity: "Special Address",
      speaker: "Muhammad Rafi",
      speakerTitle: "Founder & Chief Mentor, Nucleus of Change",
      topic: "Rewire to Reshape: Preparing Our Minds for the Future",
    },
    {
      time: "3:30 PM",
      activity: "Special Address",
      speaker: "Sujjesh Weerio",
      speakerTitle: "HR Leader at Nielsen India",
      topic: "Experience Value Proposition as a Strategic Advantage",
    },
    {
      time: "4:00 PM",
      activity: "Panel Discussion",
      speakers: [
        {
          name: "Soja Cherian",
          title: "CSO, Zaffin",
        },
        {
          name: "Leeyonce Maria",
          title: "Senior Manager HR, Infosys",
        },
        {
          name: "Varghese Charles",
          title: "Head - HR, Strategy & Consulting, UST - (TBC)",
        },
        {
          name: "HR Leader",
          title: "awaiting confirmation",
        },
        {
          name: "Diyabashkar Prasad",
          title: "Director, ICDMAT",
        },
      ],
      topic: "Merging Technology with Human Ingenuity",
    },
    {
      time: "5:00 PM",
      activity: "Closing ceremony",
      speaker: null,
      topic: null,
    },
  ];

  return (
    <div className="p-6 sm:p-10">
      <h2 className="font-american_Purpose text-5xl md:text-7xl max-sm:text-4xl text-center">
        Event Schedule
      </h2>
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-8 dark:after:bg-gray-400/20">
        {schedules.map((schedule, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div>
                  {schedule.time}
                  <span className="text-gray-500 ml-20">
                    {schedule.activity}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-4">
                  <div className="w-1/4">
                    <p className="text-gray-500">Activity</p>
                    <p className="font-bold">{schedule.activity}</p>
                  </div>
                  <div className="w-3/4">
                    <p className="text-gray-500">Speaker</p>
                    {schedule.speaker ? (
                      <p className="font-bold">{schedule.speaker}</p>
                    ) : (
                      <p className="font-bold">TBA</p>
                    )}
                    {schedule.speakerTitle && (
                      <p className="text-gray-500">{schedule.speakerTitle}</p>
                    )}
                  </div>
                </div>
                {schedule.topic && (
                  <div className="mt-4">
                    <p className="text-gray-500">Topic</p>
                    <p className="font-bold">{schedule.topic}</p>
                  </div>
                )}
                {schedule.speakers && (
                  <div className="mt-4">
                    <p className="text-gray-500">Speakers</p>
                    <ul>
                      {schedule.speakers.map((speaker) => (
                        <li key={speaker.name}>
                          <p className="font-bold">{speaker.name}</p>
                          <p className="text-gray-500">{speaker.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
