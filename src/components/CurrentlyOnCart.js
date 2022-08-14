import React from 'react'
import { useSelector } from 'react-redux'

const CurrentlyOnCart = () => {
 const CurrentlyOnCart = useSelector((state)=>state.cart.products.length)


  return (
    <h5>Currently on Cart: {CurrentlyOnCart}</h5>
  )
}

export default CurrentlyOnCart