import React, { useContext } from 'react'
import ThemeButton from './ThemeButton'
import { Countercontext } from '../Context/Counter'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {
    const { count, Incre } = useContext(Countercontext)
    const cartItems=useSelector((state)=>state.cart.items)
    return (
        <>
            <header>
                <div className='logo'>LMART</div>
                <div className='menu'>
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Product">PRODUCT</Link>
                    <Link to="/Cart">CART-{cartItems.length}</Link>
                    <ThemeButton />
                </div>
            </header>
            {/* <div>NO OF SWITCHES : {count}</div>
            <button onClick={Incre}>INCREMENT</button> */}
        </>
    )
}
export default Header
