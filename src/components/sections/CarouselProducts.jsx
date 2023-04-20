import axios from "axios";
import { useEffect, useState } from "react";
import CardProducts from "../cards/CardProducts";
const CarrouselProducts = () => {
  const [products, setProducts] = useState([]);
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
    <div className=" flex gap-4 flex-wrap">
      {products &&
        products.map((product, i) => (
          <CardProducts
            key={i}
            products={product}
          />
        ))}
    </div>
  );
};

export default CarrouselProducts;
