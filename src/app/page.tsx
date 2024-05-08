"use client";

import TypedComponent from "../components/typed";
import Navbar from "@/components/Navbar";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Link } from "@nextui-org/link";
import moment from 'moment';

const accordianClasses = {
  base: "py-0 w-full",
  title: "font-normal text-medium",
  trigger:
    "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
  indicator: "text-medium",
  content: "text-small px-2",
};


export default function Home() {

const startDate = moment('2023-02-01');
const currentDate = moment();
const daysSince = currentDate.diff(startDate, 'days');
const minutesSince = currentDate.diff(startDate, 'minutes');

  return (
    <div className="flex flex-col justify-center items-center text-off-white bg-gradient-to-b from-bg-img-top to-bg-img-btm min-h-screen">
      <main
        className="flex flex-col items-center justify-center flex-grow"
        id="home"
      >
        {/* <Navbar /> */}
        <div className="block">
          
        <TypedComponent
            strings={[
              "<span>Hey, <span class='text-picton-blue text-bold'>I'm Andrew.</span></span>",
              "<span>I'm a Software Engineer at <span class='text-iasme-yellow text-bold'>The IASME Consortium</span></span>",
              "<span>I have worked here for <span class='text-bold'>" + daysSince + "</span> days</span>",
              "<span>That translates to <span class='text-bold'>"+minutesSince+"</span> minutes</span>",
              "I enjoy the challenge of development.",
              "Follow me on my journey...",
            ]}
            startDelay={300}
            backDelay={300}
            className="text-center text-3xl"
          />
          </div>
      </main>
    </div>
  );
}
