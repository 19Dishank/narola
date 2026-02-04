import React, { useReducer } from 'react';

const UseReducreCounter = () => {

    const initialState = {
        count: 0,
        inc: 2,
        dec: 2
    }

    const reducer = (state, action) => {
        
        switch (action.mode) {
            case "INC":
                return {
                    ...state,
                    count: state.count + state.inc
                }
            case "DEC":
                return {
                    ...state,
                    count: state.count - state.dec
                }
                case "RESET":
                return {
                    ...state,
                    count: 0
                }
            default:
                return state
        }
    }
   

    const [state, distpatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>Count: {state.count}</h1>
            <button
                onClick={() => distpatch({ mode: "INC" })}
                className='border bg-violet-400 px-4 py-2'
            >INC
            </button>
            <button
                onClick={() => distpatch({ mode: "DEC" })}
                className='border bg-violet-400 px-4 py-2'
            >DEC
            </button>
            <button
                onClick={() => distpatch({ mode: "RESET" })}
                className='border bg-violet-400 px-4 py-2'
            >RESET
            </button>
        </>
    );
};

export default UseReducreCounter;