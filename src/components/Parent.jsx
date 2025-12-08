import React from 'react'
import Child from './Child'

export default function Parent() {
  const [count,setCount]=React.useState(0);
  const incriment=()=>{setCount(count+1);}
  return (
    <div>This is the parent component<br/>
    <h1>{count}</h1>
    <Child custombutton={incriment}/>
    
    </div>
  )
}
