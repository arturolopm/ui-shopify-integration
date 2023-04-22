const useMoveX = (id, move) => {
  const el = document.getElementById(id);
  const x = el.getBoundingClientRect().x;
  el.style.transform = `translateX(${x + move}px)`;
};

export default useMoveX;
