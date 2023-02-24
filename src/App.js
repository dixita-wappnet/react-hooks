import './App.css';
import React from 'react';
import UseState from './components/UseState';
// import UseEffect from './components/UseEffect';
import A from './components/A';

function App() {
  return (
    <>
       <div className='App'>
        <h1>Hello!</h1>
        <UseState/>
        <br/>
        {/* <UseEffect/> */}
        <br/>
        {/* <A nam="Ram"/> */}
        <A/>
       </div>
    </>
  );
}

export default App;
