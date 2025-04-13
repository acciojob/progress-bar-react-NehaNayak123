
import React, {useState, useEffect } from "react"
import './../styles/App.css';

const App = () => {
  const [count , setCount]=useState(0)
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCount((c)=>{
                if(c>=100){
                    clearInterval(interval) 
                    return c
                }
                return c+1;
            })
        },1000)
      
        return ()=>clearInterval(interval)
    },[])
  return (
    <div>
        {/* Do not remove the main div */}
      <h1>Progress Bar</h1>
    <div id="barOuter">
        <p id="barInner" style={{width:`${count}%`}}></p>
        <p>{count}%</p>
    </div>
    </div>
  )
}

export default App
