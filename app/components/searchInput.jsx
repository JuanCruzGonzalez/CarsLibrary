import { useState } from "react";

export function SearchInput(){
  const [carToSearch, setCarToSearch] = useState();

    return(
        <div className="search-form flex">
        <input 
            onChange={(e) => {setCarToSearch(e.target.value)}}
            autoFocus={true} 
            className="text-[14px] text-gray-800 border sm:text-[18px] rounded-l-full py-3 ps-14 pe-2 outline-none max-w-[calc(100%-72px)] w-[400px]" 
            placeholder="Search Car" type="text" 
            />
            <a 
            href={`/search?car=${carToSearch}`}
            className="flex items-center bg-neutral-950 text-white rounded-r-full px-10"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </a>
        </div>
    )
}