"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCarsFromDataBase } from "../actions";

export default function Car(){
    const [cars, setCars] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const searchParams = useSearchParams();
    const search = searchParams.get('car');
    const [carToSearch, setCarToSearch] = useState();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const fetchedCars = await fetchCarsFromDataBase();
                setCars(fetchedCars)
            } catch (error) {
                console.log(error)
            }
        }
        if (search) {
            fetchCar();
        }
    }, [search]);

    useEffect(() => {
        // Función para realizar la búsqueda híbrida
        const hybridSearch = (cars, search) => {
          if (!cars ||!search) return [];

          // Elimina los espacios de la cadena de búsqueda
          const cleanedSearch = search.replace(/\s/g, '').toLowerCase();

          // Elimina los espacios de los nombres en los datos y luego realiza la búsqueda
          const exactMatch = cars.filter(item => item.brand.replace(/\s/g, '').toLowerCase() === cleanedSearch);
          const partialMatch = cars.filter(item => item.brand.replace(/\s/g, '').toLowerCase().includes(cleanedSearch));
          return [...exactMatch,...partialMatch];
        };

        // Realiza la búsqueda híbrida
        const searchResults = hybridSearch(cars, search);
        setSearchResults(searchResults);
      }, [cars, search]);

    return (
        <>
        <main className="p-5">
            <h2 className="text-5xl font-bold mt-10 mb-10 w-full text-center">Search</h2>
            <h3 className="text-2xl mb-10">Car: {search}</h3>
            <div className="search-form flex">
              <input 
                onChange={(e) => {setCarToSearch(e.target.value)}}
                autoFocus={true} 
                className="text-[14px] text-gray-800 border sm:text-[18px] rounded-l-full py-2 ps-14 pe-2 outline-none max-w-[calc(100%-72px)] w-[300px] mb-10" 
                placeholder="Search Car" type="text" 
              />
              <a 
                href={`/search?car=${carToSearch}`}
                className="flex items-center bg-neutral-950 text-white rounded-r-full px-10 mb-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </a>
            </div>
            {/* Renderiza los datos si están disponibles */}
        {!searchResults ? (
            <svg className="animate-spin size-5 text-white block mx-auto mt-[100px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-50" cx="12" cy="12" r="10" stroke="#000" strokeWidth="4"></circle>
              <path className="opacity-100" fill="#000" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        ) : (
          searchResults.length <= 0 ?
            <svg className="animate-spin size-5 text-white block mx-auto mt-[100px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-50" cx="12" cy="12" r="10" stroke="#000" strokeWidth="4"></circle>
              <path className="opacity-100" fill="#000" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg> :
            <div className="flex gap-6">
              <div className="w-full">
                <div className="cars grid grid-cols-3 gap-1">
                {
                    searchResults.map((item, index) => (
                        <>
                        <div className="flex">
                            <a key={`${item.id}-${index}`} href={`/car?slug=${item.id}`} className="flex items-center border-b pb-1 rounded border-gray-400 w-full flex-col">
                                <div className="car-img h-full w-[auto] rounded-t">
                                  <img className="object-cover h-full max-w-full" src={item.img_url} alt="" />
                                </div>
                                <div className="flex flex-col p-4 mr-auto">
                                    {item.brand.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')+ " " + item.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " " + item.year}
                                    <span className="text-gray-600 text-[14px]">Estrellas - N° de reviews</span>
                                </div>
                            </a>
                        </div>
                        </>
                      ))
                                                             
                  }
                </div>
              </div>
            </div>
        )}
        </main>
        </>
    );
}