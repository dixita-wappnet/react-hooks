import React, { createContext } from 'react';
import B from './B';


const FirstName = createContext()
const LastName =  createContext()

export default function A(props) {
    return (
        <div>
            <FirstName.Provider value="John">
                <LastName.Provider value="Wick">
                {/* <B nam={props.nam}/> */}
                <B/>
                </LastName.Provider>
            </FirstName.Provider>

        </div>
    )
}

export {FirstName}
export {LastName}
