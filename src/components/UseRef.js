import React, { useRef } from 'react'

export default function UseRef() {

    const inputRef = useRef()

    function handleRef() {

        console.log(inputRef,"I am Dixita Patel");
        inputRef.current.focus();
        // inputRef.current.value="XYZ";
        console.log(inputRef.current.value);
        // inputRef.current.style.color = "Red";
        inputRef.current.style.display = "none";
    }
  return (
    <div>
       <input ref={inputRef} type="text" placeholder='Enter Your Name'/>
       <button onClick={handleRef}>Click Here</button>
    </div>
  )
}
