import React, { useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [n,setN]=useState("");
  return (
    <div>
      <input onChange={(e)=>setN(e.target.value)}/>
      <div>value of sum is {n}</div>  
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default UseMemo
