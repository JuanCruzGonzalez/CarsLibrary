"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCarBysearch } from "../actions";

export default function Car(){
    const [cars, setCars] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const searchParams = useSearchParams();
    const search = searchParams.get('slug');

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const fetchedCars = await fetchCarBysearch(search);
                setCars(fetchedCars)
            } catch (error) {
                console.log(error)
            }
        }
        if (search) {
            fetchCar();
        }
    }, [search]);

    return (
        <>
        <main className="p-5">
            {/* Renderiza los datos si están disponibles */}
        {!cars ? (
            <svg className="animate-spin size-5 text-white block mx-auto mt-[100px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle className="opacity-50" cx="12" cy="12" r="10" stroke="#000" strokeWidth="4"></circle>
				<path className="opacity-100" fill="#000" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
        ) : (
          cars.length <= 0 ?
            <svg className="animate-spin size-5 text-white block mx-auto mt-[100px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-50" cx="12" cy="12" r="10" stroke="#000" strokeWidth="4"></circle>
                <path className="opacity-100" fill="#000" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg> :
            <div className="flex gap-6">
              <div className="w-full">
                <div className="">
                  {
                    <>
                      <div className="car flex rounded">
                           <div key={`${cars.id}`} className="flex gap-2 full">
                               <div className="info flex flex-col text-6xl p-4">
                                    <span className="border-b border-gray-400 w-full p-4">
                                        {cars.brand.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')+ " " + cars.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </span>
                                    <div className="p-4 flex flex-col">
                                    <span className="text-gray-600 text-[14px] mb-6 mt-4">Estrellas - N° de reviews</span>
                                    <span className="text-gray-800 text-2xl mb-2">Year: {cars.year}</span>
                                    <span className="text-gray-800 text-2xl mb-2">Price: {cars.price}</span>
                                   </div>
                               </div>
                            </div>
                             <img className="h-[80vh] w-[auto] ml-auto rounded-r" src={cars.img_url} alt="" />
                      </div>
                    </>
                  }
               </div>
              </div>
            </div>
        )}
        </main>
        </>
    );
}