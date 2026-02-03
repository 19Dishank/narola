import { use, useEffect, useState } from "react"

export const Index = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(() => {
        console.log(name);
    }, [name]);

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    return (
        <>
            <h1>
                count: {count}
            </h1>
            <p>{name}</p>
            <input className="border-black border" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <button className="border px-2" onClick={() => setCount(count + 1)}>increase Count</button>
        </>
    );
}