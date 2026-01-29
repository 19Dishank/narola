import React from 'react';

function Obj(props) {
    const person = {
        name: "john",
        age: 21
    }
    const user = { ...person, age: person.age + 1 }
    return (
        <div>
            {Object.entries(user).map(([key, value], i) => {
                return <li key={i}>{key} : {value}</li>
            })}
            

        </div>
    );
}

export default Obj;