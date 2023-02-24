import React, { useState } from 'react'

export default function UseState() {
    console.log('test');
    // const [count, setCount] = useState(() => {
    //     console.log('constructor');
    //     return 0;
    // })
    // const [name, setName] = useState('Increment')

    const [state, setState] = useState({
        count: 0,
        name: 'Dixita'
    })

    const count = state.count
    const name = state.name

 
    

    function increment() {

        setState(prevState => {
            return {...prevState, name:'Increment',count:prevState.count + 1}
        })
        
        // setCount(prevCount => prevCount + 1)
        
    }

    function decrement() {

        setState(prevState => {
            return {...prevState, name:'Decrement',count:prevState.count - 1}
        })
        

        // setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            {name}
            <br/>
            <br/>
            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )
}


