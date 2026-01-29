import React from 'react';

function EventHandlersInProps(props) {
    return (
        <>
            <ChildEventHandlersInProps
                propsOnClick={() => { alert("button Clicked") }}
                propsOnMouseEnter={() => { alert("button hoverd") }}
            />
        </>
    );
}

export default EventHandlersInProps;
function ChildEventHandlersInProps(props) {
    const greetUser = (name) => {
        console.log(`hello ${name}`);
    }
    return (
        <>
            <button onClick={props.propsOnClick}>Click me</button>
            <button onMouseEnter={props.propsOnMouseEnter}>Hover me</button>
            <button onDoubleClick={() => greetUser("Dishank")}>Click me Twise</button>
        </>
    );
}