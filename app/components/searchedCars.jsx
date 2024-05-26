import { useEffect, useState } from "react";
import { fetchCarsFromDataBase } from "../actions";
import { CarCard } from "./carCard";

export function SearchedCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCarsFromDataBase()
            .then(res => {
                setCars(res.slice(0, 4)); // Tomar solo los primeros 4 autos
            })
            .catch(error => {
                console.error("Error al obtener los autos:", error);
            });
    }, []);

    return (
        <>
            <div className="cars grid gap-5 auto-rows-fr">
                {cars.map((car, index) => (
                    <CarCard key={`${car.id}-${index}`} car={car} />
                ))}
            </div>
        </>
    );
}
