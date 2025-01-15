import React from 'react'
import ProductDetail from '../Page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ loginok }) => {
  console.log(loginok)
  return loginok == true ? <ProductDetail /> : <Navigate to="/login" />
}

export default PrivateRoute
