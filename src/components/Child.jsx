import React from 'react'

export default function Child({custombutton}) {
  return (
    <div>This is a child component <br/>
    
    <button onClick={custombutton}>click</button>
    

    </div>
  )
}
