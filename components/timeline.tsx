import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Timeline = () => {
  const schedules = [
    {
      time: "10:00 AM",
      activity: "Welcome Address",
      speakers: ["Deepa Nair, 6D Technologies HREvolve Member"],
      topic: null,
    },
    {
      time: "10:05 AM",
      activity: "Opening Ceremony",
      speakers: [
        "Sreekumar V (Centre Head, Tata Elxsi | Secretary, GTech)",
        "Col. Sanjeev Nair (CEO, Technopark)",
        "Anoop Ambika, CEO, Kerala Start-up Mission",
        "Deepu S Nath, MD, Faya",
      ],
      topic: null,
    },
    {
      time: "10:00 AM",
      activity: "Keynote Address",
      speakers: [
        "Raj Raghavan (CPO at CoreStack Inc, Former HR Leader at Indigo, Amazon APAC & ME, GE India)",
      ],
      topic: "Shaping the Future: Leading with Agility, Innovation and Purpose",
    },
    {
      time: "11:00 AM",
      activity: "Power Talk-1",
      speakers: [
        "Dedeepya Ajith John, Senior Director - South & Advisory Services, APAC, SHRM",
      ],
      topic: "YOU AS THE CONSULTATIVE ADVISOR MOVING FROM INFLENCE TO INSIGHT",
    },
    {
      time: "11:00 AM",
      activity: "Master Talk-1",
      speakers: ["Biju Dominic"],
      topic:
        "Shaping the Future of Human Behaviour with Insights from Neuroscience",
    },
    {
      time: "12:00 PM",
      activity: "Power Talk-2",
      speakers: ["Muhammed Rafi (Founder & Chief Mentor, Magic of Change)"],
      topic: "Rewire to Reshape: Preparing Our Minds for the Future",
    },
    {
      time: "01:00 PM",
      activity: "Lunch Break",
      speakers: [],
      topic: null,
    },
    {
      time: "02:00 PM",
      activity: "Master Talk-2",
      speakers: ["Aravind Warrier, HR Leader at Volvo India"],
      topic: "Experience Value Proposition as a Strategic Advantage",
    },
    {
      time: "04:00 PM",
      activity: "Power Talk-3",
      speakers: ["Pratap G (Founder, Leadership Experiences)"],
      topic: "People Function as an Innovation Hub",
    },
    {
      time: "05:00 PM",
      activity: "Panel Discussion",
      speakers: [
        "Moderator – Dr. Jayasankar Prasad",
        "Suja Chandy (Zafin)",
        "Deepa Sarojammal (Reflections)",
        "Vagheese Cherian (UST) - to be confirmed",
        "Leyones Abraham (Infosys)",
      ],
      topic: "Navigating Disruptions: Merging Technology with Human Ingenuity",
    },
    {
      time: "06:00 PM",
      activity: "Closing Remarks",
      speakers: ["HR Evolve Member"],
      topic: null,
    },
  ];
  return (
    <div id="agenda" className="flex justify-center items-center flex-col">
      <h2 className="my-6  font-american_Purpose text-5xl md:text-7xl max-sm:text-4xl">
        Shedule
      </h2>
      <div className="container border-2 rounded-lg p-8">
        <Table className="">
          <TableHeader className="md:text-3xl text-xl font-american_Purpose">
            <TableRow>
              {/* <TableHead className="text-[rgba(60,60,60,1)] w-[150px]">
                Time
              </TableHead> */}

              <TableHead className="text-[rgba(60,60,60,1)] w-[160px]">
                Name
              </TableHead>
              <TableHead className="text-[rgba(60,60,60,1)]">
                speakers
              </TableHead>
              <TableHead className="text-[rgba(60,60,60,1)] text-right">
                activity
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.map((shedule, index) => (
              <TableRow key={index}>
                {/* <TableCell className="font-medium">{shedule.time}</TableCell> */}
                <TableCell>{shedule.activity}</TableCell>

                <TableCell className="text-right flex flex-wrap max-sm:w-[60vw]">
                  {shedule.speakers.map((speaker, i) => (
                    <p key={i}>{speaker}</p>
                  ))}
                </TableCell>
                <TableCell className="text-right">{shedule.topic}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Timeline;
