import React from 'react';

function EventHandlers(props) {
    function handleBtnClick(){
        alert ("From Traditional function")
    }
    const handleBtnClick2 = () =>{
        alert("From Fat Arrow Function")
    }
    const handleBtnClick3 = (name) =>{
        console.log(`hello ${name}, welcome`)
    }
    return (
        <div>
            <button className='bg-gray-500' onClick={handleBtnClick}>Click Me</button>
            <button onClick={handleBtnClick2}>Fat Arrow Function</button>
            <button onClick={() => handleBtnClick3("Dishank")}>Fat Arrow Function</button>
            <button onClick={() => alert("hello")}>Inline arrow function</button>
        </div>
    );
}

export default EventHandlers;

