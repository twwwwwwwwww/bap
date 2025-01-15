import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'



const Navbar = () => {

  const menu = ['T-shirts', 'Tops', 'Shirts', 'Sweats', 'Coats & Jackets', 'Pants']

  const navigate = useNavigate()
  const goToLogoin = () => {
    navigate("/login")
  }
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어을 읽어와서 url 변경
      let keyword = event.target.value
      console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>

      <div>
        <div className='login' onClick={goToLogoin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className='logobox'>
        <img src="https://int.bape.com/cdn/shop/files/BAPE_LOGO_5ab56a10-b38a-4a10-8268-0c70116700f6.jpg?v=1721631550&width=500" alt='logo' />
      </div>

      <div className='box'>
        <div className='nav'>
          <ul>
            {menu.map(menu => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
        </div>
        <div className='search'>
          <input type='text' onKeyPress={(event) => search(event)} />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
