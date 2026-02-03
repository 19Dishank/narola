import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const handleInc = () => {
        if(count >= 100) return;
        setCount(count + Number(inputValue));

    }

    const handleDec = () => {
        if(count <= 0) return;
        setCount(count - Number(inputValue))
    }
    const handleClear = () => {
        setCount(0);
        setInputValue(1);
    }
    return (
        <div className='min-h-dvh flex justify-center items-center'>
            <div className='min-h-100 bg-gray-200 min-w-200 flex flex-col '>
                <h1 className='text-center pt-3 text-2xl'>Counter App</h1>
                <div className="flex flex-1 justify-center px-5 flex-col">
                    <p className='text-2xl'>Count: {count}</p>
                    <input
                        type="number"
                        placeholder='Number inc by'
                        className='w-50 border p-1 rounded-md'
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </div>
                <div className="flex justify-center gap-4 pb-4 mx-4">
                    <button className={`basis-1/3 px-1 py-2  rounded-md bg-green-600 disabled:bg-gray-300`}
                        disabled={count >= 100 }
                        onClick={handleInc}
                    >
                        Increment
                    </button>
                    <button className={`basis-1/3 px-1 py-2  rounded-md  bg-orange-500 disabled:bg-gray-300`}
                        disabled={count <= 0 }
                        onClick={handleDec}
                    >
                        Decrement
                    </button>
                    <button className={`basis-1/3 px-1 py-2  rounded-md  bg-red-600`}
                        onClick={handleClear}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
