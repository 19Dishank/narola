import { useState } from "react";

export const LiftUpState = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <InputFun
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <DisplayFun inputValue={inputValue}/>
        </>
    );
}
function InputFun({inputValue, setInputValue}) {
    return (
        <>
            <input 
            className="border rounded-md"
            type="text" 
            placeholder="Enter Your name" 
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            />
        </>
    );
}
function DisplayFun({ inputValue }) {
    return (
        <>
        <h1 className="text-zinc-500 font-medium font-mono">You typed: {inputValue}</h1>
        </>
    );
}