
import { use } from "react";
import { ContextData, useBioContext } from "./Index"

export const Home = () => {
    // const { name, age } = useBioContext(); // using custom hook
    const { name, age } = use(ContextData);  // using use hook
    return <h1>hello {name} {age} </h1>
}