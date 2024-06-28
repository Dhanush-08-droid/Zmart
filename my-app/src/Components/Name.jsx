import React from 'react'
function Name(props) {
    return (
        <>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Height: {props.height}</p>
            <p>Department: {props.dept}</p>
        </>
    )
}
export default Name
