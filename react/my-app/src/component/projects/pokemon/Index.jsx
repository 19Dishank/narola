import { use, useEffect, useState } from "react";

export const Pokemon = () => {
    const [pokeData, setPokeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const API = "https://pokeapi.co/api/v2/pokemon/charmander"

    // const fetchPokemonData = () => {
    //     fetch(API)
    //         .then((response) =>
    //             response.json()
    //         )
    //         .then((data) => {
    //             setPokeData(data)
    //             setLoading(false)
    //         }

    //         ).catch((error) => {
    //             console.log(error);
    //             setError(error);
    //             setLoading(false);
    //         })
    // }
    const fetchPokemonData = async() => {
    try {

        const res = await fetch(API);
        const data = await res.json();
        setPokeData(data);
        setLoading(false)
    } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
    }
}
useEffect(() => {
    fetchPokemonData();
}, []);

if (loading) {
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}
if (error) {
    return (
        <h1>error: {error.message}</h1>
    )
}
return (
    <div>
        {pokeData.name}
    </div>
)
}
