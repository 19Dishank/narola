import React, { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";


function ToggleSwitch(props) {
    const [toggleMode, setToggleMode] = useState(true);
    const handleToggle = () => {
        setToggleMode(!toggleMode);

    }
    const light = {
        backgroundColor: "oklch(98.4% 0.003 247.858)",
        translate: "133px"
    }
    const dark = {
        backgroundColor: "oklch(90.1% 0.058 230.902)",
        translate: "0px"
    }
    return (
        <div className='flex justify-center h-160 items-center ' >
            <div className={`h-27 px-2 w-60 rounded-[100rem] flex items-center ${toggleMode ? "bg-sky-200" : "bg-zinc-800"}`} onClick={handleToggle}>
                <div style={toggleMode ? light : dark} className=' h-22 w-22  rounded-[100rem] flex justify-center items-center duration-500'>
                    <span className=' text-2xl subpixel-antialiased uppercase font-bold text-black font-stretch-extra-expanded font-sans'>{toggleMode ? <IoMdSunny className='text-black'/> : <FaMoon className='text-amber-500' />}</span>
                </div>
            </div>
        </div>
    );
}

export default ToggleSwitch;