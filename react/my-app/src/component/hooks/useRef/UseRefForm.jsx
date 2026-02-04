import React, { useRef } from 'react';

function UseRefForm(props) {
    const name  = useRef(null)
    const password  = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name.current.value,password.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    className='border px-2'
                    placeholder='UserName'
                    ref={name}
                    
                />
                <input type="Password"
                    className='border px-2'
                    placeholder='Password'
                    ref={password}
                    
                />
                <button type='submit'
                    className='border px-2'
                >Submit</button>
            </form>
        </div>
    );
}

export default UseRefForm;