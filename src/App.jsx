import { useEffect } from 'react';
import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState("");
  const handleSave=()=>{
    const user={
      name:name,
      role:"Student"
    };
    localStorage.setItem("Name",JSON.stringify(user));
  }
  return (
    <>
      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSave}>Save</button>
      <p>{localStorage.getItem("Name")}</p>
    </>
  )
}
