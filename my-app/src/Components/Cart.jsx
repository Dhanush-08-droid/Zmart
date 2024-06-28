import React from 'react'
import CartItem from './CartItems'
import { useSelector } from 'react-redux'
const Cart=()=>
  {
    const items=useSelector((state)=>state.count.items)
    return(
      <>
      <div>Cart</div>
      {items.map((item)=>(<CartItem item={item}/>))}
      </>
    )
  }
export default Cart