import Image from "next/image";
import TypedComponent from "../components/typed";
import Navbar from "@/components/Navbar";

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

        <div className="w-full sm:w-3/4 p-5 md:grid md:grid-cols-3 gap-5 mt-10 sm:mt-20 font-poppins text-off-white sm:border">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-row flex-wrap items-center">
              <img
                src="/pictures/icons/monitor.png"
                width="70"
                height="70"
                alt="A monitor outline"
                className="shrink-0"
              />
              <h2 className="pl-5 self-center sm:text-m lg:text-4xl font-bold">Software<br />Development</h2>
            </div>
            <p className="mt-3 sm:mt-0 sm:p-5 sm:text-left text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sapien faucibus et molestie ac feugiat sed. Sed turpis tincidunt id aliquet risus. Et ultrices neque ornare aenean euismod elementum. Sed felis eget velit aliquet sagittis id consectetur purus ut. Egestas congue quisque egestas diam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nibh mauris cursus mattis molestie a iaculis at erat. Arcu non odio euismod lacinia. Non blandit massa enim nec. Vitae ultricies leo integer malesuada nunc vel risus commodo. Facilisis sed odio morbi quis commodo odio aenean. Volutpat blandit aliquam etiam erat.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-row flex-wrap items-center">
              <img
                src="/pictures/icons/monitor.png"
                width="70"
                height="70"
                alt="A monitor outline"
                className="shrink-0"
              />
              <h2 className="pl-5 self-center sm:text-m lg:text-4xl font-bold">Software<br />Development</h2>
            </div>
            <p className="mt-3 sm:mt-0 sm:p-5 sm:text-left text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sapien faucibus et molestie ac feugiat sed. Sed turpis tincidunt id aliquet risus. Et ultrices neque ornare aenean euismod elementum. Sed felis eget velit aliquet sagittis id consectetur purus ut. Egestas congue quisque egestas diam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nibh mauris cursus mattis molestie a iaculis at erat. Arcu non odio euismod lacinia. Non blandit massa enim nec. Vitae ultricies leo integer malesuada nunc vel risus commodo. Facilisis sed odio morbi quis commodo odio aenean. Volutpat blandit aliquam etiam erat.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-row flex-wrap items-center">
              <img
                src="/pictures/icons/monitor.png"
                width="70"
                height="70"
                alt="A monitor outline"
                className="shrink-0"
              />
              <h2 className="pl-5 self-center sm:text-m lg:text-4xl font-bold">Software<br />Development</h2>
            </div>
            <p className="mt-3 sm:mt-0 sm:p-5 sm:text-left text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sapien faucibus et molestie ac feugiat sed. Sed turpis tincidunt id aliquet risus. Et ultrices neque ornare aenean euismod elementum. Sed felis eget velit aliquet sagittis id consectetur purus ut. Egestas congue quisque egestas diam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nibh mauris cursus mattis molestie a iaculis at erat. Arcu non odio euismod lacinia. Non blandit massa enim nec. Vitae ultricies leo integer malesuada nunc vel risus commodo. Facilisis sed odio morbi quis commodo odio aenean. Volutpat blandit aliquam etiam erat.
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen" id="work">
        {" "}
        {/* replace with your preferred classes */}
        {/* your content here */}
      </section>
    </div>
  );
}
