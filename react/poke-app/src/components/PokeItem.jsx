import React, { useEffect, useState } from 'react';
import "../index.css"
function PokeItem(props) {

    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)
    const API = "https://pokeapi.co/api/v2/pokemon/?limit=100"

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json();

            const detailedPokemonData = data.results.map(async (ele) => {
                const res = await fetch(ele.url)
                const data = await res.json();
                return data;
            })
            
            const finalData = await Promise.all(detailedPokemonData);
            
            setPokemon(finalData);
            setLoading(false)
        } catch (error) {
            setError(error);
            setLoading(false);
        }


    }
    console.log(pokemon);

    useEffect(() => {
        fetchPokemon()
    }, [])
    if (error) return (
        <h1>{error.message}</h1>
    )
    if (loading) return (<h1>Loading...</h1>)

        const searchData = pokemon.filter((ele)=>
            ele.name.toLowerCase().includes(props.search.toLowerCase())
        )

    return (
        <>
            {
                searchData.map((ele) => {
                    return (
                        <div key={ele.id} className='rounded-md shadow-sm shadow-black h-100 w-70 bg-blue-950 flex justify-center flex-col'>

                            <div className='flex justify-center bg-sky-100 py-4 items-center blob max-h-50 
                                            transition-transform duration-500 ease-in-out hover:-rotate-30 group'>
                                <img
                                    className='hover:scale-125 transition-transform duration-500 ease-in-out group-hover:rotate-30 max-w-30'
                                    src={ele.sprites.other.dream_world.front_default}
                                    alt="fixed image"
                                />
                            </div>
                            <div className='text-center text-xl text-white font-sans capitalize'>
                                <h1>{ele.name}</h1>
                            </div>

                            <div className='flex justify-center px-4 pt-2'>
                                <p className='bg-green-200 w-fit mx-auto px-4 py-0.5 rounded-xl capitalize'>
                                    {ele.types.map((cType) => cType.type.name).join(", ")}
                                </p>
                            </div>
                            <div className='grid grid-cols-2 py-4 px-8 text-white text-center'>
                                <p>Height: {ele.height}</p>
                                <p>Weight: {ele.weight}</p>
                                <p>Speed: {ele.stats[5].base_stat}</p>
                                <p>Attack: {ele.stats[1].base_stat}</p>

                            </div>
                            <div className='text-center text-white max-h-10 text-sm'>
                                <p>Abilities: {
                                    ele.abilities
                                        .map((curr) => curr.ability.name)
                                        .join(", ")
                                }</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default PokeItem;




{/* <div className='h-90 w-70 bg-blue-950 flex justify-center flex-col'>

            <div className='flex justify-center bg-sky-100 py-4 items-center blob max-h-50 
                    transition-transform duration-500 ease-in-out hover:-rotate-30 group'>
                <img
                    className='transition-transform duration-500 ease-in-out group-hover:rotate-30 max-w-30'
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                    alt="fixed image"
                />
            </div>
            <div className='text-center text-xl text-white font-sans'>
                <h1>Pokemon Name</h1>
            </div>

            <div className='flex justify-center px-4 pt-2'>
                <p className='bg-green-200 w-fit mx-auto px-4 py-0.5 rounded-xl '>
                    poke, type
                </p>
            </div>
            <div className='grid grid-cols-2 py-4 px-8 text-white text-center'>
                <p>width=sdfdsf</p>
                <p>width=23423</p>
                <p>width=23423</p>
                <p>width=2543</p>
            </div>
        </div> */}