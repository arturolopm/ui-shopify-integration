import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import MainBtn from "../buttons/MainBtn";

// This component renders a card with product information

const CardProducts = ({ products }) => {
  // The tags and number of tags state are set here
  const tags = products?.tags;
  const [numberTags, setnumberTags] = useState(0);

  // The stars state is set here
  const [stars, setStars] = useState([<AiFillStar />]);

  // The tags are summed and averaged to get the number of tags for each product
  useEffect(() => {
    const getTags = async () => {
      try {
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
      } catch (error) {
        console.log(error);
      }
    };
    getTags();
  }, [tags]);

  // The number of tags is used to calculate how many stars the product should have
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

  // The HTML5 semantics are used to give meaning to the structure of the code
  return (
    <article>
      <figure>
        <img
          className=" md:w-[320px] min-w-[180px] md:min-w-[320px] md:h-[320px] "
          src={products?.featuredImage?.url}
          alt={products?.title}
        />
        <figcaption>
          <MainBtn
            textDisplay="See more"
            bgc="bg-white/80"
            colorText="text-primary"
          />
        </figcaption>
      </figure>
      <section>
        <h2>{products?.title}</h2>
        {products?.prices.max.amount > products?.prices.min.amount && (
          <p className="line-through text-slate-400">
            {products?.prices.max.amount}
          </p>
        )}
        <div className="flex">
          <div className="flex text-[#FFC658]">{stars}</div>
          <div className="text-slate-400">({numberTags})</div>
        </div>
        <p>{products?.prices.min.currencyCode}</p>
        <p>{products?.prices.min.amount}</p>
      </section>
    </article>
  );
};

export default CardProducts;
