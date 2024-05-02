"use client";
import { useEffect, useState } from "react";
import { PageTitle } from "../pageTitle";
import "../globals.css";
import { fetchCarsFromDataBase } from "../actions";
import { CarCard } from "../carCard";
import { SearchInput } from "../searchInput";
import { Loading } from "../loadingCircle";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [carToSearch, setCarToSearch] = useState();
  useEffect(() => {
    const fetchCar = async () => {
        try {
            const fetchedCars = await fetchCarsFromDataBase();
            setCars(fetchedCars);
        } catch (error) {
            console.log(error);
        }
    }
    fetchCar();
}, []);

return (
    <main className="p-10">
        <PageTitle>Cars</PageTitle>
        <h2 className="text-xl font-bold mb-5 ml-1">Search car</h2>
        <SearchInput/>
        {!cars ? (
          <Loading/>
        ) : (
          cars.length <= 0 ?
            <Loading/>         
            :
            <div className="flex gap-6 mt-10">
              <div className="w-full">
                <div className="cars  grid grid-cols-4 gap-5">
                {
                  cars.map((item, index) => (
                    <CarCard key={`${item.id}-${index}`} car={item} />
                  ))                              
                }
                </div>
              </div>
            </div>
        )}
    </main>
  );
}
