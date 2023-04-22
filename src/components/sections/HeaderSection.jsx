import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import MainBtn from "../buttons/MainBtn";
import useMoveX from "../../custom-hooks/useMoveX";

const HeaderSection = () => {
  // Move the carousel left or right by calling the useMoveX hook
  const handleCarouselMove = (direction) => {
    useMoveX("#carousel", direction);
  };

  return (
    <header className="p-3 h-36 md:h-auto mt-3 md:mt-6 flex flex-col md:flex-row justify-between  md:justify-around md:items-end">
      {/* Page title */}
      <h1 className="relative  text-xl md:text-4xl text-slate-800">
        {/* Button behind the title */}
        <div className="  -z-10 absolute top-1/2 left-[40px] md:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <MainBtn bgc="bg-tertiary" />
        </div>
        Discover our <br /> planet-friendly offer
      </h1>

      {/* Carousel navigation */}
      <nav className="flex">
        {/* Move carousel left */}
        <button onClick={() => handleCarouselMove(320)}>
          <MainBtn
            textDisplay={
              <AiFillLeftCircle className="bg-slate-800 text-xl rounded-full mx-auto text-white" />
            }
            bgc="bg-secondary"
          />
        </button>

        {/* Move carousel right */}
        <button onClick={() => handleCarouselMove(-320)}>
          <MainBtn
            textDisplay={
              <AiFillRightCircle className="bg-slate-800 text-xl rounded-full mx-auto text-white" />
            }
            bgc="bg-secondary"
          />
        </button>
      </nav>
    </header>
  );
};

export default HeaderSection;
