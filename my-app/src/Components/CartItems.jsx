import React from "react"
const CartItem=(props)=>{
    const {id,image,title,price,quantity}=props.item
    const dispatch=useDispatch()
    const deleteItem=()=>{
        dispatch(itemDeleted(id))
    }
    return(
        <div className="cart-item">
            <img src={image} height="50px" />
            <div className="title">{title}</div>
            <div className=''>{quantity}</div>
            <div>{price}</div>
            <button onClick={deleteItem}>Delete</button>
        </div>

    )
}
export default CartItem