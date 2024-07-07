import { AiFillGithub } from "react-icons/ai";
import img from "../assets/profile.jpeg";

const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-10 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[53px] font-semibold mb-8 leading-normal">
          Hey There! <span className="text-fuchsia-500">Im Alfredo</span>
        </h1>
        <p className=" text-[60px]">Web Developer</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/yourvza "
                className="text-fuchsia-600 hover: text-fuchsia-500 rounded-full p-2"
              >
                <AiFillGithub className="text-[50px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={img}
        width={290}
        height={29}
        className="rounded-full border-2 p-1 border-fuchsia-500 img_glow "
        alt=""
      />
    </div>
  );
};

export default Banner;
