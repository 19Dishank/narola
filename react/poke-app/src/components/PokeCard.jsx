import React, { use, useState } from 'react';
import PokeItem from './PokeItem';

function PokeCard(props) {
    const [search,setSearch] = useState("")
    return (
        <div className='flex flex-col items-center bg-slate-200'>
            <h1 className='text-5xl  font-semibold'>Pokemons</h1>
            <div className='py-3'>
                <input type="text" placeholder='Search Pokemon' 
                className='border-b bg-sky-50 placeholder:text-gray-500 px-4 py-2 font-sans' 
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                />
            </div>
            <div className='container mx-auto grid grid-cols-4 justify-items-center items-center gap-4 p-5 '>
                <PokeItem search={search} setSearch={setSearch} />
            </div>
        </div>
    );
}

export default PokeCard;