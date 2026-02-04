import React, { useRef, useId } from 'react';

function ForwardRef() {
    const username = useRef(null)
    const pwd = useRef(null)
    const handleSubmit = (a) => {
        a.preventDefault();
        console.log(username.current.value, pwd.current.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Index  label="username" ref={username} />
            <Index label="password" ref={pwd} />
            <input className='border px-2' type="submit" value="Submit" />
        </form>
    );
}

export default ForwardRef;

export const Index = (props) => {
    const id = useId();
    return (
        <>
            <label htmlFor={id}>{props.label}</label>
            <input className='border px-2' type="text" ref={props.ref} />
        </>
    )
}