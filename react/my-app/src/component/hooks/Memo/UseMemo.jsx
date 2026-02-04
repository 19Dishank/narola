import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [count, setcount] = useState(0);

    return (
        <>
            <Counter />
            <div>
                <h1>count : {count}</h1>
                <button onClick={() => setcount((prev) => prev + 1)}>Click</button>
            </div >
        </>
    )
};

export default UseMemo;

const Counter = () => {
    const sum = () => {
        let i = 0;
        for (i = 0; i <= 10000000; i++) {
            i = i + 1
        }
        return i;
    }
    const total = useMemo(() => {
        return sum();
    }, [])
    // const total = sum();
    return (
        <div>
            <p>{total}</p>
        </div>
    );

}