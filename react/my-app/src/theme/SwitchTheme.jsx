import { useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";
export const SwitchTheme = () => {
    const [theme, setTheme] = useState(null)
    return (
        <>
            <div className={`h-screen w-full bg-white  grid  place-items-center dark:bg-zinc-900 ${theme ? "dark" : ""}`}>
                <h1 className="dark:text-white">
                    Theme Mode : {theme ?? "Light"}
                </h1>
                <div className="bg-zinc-100 p-2 mx-auto w-25 rounded-lg dark:bg-zinc-700">

                    <button
                        className="p-3  bg-transparent hover:bg-zinc-200 rounded-lg text-black dark:hover:bg-zinc-100/10 dark:text-white"
                        onClick={() => {
                            setTheme(null)
                        }}
                    ><GoSun /></button>
                    <button
                        className="p-3  bg-transparent hover:bg-zinc-200 rounded-lg text-black dark:hover:bg-zinc-100/10 dark:text-white"
                        onClick={() => {
                            setTheme('dark')
                        }}
                    ><GoMoon /></button>
                </div>
            </div>
        </>
    )
}