"use client"

import { useEffect, useState, Suspense } from "react";
import { fetchCarsFromDataBase } from "../actions";
import { CarCard } from "../carCard";
import { GetSlug } from "../GetSlug";
import { PageTitle } from "../pageTitle";
import { SearchInput } from "../searchInput";
import { Loading } from "../loadingCircle";

async function fetchSearchValue() {
  const searchParams = new URLSearchParams(window.location.search);
  const search = searchParams.get('car');
  return search;
}

export default function Car(){
    const [cars, setCars] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(search)  // Obtén el valor directamente aquí
    useEffect(() => {
      // Llama a la función asíncrona para obtener el valor de búsqueda
      fetchSearchValue().then(searchValue => {
          console.log(searchValue)
          setSearch(searchValue);
          setLoading(false); // Marca la carga como completa
      }).catch(error => {
          console.error(error);
          setLoading(false); // Marca la carga como completa incluso si hay un error
      });
  }, []);
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
          if (exactMatch.length > 0){
            return [...exactMatch];
          }else{
            return [...exactMatch,...partialMatch];
          }
        };

        // Realiza la búsqueda híbrida
        const searchResults = hybridSearch(cars, search);
        setSearchResults(searchResults);
      }, [cars, search]);

    return (
        <>
        <main className="p-5">
            <PageTitle>Search</PageTitle>
            <Suspense>
              <GetSlug title="Car" searchSlug='car'/>
            </Suspense>
            <SearchInput/>
            {/* Renderiza los datos si están disponibles */}
        {loading ? (
            <>
            <Loading/>
            </>
        ) : (
          searchResults.length <= 0 ?
          <>
            <Loading/>
          </>
          :
            <div className="flex gap-6 mt-10">
              <div className="w-full">
                <div className="cars grid grid-cols-4 gap-1">
                {
                  searchResults.map((item, index) => (
                    <CarCard key={`${item.id}-${index}`} car={item} />
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