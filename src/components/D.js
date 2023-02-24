import React, { useContext } from 'react'
import { FirstName } from './A';
import { LastName } from './A';

export default function D(props) {
    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);
    return (
        <div>
            <h1>
                {/* {nam} */}
                {firstName} {lastName}
            </h1>
        </div>
    )
}
