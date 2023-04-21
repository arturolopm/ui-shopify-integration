import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import MainBtn from "../buttons/MainBtn";

const HeaderSection = () => {
  //   const leftArrow = <div className=" "></div>;
  return (
    <div className=" mt-6 flex justify-around items-end">
      <h1 className=" relative text-[44px] text-slate-800">
        <div className=" absolute -z-10 top-[15px] left-[-10px] ">
          {" "}
          <MainBtn bgc="bg-tertiary" />
        </div>
        Discover our <p>planet-friendly offer</p>
      </h1>
      <div className=" mb-4 flex">
        <MainBtn
          textDisplay={
            <AiFillLeftCircle className="bg-slate-800 text-xl  rounded-full mx-auto text-white" />
          }
          bgc="bg-secondary"
        />
        <MainBtn
          textDisplay={
            <AiFillRightCircle className="bg-slate-800 text-xl rounded-full mx-auto text-white" />
          }
          bgc="bg-secondary"
        />
      </div>
    </div>
  );
};

export default HeaderSection;