import React from 'react'
import { useState } from 'react'
import Display from './Display'
function Click() {
    let [a,setCount]=useState(0);
    function handleIncrement(){
        setCount(a+1);
    }
    function handleDecrement(){
        setCount(a-1);
    }
  return (
    <div className='text-center'>
    <Display counter={a}/>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button></div>
  )
}

export default Click