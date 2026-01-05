import { useEffect } from "react";

const Counter=({count,data})=>{

    useEffect(()=>{
        console.log("Mounting Phase Only");
    },[]);

    useEffect(()=>{
        console.log("Updating Phase Only");
    },[count]);

    useEffect(()=>{
        return()=>{
            console.log("Unmount Phase Only");
        }
    },[]);

    return(
        <div>
        <h1>Counter : {count}</h1>
        <h1 style={{border:"1px solid black",fontSize:"16px", height:"50px"}}>Data : {data}</h1>
        </div>
    )
}

export default Counter;