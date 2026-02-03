import React from 'react';
import { useState } from 'react';

function Sortcirc() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userMessage, setUserMessage] = useState("");

    const handleUser = () => {
        if (!isLoggedIn) {
            setUserMessage("Please login first");
            return;
        }

       setUserMessage("Hello User");
    };
    const handleClear = () => setUserMessage("");
    return (
        <>
            <div className='min-h-dvh flex justify-center items-center'>
                <div className='min-h-100 bg-gray-200 min-w-200 flex flex-col '>
                    <div className="flex flex-1 justify-center items-center flex-col">
                        <p className='text-4xl'>{isLoggedIn && "You are Loggdin"}</p>
                        <p className='text-3xl'>{userMessage}</p>

                    </div>
                    <div className="flex justify-center gap-4 pb-4 mx-4">
                        <button className='basis-1/3 px-1 py-2 bg-sky-600 rounded-md' onClick={() => setIsLoggedIn(!isLoggedIn)}>
                            Login/Logout
                        </button>
                        <button className='basis-1/3 px-1 py-2 bg-sky-600 rounded-md' onClick={handleUser}>
                            Set user
                        </button>
                        <button className='basis-1/3 px-1 py-2 bg-sky-600 rounded-md' onClick={handleClear}>
                            Clear User
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sortcirc;

