import React, { useState, useMemo } from 'react'

export default function UseMemo() {

    const [countone, setCountone] = useState(0);
    const [counttwo, setCounttwo] = useState(0);
    function increment() {
        setCountone(countone + 1);

    }
    function decrement() {
        setCounttwo(counttwo - 1);

    }
    const isEven = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) { }
        return countone % 2 === 0

    }, [countone])
    return (
        <div>
            <button onClick={increment}>Count One {countone} </button>
            {isEven ? 'Even' : 'odd'}
            <br />
            <br />
            <button onClick={decrement}>Count Two {counttwo} </button>
        </div>
    )

}
