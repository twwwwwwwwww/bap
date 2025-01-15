import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const data = async () => {
    try {
      const response = await axios.get(`https://my-json-server.typicode.com/twwwwwwwwww/bap/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    data();
  }, []);


  console.log(product)

  return (
    <div>

      <div>
        <img src={product?.img} alt={product?.title} />
        <h1>{product?.title}</h1>
        <p>가격: {product?.price}원</p>
        <p>{product?.new ? "신제품" : ""}</p>
        <p>{product?.choice ? "추천 제품" : ""}</p>
        <ul>
          {product?.size.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ProductDetail;
