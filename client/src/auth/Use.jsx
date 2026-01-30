import React,{useEffect,useState} from 'react'

function Use() {
    let[f,setF]=useState("🍏");
    useEffect(()=>{
        if(f==="🍏"){
            setF("🍎");
        }
        else{
            setF("🍏");
        }
    },[f]);//f=state variable it renders ehen state variable changes
  return (
    <>
    <div>
      <h1>fruit:{f}</h1>
    </div>
    </>
  )
}

export default Use
