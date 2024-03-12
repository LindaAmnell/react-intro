import { useState } from "react";

const Product = () => {
  const [productInfo, setProductInfo] = useState({
    name: "Hammare",
    price: 125,
    img: "http://clipart-library.com/images/rcLxeLe6i.jpg",
  });

  return (
    <div>
      <h2>{productInfo.name}</h2>
      <p>Pris: {productInfo.price} kr</p>
      <img src={productInfo.img} alt={productInfo.name} />
    </div>
  );
};

export default Product;
