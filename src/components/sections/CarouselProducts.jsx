import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import CardProducts from "../cards/CardProducts";
import MainBtn from "../buttons/MainBtn";
const CarrouselProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [showProducts, setshowProducts] = useState(false);

  const showAll = () => {
    setshowProducts((showProducts) => !showProducts);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await axios.get(
        "https://gradistore-spi.herokuapp.com/products/all"
      );
      setProducts(fetchedProducts.data.products.nodes);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className=" overflow-hidden p-3 relative h-[400px]">
        <div
          id="#carousel"
          className="h-[400px]  flex gap-6 -translate-x-[500px] duration-300">
          {products &&
            products.map((product, i) => {
              if (i <= 10) {
                return (
                  <CardProducts
                    key={i}
                    products={product}
                  />
                );
              }
            })}
        </div>
      </div>
      <div
        onClick={() => showAll()}
        className=" my-6 mx-auto  w-fit">
        <MainBtn
          bgc="bg-primary"
          textDisplay="BROWSE ALL PRODUCTS"
          colorText="text-white"
        />
      </div>
      {showProducts && (
        <div className=" gap-5 content-between place-items-center mt-14 grid grid-cols-4 p-3  ">
          {products &&
            products.map((product, i) => (
              <CardProducts
                key={i}
                products={product}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default CarrouselProducts;
