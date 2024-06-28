import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducer/counterSlice'
function Counter() {
   // const [count, setCount] = useState(0)
  // const {increment}=useContext()
 const count=useSelector((state)=>
    state.counter.count
 )
 const dispatch=useDispatch()
 const handleIncrement=()=>{
    dispatch(increment())
 }
    function Increment() {
        setCount((p) => p + 1)
        setCount((p) => p + 2)
    }
    function Decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const [val,setValue]=useState(0);
    const handleValChange=(e)=>{
        setValue(e.target.value)
    }
    return (
        <>
            <div>Counter value:{count}</div>
            <input type="number" value={val} onChange={handleValChange} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}
export default Counter