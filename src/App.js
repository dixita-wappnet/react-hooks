import './App.css';
import React from 'react';
// import UseState from './components/UseState';
// import UseEffect from './components/UseEffect';
// import A from './components/A';
// import Counter from './components/Counter';
// import UseMemo from './components/UseMemo';
// import Parent from './components/Parent';
import UseRef from './components/UseRef';

function App() {
  return (
    <>
       <div className='App'>
        {/* <h1>Hello!</h1> */}
        {/* <UseState/> */}
        <br/>
        {/* <UseEffect/> */}
        <br/>
        {/* <A nam="Ram"/> */}
        {/* <A/> */}
        <br/>
        {/* <h1> useReducer Hook</h1> */}
        {/* <Counter/> */}
        <br/>
        {/* <h1> useMemo Hook</h1>
        <UseMemo/> */}
        {/* <h1>useCallback Hook</h1>
        <Parent/> */}
        <h1>useRef Hook</h1>
        <UseRef/>
       </div>
    </>
  );
}

export default App;
