const MainBtn = ({
  bgc = "bg-primary",
  textDisplay = "",
  colorText = "text-slate-800",
}) => {
  const btnclass = ` min-h-[24px] ${bgc} ${colorText} rounded-lg min-w-[70px] w-full py-1 px-2 font-bold text-center`;
  return <button className={btnclass}>{textDisplay}</button>;
};

export default MainBtn;
