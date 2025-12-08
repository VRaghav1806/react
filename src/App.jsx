import React from 'react'


function App() {
  const productlist=[{name:"laptop",discription:"this is laptop",price:2000},{name:"mobile",discription:"this is mobile",price:1000}];
  return (
    <>
    <h1>Product List</h1>
    {productlist.map((i,s)=>(<p key={s}><h2>{i.name}</h2> <h3>Discription:{i.discription} </h3><h3>Price:{i.price}</h3> --------------------------------------</p>))}
    </>
  )
}

export default App
