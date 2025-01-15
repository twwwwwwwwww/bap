import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProdCard from '../component/ProdCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const fetchData = async () => {
    const searchQuery = query.get('q') || ""; // URL에서 검색어 가져오기
    console.log("검색어:", searchQuery);
  
    try {
      // JSON Server에서 전체 데이터를 가져옵니다.
      const response = await axios.get(` https://my-json-server.typicode.com/twwwwwwwwww/bap/products?q=${searchQuery}`);
      
      // 클라이언트 측에서 데이터를 필터링합니다.
      const filteredData = response.data.filter(item =>
        item.title.includes(searchQuery) // title 필드에 검색어 포함 여부 확인
      );
      console.log("필터링된 데이터:", filteredData);
      setProductList(filteredData); // 필터링된 데이터를 상태에 저장
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchData(); // 컴포넌트가 처음 렌더링되거나 쿼리 값이 변경될 때 호출
  }, [query]);

  return (
    <div className='contents'>
      {productList.map((menu, idx) => (
        <ProdCard item={menu} key={idx} />
      ))}
    </div>
  );
};

export default ProductAll;
