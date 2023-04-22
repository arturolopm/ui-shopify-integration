// import BackgroundWave from "../../assets/BackgroundWave";
import SubscribeEmail from "../forms/SubscribeEmail";
import BackgroundWave from "../../assets/BackgroundWave.svg";
import wave from "../../assets/wave.png";

const FooterSection = () => {
  return (
    <div className="relative h-[550px] ">
      <img
        className=" absolute w-full -z-10  bottom-0"
        src={wave}
        alt=""
        srcset=""
      />
      <div className="    py-12">
        <h2 className="text-center mt-24 text-[#444950] font-bold text-3xl leading-9">
          Join the green revolution <br /> without commitment
        </h2>
        <h3 className="text-center mt-6 text-gray-500">
          If you are missing something and don't want to miss future
          <br /> promotions or our future products
        </h3>
        <SubscribeEmail />
      </div>
    </div>
  );
};

export default FooterSection;
