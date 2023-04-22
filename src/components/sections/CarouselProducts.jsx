import axios from "axios";
import { useEffect, useState } from "react";
import CardProducts from "../cards/CardProducts";
const CarrouselProducts = () => {
  const [products, setProducts] = useState([]);
  const [carouselPosition, setcarouselPosition] = useState("letf-[24px]");
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
      <div className=" p-3 relative h-[400px]">
        <div
          id="#carousel"
          className="h-[400px] flex gap-6  duration-300">
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

      <div className=" mt-14 flex gap-4 p-3 flex-wrap ">
        {products &&
          products.map((product, i) => (
            <CardProducts
              key={i}
              products={product}
            />
          ))}
      </div>
    </>
  );
};

export default CarrouselProducts;
