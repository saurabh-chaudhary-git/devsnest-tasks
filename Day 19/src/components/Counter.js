import React,{useState} from 'react';

const Counter = () => {
    const [countA,setCountA]=useState(0);
    const [countB,setCountB]=useState(0);
    const [countC,setCountC]=useState(0);
    const [countD,setCountD]=useState(0);

    return (
        <div>
            <h2>There are 4 counter component instances that each manage their own state.</h2>
            <button className="block" onClick={()=>{setCountA(countA+1)}}>{countA}</button>
            <button className="block" onClick={()=>{setCountB(countB+1)}}>{countB}</button>
            <button className="block" onClick={()=>{setCountC(countC+1)}}>{countC}</button>
            <button className="block" onClick={()=>{setCountD(countD+1)}}>{countD}</button>
        </div>  
    )
}

export default Counter
