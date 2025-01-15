import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProdCard = ({ item }) => {
  // console.log(item)

  const navigate = useNavigate()
  const showD = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showD}>
      <img src={item?.img} alt={item?.title} />
      <div>{item?.choice == true ? "choice" : ""}</div>
      <h2>{item?.title}</h2>
      <h3>가격: {item?.price}</h3>
      <p>{item?.new == true ? "신제품" : ""}</p>
      <ul className='size'>
        {item?.size.map((size) => (
          <li key={size}>{size}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProdCard
