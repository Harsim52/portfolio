import grid1 from "../assets/coding-pov.png";
import Card from "../components/Card";
import img1 from "../assets/logos/react.svg";
import img2 from "../assets/logos/tailwindcss.svg";
import img3 from "../assets/logos/html5.svg";
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef(null);
  return (
    <section
      className="c-space section-spacing
    "
    >
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={grid1}
            alt="coding-pov"
            className="absolute scale-[1.75] -top-[1rem] -right-[5rem] md:scale-[3] md:left-50 md:inset-y-10  lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Harsimran</p>
            <p className="subtext">
              Over the last two years, I’ve dived deep into web development,
              learning key technologies and building real-world projects to
              sharpen my frontend skills.{" "}
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex justify-center items-center w-full h-full "
          >
            <p className="flex items-end text-5xl text-gray-500">
              Code is Carft
            </p>
            <Card
              text="Tailwindcss"
              style={{ rotate: "75deg", top: "30%", left: "40%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Principles"
              style={{ rotate: "-30deg", top: "60%", left: "10%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Responsive Design"
              style={{ rotate: "45deg", top: "60%", left: "60%" }}
              containerRef={grid2Container}
            />
            <Card
              text="React"
              style={{ rotate: "20deg", top: "10%", left: "2%" }}
              containerRef={grid2Container}
            />
            <Card
              text="JS"
              style={{ rotate: "30deg", top: "10%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image={img1}
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image={img2}
              style={{ rotate: "30deg", top: "10%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image={img3}
              style={{ rotate: "30deg", top: "30%", left: "5%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-3 grid-black-color">
          <div className="z-10 w-[50%]"></div>
          <p className="headtext">Time Zone</p>
          <p className="subtext">
            I'm based in India, and open to remote work worldwide.
          </p>
          <figure className="absolute left-[30%] top-[15%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-4 grid-special-color">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext ">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-5 grid-default-color">
          <div className="z-10 w-[50%]">
            <p className="headtext" >Tech stack</p>
            <p className="subtext">I specialize in a variety  of languages, frameworks and tools that allow me to  build robust and scalable applications</p>
          </div>
          <div className="absolute inset-y-0 w-full h-full start-[50%] md:scale-125 md:inset-y-9">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
