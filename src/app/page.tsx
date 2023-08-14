'use client';

import TypedComponent from "../components/typed";
import Navbar from "@/components/Navbar";
import {Image} from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {Link} from "@nextui-org/link";

const accordianClasses = {
  base: "py-0 w-full",
  title: "font-normal text-medium",
  trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
  indicator: "text-medium",
  content: "text-small px-2",
};

export default function Home() {
  return (
    <div className="flex flex-col text-off-white bg-gradient-to-b from-bg-img-top to-bg-img-btm">
      <main
        className="flex min-h-screen flex-col items-center justify-between"
        id="home"
      >
        <Navbar />
        <div className="sm:relative">
          <img
            src="/pictures/background/header-bg.png"
            width="800"
            height="800"
            alt="A laptop in a cyber punk style"
            className="sm:w-full sm:h-full object-cover blur-sm invisible sm:visible"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 py-6">
            <h1 className="text-center font-poppins sm:text-7xl text-xl font-extrabold text-white">
              Andrew Cade
            </h1>
            <h2 className="text-center font-poppins sm:text-4xl text-lg text-white pt-2 sm:pt-0">
              Software Engineer & Developer
            </h2>
          </div>
        </div>
      </main>
      
      <section className="flex flex-col items-center min-h-screen pt-20" id="knowledge">
        <h1 className="text-center sm:text-xl lg:text-6xl font-poppins font-bold">
          My Knowledge
        </h1>

        <div className="w-full sm:w-2/4 p-5 md:grid md:grid-cols-3 gap-6 mt-10 sm:mt-20 font-poppins text-off-white sm:border">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-row flex-wrap items-center">
              <Image
                isZoomed
                src="/pictures/icons/monitor.png"
                width="70"
                height="70"
                alt="A monitor outline"
                className="shrink-0"
              />
              <h2 className="pl-5 self-center sm:text-m lg:text-3xl font-bold">Software<br />Development</h2>
            </div>
            <p className="mt-5 sm:mt-0 sm:p-5 sm:text-left text-m">
              Experienced in both functional and OOP coding with .NET/C#, PHP, JavaScript, and React. Proficient in Laravel Livewire, NextJS, HTML, CSS, and JS frameworks.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center pt-20 sm:pt-0">
            <div className="flex flex-row flex-wrap items-center">
              <Image
                isZoomed
                src="/pictures/icons/secure.png"
                width="70"
                height="70"
                alt="A monitor outline"
                className="shrink-0"
              />
              <h2 className="pl-5 self-center sm:text-m lg:text-3xl font-bold">Secure<br />Development</h2>
            </div>
            <p className="mt-5 sm:mt-0 sm:p-5 sm:text-left text-m">
              Committed to top-tier Secure Software Development practices. Dedicated to continuous learning and adaptation to ensure data security and system integrity.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center pt-20 sm:pt-0">
            <div className="flex flex-row flex-wrap items-center">
              <Image
                isZoomed
                src="/pictures/icons/cyber-security.png"
                width="70"
                height="70"
                alt="A monitor outline"
                className="shrink-0"
              />
              <h2 className="pl-5 self-center sm:text-m lg:text-3xl font-bold">Cyber<br/>Security</h2>
            </div>
            <p className="mt-5 sm:mt-0 sm:p-5 sm:text-left text-m">
              Driven by a passion for Software Development, I am also on a learning path for Cyber Security, leveraging platforms like TryHackMe and HackTheBox to broaden my expertise.
            </p>
          </div>
        </div>
      </section>
      
      <section className="flex flex-col items-center min-h-screen pt-20" id="work">
        <h1 className="text-center sm:text-xl lg:text-6xl font-poppins font-bold">
          Work & Experience
        </h1>

        <div className="w-full sm:w-2/4 p-5 md:grid md:grid-cols-1 gap-6 mt-10 sm:mt-20 font-poppins text-off-white">
          <div className="flex flex-wrap justify-center items-center text-off-white">
            <Accordion>
              <AccordionItem
              key="1"
              aria-label="February 2023 - Present"
              title={<h1 className="text-success text-2xl">Software Engineer @ The IASME Consortium</h1>}
              subtitle={<p className="">February 2023 - Present</p>}>
                <p className="text-off-white">Working with PHP frameworks such as Wordpress and Laravel to create different sites for various needs. Including Restful API and internal use websites.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      
      <section className="flex flex-col items-center min-h-screen pt-20" id="portfolio">
        <h1 className="text-center sm:text-xl lg:text-6xl font-poppins font-bold">
          Portfolio
        </h1>

        <div className="w-full sm:w-2/4 p-5 md:grid md:grid-cols-1 gap-6 mt-10 sm:mt-20 font-poppins text-off-white sm:border">
          <div className="flex flex-wrap justify-center items-center">
            <Link isExternal showAnchorIcon href="https://github.com/lsvMoretti">
              Github Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
