"use client"
import { useEffect, useState } from "react";
import { fetchCarBysearch } from "../actions";
import { getSlug } from "../actions";
import { Loading } from "../components/loadingCircle";
import { useSearchParams } from "next/router";

// Función asíncrona para obtener el valor de la búsqueda
async function fetchSearchValue() {
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get('slug');
    return search;
}

export default function Car() {
    const [car, setCar] = useState(null);
    const [search, setSearch] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para el indicador de carga

    useEffect(() => {
        // Llama a la función asíncrona para obtener el valor de búsqueda
        fetchSearchValue().then(searchValue => {
            setSearch(searchValue);
            setLoading(false); // Marca la carga como completa
        }).catch(error => {
            console.error(error);
            setLoading(false); // Marca la carga como completa incluso si hay un error
        });
    }, []); // Se ejecuta solo una vez al montar el componente

    useEffect(() => {
        // Verifica si hay un valor de búsqueda antes de hacer la solicitud de búsqueda
        if (search) {
            const fetchCar = async () => {
                try {
                    const fetchedCar = await fetchCarBysearch(search);
                    setCar(fetchedCar);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchCar();
        }
    }, [search]); // Se ejecuta cuando cambia el valor de búsqueda

    return (
        <main className="p-5">
            {/* Renderiza el indicador de carga si aún se está cargando el resultado de la búsqueda */}
            {loading ? (
                <Loading />
            ) : (
                // Renderiza los datos si están disponibles
                !car ? (
                    <Loading />
                ) : (
                    <div className="flex gap-6">
                        <div className="w-full">
                            <div className="">
                                <div className="car flex rounded">
                                    <div key={`${car.id}`} className="flex gap-2 full">
                                        <div className="info flex flex-col text-6xl p-4">
                                            <span className="border-b border-gray-400 w-full p-4">
                                                {car.brand.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " " + car.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                            </span>
                                            <div className="p-4 flex flex-col">
                                                <span className="text-gray-600 text-[14px] mb-6 mt-4">Estrellas - N° de reviews</span>
                                                <span className="text-gray-800 text-2xl mb-2">Year: {car.year}</span>
                                                <span className="text-gray-800 text-2xl mb-2">Price: {car.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="h-[80vh] w-[auto] ml-auto rounded-r" src={car.img_url} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </main>
    );
}
