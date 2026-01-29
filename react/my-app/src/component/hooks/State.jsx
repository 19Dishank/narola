import React, { useState } from 'react';

function State(props) {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState([
        { name: "Dishank", age: 21 },
        { name: "John", age: 30 },
        { name: "Dev", age: 45 },
        { name: "Dev", age: 40 },
    ]);
    const handleCount = () => {
        setCount(count + 1);
    }
    const totalUsers = user.length
    const avgAge = user.reduce((index, ele) => index + ele.age, 0) / totalUsers;

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleCount}>Increase</button><hr />
            <div>
                {user.map((person, index) => {
                    return (
                       <li key={index}>{person.name} is {person.age} years old</li>
                    );
                })}
                <p>Total Users: {totalUsers}</p>
                <p>Average age: {avgAge}</p>
            </div>
        </>
    );
}

export default State;
