import React, { useReducer } from 'react'

function Reducer() {

    const reducer= (oldState, action) => {
            switch(action.type){
                case "INC":
                    return oldState + action.payload;
                case "DEC":
                    return oldState - action.payload;
                case "MUL":
                    return oldState * action.payload;
            }
        };

    const [count, dispatch]=useReducer(reducer,0);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch({type:"INC", payload:1})}>Increment</button>
        <button onClick={() => dispatch({type:"DEC", payload:1})}>Decrement</button>
        <button onClick={() => dispatch({type:"MUL", payload:2})}>Multiply</button>
    </div>
  )
}

export default Reducer