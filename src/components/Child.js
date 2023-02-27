import React, { useState, useEffect } from 'react'

export default function Child(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(props.getItems)
    }, [props.getItems])
    
    return (
        <div>
            <h1>hello</h1>     
            {items && items.map((item) => {
                return <div key={item}>{item}</div>
            })}
        </div>
    )
}
