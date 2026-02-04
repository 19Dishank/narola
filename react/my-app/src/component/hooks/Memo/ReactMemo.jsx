import React, { memo, useRef, useState } from 'react';

const ReactMemo = (props) => {
    const rendercount = useRef(0)
    const [count, setcount] = useState(0);
    return (
        <div>
            {/* <div>
                <h1>count : {count}</h1>
                <button onClick={() => setcount((prev) => prev + 1)}>Click</button>
            </div > */}
            <p>nothing changed but i rendred {rendercount.current++} times</p>
            <p>hello {props.data.name}</p>
        </div>
    );
};

export default memo(ReactMemo);