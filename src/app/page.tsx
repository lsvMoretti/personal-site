import Image from "next/image";
import TypedComponent from "../components/typed";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col p-24 text-off-white bg-gradient-to-b from-bg-img-top to-bg-img-btm">
      <main
        className="flex min-h-screen flex-col items-center justify-between relative"
        id="home"
      >
        <Navbar />
        <img
              src="/pictures/background/header-bg.png"
              width="800"
              height="800"
              alt="A laptop in a cyber punk style"
              className="absolute blur-sm"
            />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 py-6 drop-shadow-2xl">
          <h1 className="text-center font-poppins text-7xl font-extrabold">
            Andrew Cade
          </h1>
          <h2 className="text-center font-poppins text-4xl">
            Software Engineer & Developer
          </h2>
        </div>
      </main>
      <section
        className="flex flex-col items-center min-h-screen pt-20"
        id="knowledge"
      >
        <h1 className="text-center text-6xl font-poppins font-bold">
          My Knowledge
        </h1>
        <div className="flex justify-between px-4 py-8 my-20 space-x-6 border">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-start space-x-10">
            <img
              src="/pictures/icons/monitor.png"
              width="70"
              height="70"
              alt="A monitor outline"
              className="p-2"
            />
              <h2 className="text-5xl font-poppins font-bold">Software<br/>Development</h2>
            </div>
            <p className="px-10 py-5">This is a description for image 1.</p>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-start space-x-4">
            <img
              src="/pictures/icons/design.png"
              width="70"
              height="70"
              alt="A design outline"
              className="p-2"
            />
              <h2>Title 2</h2>
            </div>
            <p>This is a description for image 2.</p>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-start space-x-4">
            <img
              src="/pictures/icons/design.png"
              width="70"
              height="70"
              alt="A design outline"
              className="p-2"
            />
              <h2>Title 3</h2>
            </div>
            <p>This is a description for image 3.</p>
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
