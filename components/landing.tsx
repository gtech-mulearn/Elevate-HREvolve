import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="p-8 md:px-16">
      <div className="">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              06 th Dec 2024
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to India HR Summit & Awards 2024
            </h1>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">Register</Button>
            </div>
          </div>
          <Image
            src="/landing.jpg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover object-center"
            width={800}
            height={800}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
