import resume from "../assets/MOC-placeholder.png";
import { Button } from "react-scroll";
const About = () => {
  return (
    <div id="About" className="">
      <div className="lg:px-56 px-10 lg:py-10 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 className="text-[53px] font-semibold mb-8 leading-normal uppercase">
            ABOUT ME
          </h1>
          <p className=" text-[30px]">
            Every since I was young, Ive enjoyed solving problems. Whether it
            was solving a math equation in my differential equations class or
            playing chess as a 10 year old at the local park chess tournament,
            there is no better feeling than finally figuring out the answer
            youve been trying so hard to look for. With every corner I took, Ive
            looked for more problems to solve and eventually I sumbled across
            coding. Seeing as it is constantly evoloving and never ending, its
            seems like the perfect fit for someone like me.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <Button className="neno button shadow-xl hover:shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden  ">
                  <a href={resume} download="resume">
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
