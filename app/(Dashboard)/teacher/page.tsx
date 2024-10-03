"use client"
import { useState } from 'react'

const TeachersPage = () => {
  let [x, setX] = useState(0)

const add = () => {
  setX(x+100)
}

const remove = () => {
  setX(x-100)
}
  return (
    <>
    <div>TeachersPage  {x}</div>
    <button onClick={add}>Add</button>
    <button onClick={remove}>Remove</button>
    </> 

    
  )
}

export default TeachersPage