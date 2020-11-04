import React, {useReducer} from 'react';

// reducer can only make immutable updates by copying state and changing the copy
// no async or random values allowed in reducer
// calculates new state based on state and action arguments

function ReducerHook() {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === 'counter/incrementA') {
      return ({a: state.a + 1, b:state.b});
    }    
    if (action === 'counter/incrementB') {
      return ({...state, b:state.b + 1});
    }
    return state;
  }, {
    a: 0,
    b: 0
  })


  return (<>
    <button onClick={() => dispatch('counter/incrementA')} >hook increment a</button>
    <button onClick={() => dispatch('counter/incrementB')} >hook increment b</button>
    <p>{`the current count is a: ${count.a}, b: ${count.b}`}</p>
  </>)
}

export default ReducerHook;