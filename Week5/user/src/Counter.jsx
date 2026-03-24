import {useState} from 'react'
function Counter(){

    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

    const reset=()=>{
        setCount(0)
    }
    return(
        <div className='text-center p-10 border'>
            <h1 className='text-6xl'>Count: {count}</h1>
            <button className='bg-green-600 p-2 ml-4' onClick={increment}>+</button>
            <button className='bg-red-600 p-2 ml-4' onClick={decrement}>-</button>
            <button className='bg-amber-500 p-2 ml-4' onClick={reset}>reset</button>
        </div>
    )
}
 
export default Counter;