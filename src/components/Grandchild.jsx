import { click } from '@ember/test-helpers'
import React from 'react'

export default function Grandchild({grandbutton}) {
  return (
    <div>This is grandchild child component <br/>
    <button onClick={grandbutton}>click</button></div>
  )
}
