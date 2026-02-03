import React, { useState } from 'react';

function Form() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phNum: "",
        pwd: ""
    });
    const handleFormChange = (event) => {
        const { name, value } = event.target;

        setUser((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phNum: user.phNum,
            pwd: user.pwd
        }
        console.log(formData);
    }
    return (

        <div className='min-h-dvh bg-gray-100 flex flex-col justify-center items-center' >
            <div className='pb-5'>
                Hello <span className='text-purple-600'>{user.firstName} {user.lastName}</span>, this is your Email <span className='text-purple-600'>{user.email}</span>.
            </div>
            <div className='min-h-120 bg-white min-w-80 rounded-lg shadow-md '>
                <header className='text-center px-3 py-3 text-xl font-sans'>
                    Register
                </header>
                <div className='flex flex-col px-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col justify-around  py-2'>

                            <label className='font-mono text-sm font-bold text-gray-600 ' >First Name</label>
                            <input
                                name='firstName'
                                type="text"
                                className='border border-gray-200 rounded-md bg-gray-50 px-2 p-1 text-md'
                                value={user.firstName}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='flex flex-col justify-between py-2'>
                            <label className='font-mono text-sm font-bold text-gray-600'>Last Name</label>
                            <input
                                name='lastName'
                                type="text"
                                className='border border-gray-200 rounded-md bg-gray-50 px-2 p-1 text-md'
                                value={user.lastName}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='flex flex-col justify-around py-2'>
                            <label className='font-mono text-sm font-bold text-gray-600'>Email</label>
                            <input
                                name='email'
                                type="email"
                                className='border border-gray-200 rounded-md bg-gray-50 px-2 p-1 text-md'
                                value={user.email}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='flex flex-col justify-around py-2'>
                            <label className='font-mono text-sm font-bold text-gray-600 '>Phone Number</label>
                            <input
                                name='phNum'
                                type="number"
                                className='border border-gray-200 rounded-md appearance-none bg-gray-50 px-2 p-1 text-md'
                                value={user.phNum}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='flex flex-col justify-around'>
                            <label className='font-mono text-sm font-bold text-gray-600'>Password</label>
                            <input
                                name='pwd'
                                type="password"
                                className='border border-gray-200 rounded-md bg-gray-50 px-2 p-1 text-md'
                                value={user.pwd}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='flex flex-row justify-around items-center p-3 justify-items-stretch'>
                            <button type='submit' className='bg-blue-700 px-4 w-30 py-1 rounded-md hover:bg-blue-500 text-stone-200 hover:text-stone-50'>Submit</button>
                            {/* <button className='bg-red-500 px-4 py-2 w-30 rounded-md hover:bg-red-700'>Reset</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;