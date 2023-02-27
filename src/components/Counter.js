import React, { useReducer} from 'react'

const initialState = {count:0}
const reducer = (state, action) => {
      console.log(state,action);
      switch(action.type) {
        case 'Increment':
            return {count: state.count + 1}
        case 'Decrement':
            return {count: state.count - 1}
        default:
            return state; 
      }
      
}
export default function Counter() {

    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      
      <button onClick={() => {dispatch({type: 'Decrement' })}}>-</button>
      <h1>{state.count}</h1>
      <button onClick={() => {dispatch({type: 'Increment'})}}>+</button>
    </div>
  )
}
