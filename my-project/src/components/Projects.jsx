import img1 from "../assets/Foreign-exchange.png";
import img2 from "../assets/im.png";
import img3 from "../assets/password generator.png";
import img4 from "../assets/Readme Generator.png";
import { Button } from "react-scroll";

const Projects = () => {
  return (
    <div id="Projects" className="">
      <div className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
          Projects
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-40">
          <img
            height={400}
            width={450}
            className=" flex items-center justify-center rounded-3xl h-36 w-49 border-2 border-fuchsia-800 b_glow"
            src={img1}
            alt=""
          />
          <Button className="neno button shadow-xl hover:shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden  ">
            Foreign Exchange Travel Website
            <a href="https://github.com/rdtauche/TravelWebsite"></a>
          </Button>
          <img
            height={400}
            width={450}
            className=" flex items-center justify-center rounded-3xl h-36 w-49 border-2 border-fuchsia-800 b_glow"
            src={img4}
            alt=""
          />
          <Button className="neno button shadow-xl hover:shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden  ">
            <a href="https://github.com/yourvza/Professional-README">
              Professional README Generator
            </a>
          </Button>
          <img
            height={400}
            width={350}
            className=" flex items-center justify-center rounded-3xl h-36 w-49 border-2 border-fuchsia-800 b_glow"
            src={img2}
            alt=""
          />
          <Button className="neno button shadow-xl hover:shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden  ">
            <a href="https://github.com/yourvza/Event-Planner">
              Work Day Scheduler
            </a>
          </Button>
          <img
            height={400}
            width={350}
            className=" flex items-center justify-center rounded-3xl h-36 w-49 border-2 border-fuchsia-800 b_glow"
            src={img3}
            alt=""
          />
          <Button className="neno button shadow-xl hover:shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden  ">
            <a href="https://github.com/yourvza/Javascript-criteria-based-password-generator">
              Password Generator
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
