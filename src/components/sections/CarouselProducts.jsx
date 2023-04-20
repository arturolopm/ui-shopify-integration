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
    <div>
      <CardProducts products={products[0]} />
    </div>
  );
};

export default CarrouselProducts;
