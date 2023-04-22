const BackgroundWave = ({ color }) => {
  return (
    <div className=" h-[550px] flex items-end">
      <svg viewBox="0 0 1440 320">
        <path
          fill={color}
          d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,106.7C672,107,768,181,864,181.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default BackgroundWave;
