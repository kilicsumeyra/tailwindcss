import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen bg-[#ffffff] w-full">
      <div className="flex flex-col justify-center h-full mx-auto max-w-[1000px] px-8">
        <p className="text-[#a44747] ">Hi, My name is</p>
        <h1 className="text-[#eab5b5] text-4xl sm:text-7xl font-bold">
          Sümeyra KILIÇ
        </h1>
        <h2 className="text-[#d79999] text-4xl sm:text-7xl font-bold">
          I'm Full Stack Developer
        </h2>
        <p className="text-[#a44747] py-4 max-w-[700px]">
          I'm a teacher but I find myself in software.Exploring routes to new
          visions and be a part of the new visions.Currently I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
        <Link to="work" duration={500} smooth={true}>
          <button className="flex font-bold text-[#a44747] border-[3px] bg-[#efc9c9] px-6 py-3 my-2  hover:border-[#a44747] items-center">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
