import React from 'react'
import "./Display.css"
function Display(countervalue) {
  return (
    <div className='container'>
        <h1>Counter: {countervalue.counter}</h1>
    </div>
  )
}

export default Display