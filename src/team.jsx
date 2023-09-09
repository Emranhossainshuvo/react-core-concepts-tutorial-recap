import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Players: {count} </h2>
            <button onClick={()=>{setCount(count+1)}}>Upgrade</button>
            <button onClick={()=>{setCount(count-1)}}>Disgrade</button>
        </div>
    )
}