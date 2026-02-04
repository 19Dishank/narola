import React, { useMemo, useState } from 'react';
import ReactMemo from './ReactMemo';

const StateCounter = () => {
    const [count, setcount] = useState(0);
    const bioData = useMemo(() => {
        return {
            name: "Dishank",
            age: 21,
        }
    }, [])
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => setcount((prev) => prev + 1)}>Click</button>
            <ReactMemo data= {bioData}/>
        </div >

    );
};

export default StateCounter;
