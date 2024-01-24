import React from 'react'
import { useState } from 'react'
function State() {
    const [value, setValue] = useState(0);

    const add = () => {
        setValue(value + 2)
    }
  return (
    <div>
        <p> Value is:{value}</p>
        <button onClick={add}>Add Value</button>
    </div>
  )
}

export default State