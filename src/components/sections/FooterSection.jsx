// import BackgroundWave from "../../assets/BackgroundWave";
import SubscribeEmail from "../forms/SubscribeEmail";
import wave from "../../assets/wave.png";
import pastilla1 from "../../assets/pastilla1.png";
import pastilla2 from "../../assets/pastilla2.png";
import pastilla3 from "../../assets/pastilla3.png";
import pastilla6 from "../../assets/pastilla6.png";
import pastilla4 from "../../assets/pastilla4.png";

const FooterSection = () => {
  return (
    <div className="relative h-[550px] ">
      <img
        className=" absolute w-full h-[420px] -z-20  bottom-0"
        src={wave}
        alt="Waves img as background"
      />
      <img
        className=" absolute -z-10  w-fit left-[30px] top-[135px] md:left-[105px] md:top-[164px]"
        src={pastilla1}
        alt="Waves img as background"
      />
      <img
        className=" absolute -z-10  w-fit left-[11px] top-[247px] md:left-[63px] md:top-[347px]"
        src={pastilla2}
        alt="Waves img as background"
      />
      <img
        className=" absolute -z-10  w-fit left-[152px] top-[143px] md:left-[304px] md:top-[177px]"
        src={pastilla4}
        alt="Waves img as background"
      />
      <img
        className=" absolute -z-10  w-fit left-[244px] top-[382px] md:left-[90%] md:top-[80%]"
        src={pastilla3}
        alt="Waves img as background"
      />
      <img
        className=" absolute -z-10  w-fit left-[338px] top-[261px] md:left-[95%] md:top-[40%]"
        src={pastilla6}
        alt="Waves img as background"
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
