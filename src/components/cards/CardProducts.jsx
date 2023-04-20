import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import MainBtn from "../buttons/MainBtn";

const CardProducts = ({ products }) => {
  const tags = products?.tags;
  const [numberTags, setnumberTags] = useState(0);
  const [stars, setStars] = useState([<AiFillStar />]);
  useEffect(() => {
    const getTags = () => {
      if (!tags) {
        return;
      }
      const arrTags = [];
      for (let i = 0; i < tags.length; i++) {
        if (!isNaN(tags[i])) {
          arrTags.push(parseInt(tags[i]));
        }
      }

      const sum = arrTags.reduce((a, b) => a + b, 0);
      setnumberTags(sum / arrTags.length);
    };
    getTags();
  }, [tags]);
  useEffect(() => {
    const amount = Math.ceil(numberTags / 100);
    const provitionalStars = [];
    for (let i = 0; i < amount; i++) {
      if (i < 5) {
        provitionalStars.push(<AiFillStar />);
      }
    }
    setStars(provitionalStars);
  }, [numberTags]);

  return (
    <div>
      <div className=" relative w-fit">
        <img
          className=" w-[320px] h-[320px] "
          src={products?.featuredImage?.url}
          alt={products?.title}
        />
        <div className=" absolute bottom-1 w-full p-2">
          <MainBtn
            textDisplay="See more"
            bgc="bg-white/80"
            colorText="text-primary"
          />
        </div>
      </div>
      <div className=" flex gap-6  flex-wrap">
        <div className=" w-full">{products?.title}</div>
        {products?.prices.max.amount > products?.prices.min.amount && (
          <div className=" line-through text-slate-400">
            {products?.prices.max.amount}
          </div>
        )}
        <div className=" flex">
          <div className=" flex text-[#FFC658]">{stars}</div>
          <div className=" text-slate-400">({numberTags})</div>
        </div>
        <div>{products?.prices.min.currencyCode}</div>
        <div>{products?.prices.min.amount}</div>
      </div>
    </div>
  );
};

export default CardProducts;
