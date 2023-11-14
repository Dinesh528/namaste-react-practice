import React,{useState,useEffect} from 'react'
import "./User.css";

export default function User() {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("useEffect");
      
  },1000);

  //cleaning up the component
  //unmounting the component
  return ()=>{
    console.log("useEffect returned");
    clearInterval(timer)
  }
  },[])
    const [count,setCount]  = useState(0);
    const [count1] = useState(1)
    console.log("render");
  return (
    <div className="usercard">
        <h1>Count = {count}</h1>
        <h1>Count 1= {count1}</h1>

        <h2>Name: Dinesh </h2>
        <h2>Location: Bangarupalem</h2>
        <h2>Address: BPM</h2>
    </div>
  )
}
