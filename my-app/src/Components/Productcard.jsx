import React from 'react'
import { useDispatch } from 'react-redux';
import { itemsAdded } from '../reducer/cartSlice';

function Productcard(props) {
    console.log(props.product)
    const {title,description,price,image}=props.product ||{};
    const dispatch=useDispatch()
    const addItems=()=>{
      dispatch(itemsAdded(props.product))
    }
    return (
    <div className='box'>
    <div><img src={image} className='image'/></div>
    <div className='tit'>{title}</div>
    <div className='desc'>{description}</div>
    <div className='pri'>${price}</div>
    <button onClick={addItems}>Add To Cart</button>
    </div>
  )
}
export default Productcard
