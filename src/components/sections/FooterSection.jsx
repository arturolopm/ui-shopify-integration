import BackgroundWave from "../../assets/BackgroundWave";
import SubscribeEmail from "../forms/SubscribeEmail";

const FooterSection = () => {
  return (
    <div className="relative h-[550px] ">
      <div className="  -z-10 absolute bottom-0 left-0 right-[-500px] h-[550px]">
        <BackgroundWave color={"#CAF0FF"} />
      </div>
      <div className="py-12">
        <h2 className="text-center mt-56 text-[#444950] font-bold text-3xl leading-9">
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
