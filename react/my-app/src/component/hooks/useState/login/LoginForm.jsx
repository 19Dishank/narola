import React, { useState } from 'react';

function LoginForm() {
    const [user, setUser] = useState({
        userName: "",
        pwd: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const logindata = {
            userName: user.userName,
            pwd: user.pwd
        }
        console.log(user);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='font-mono text-sm font-bold text-gray-600'> Username</label>
                    <input
                        type="text"
                        className='border border-gray-200 rounded-md bg-gray-50 px-2 p-1 text-md'
                        name='userName'
                        value={user.userName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='font-mono text-sm font-bold text-gray-600'>Password</label>
                    <input
                        type="password"
                        className='border border-gray-200 rounded-md bg-gray-50 px-2 p-1 text-md'
                        name='pwd'
                        value={user.pwd}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type='submit' className='bg-blue-700 px-4 w-30 py-1 rounded-md hover:bg-blue-500 text-stone-200 hover:text-stone-50'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;