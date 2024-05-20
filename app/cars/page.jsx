"use client"
import { useEffect, useState } from "react";
import { PageTitle } from "../components/pageTitle";
import "../globals.css";
import { fetchCarsFromDataBase } from "../actions";
import { CarCard } from "../components/carCard";
import { SearchInput } from "../components/searchInput";
import { Loading } from "../components/loadingCircle";
import FilteredList from "../components/filterList";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [carToSearch, setCarToSearch] = useState();
  const [sortedCars, setSortedCars] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
        try {
            const fetchedCars = await fetchCarsFromDataBase();
            setCars(fetchedCars);
            // También, al inicio, guardamos los coches sin ordenar
            setSortedCars(fetchedCars);
        } catch (error) {
            console.log(error);
        }
    }
    fetchCar();
  }, []);

  const handleOptionChange = (selectedOption) => {
    let sortedArray;
    switch(selectedOption) {
      case "A-Z":
        console.log("asd")
        sortedArray = cars.slice().sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "Z-A":
        sortedArray = cars.slice().sort((a, b) => b.brand.localeCompare(a.brand));
        break;
      case "Higest Price":
        sortedArray = cars.slice().sort((a, b) => b.price - a.price);
        break;
      case "Lowest Price":
        sortedArray = cars.slice().sort((a, b) => a.price - b.price);
        break;
      default:
        sortedArray = cars;
    }
    setSortedCars(sortedArray);
  };

  return (
    <main className="p-10">
        <PageTitle>Cars</PageTitle>
        <h2 className="text-xl font-bold mb-5 ml-1">Search car</h2>
        <div className="flex w-full justify-between items-center">
          <SearchInput/>
          <FilteredList onOptionChange={handleOptionChange}/>
        </div>
        {!sortedCars ? (
          <Loading/>
        ) : (
          sortedCars.length <= 0 ?
            <Loading/>         
            :
            <div className="flex gap-6 mt-10">
              <div className="w-full">
                <div className="cars  grid grid-cols-4 gap-5">
                {
                  sortedCars.map((item, index) => (
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
