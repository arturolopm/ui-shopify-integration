const MainBtn = ({
  bgc = "bg-primary",
  textDisplay = "",
  colorText = "text-slate-800",
}) => {
  const btnclass = ` min-h-[24px] ${bgc} ${colorText} rounded-lg min-w-[70px] w-fit  text-center`;
  return <button className={btnclass}>{textDisplay}</button>;
};

export default MainBtn;
