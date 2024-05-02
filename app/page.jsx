"use client";
import { SingupForm } from "./singUp";
import "./globals.css";
import { SearchInput } from "./searchInput";
import { AppStatics } from "./appSatics";
import { SearchedCars } from "./searchedCars";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="welcome flex flex-col items-center justify-center h-lvh font-black">
        <h1 className="text-5xl w-100 text-center text-white">
          Welcome to CarsLibrary
        </h1>
        <SearchInput/>
      </section>
      <section className="users flex justify-around mt-20">
        <AppStatics num="100" text="Car's models to look witch you like the most"/>
        <AppStatics num="5k" text="Satisfy user with our car's information"/>
        <AppStatics num="+30" text="Car's brands"/>
      </section>
      <sections className="brands flex flex-col p-10">
        <h2 className="brand-title text-3xl text-center mt-20 mb-20 font-bold">
          More searched cars
        </h2>
        <SearchedCars/>
      </sections>
      <sections className="Sign flex flex-col text-center items-center">
        <h2 className="sign-title text-3xl text-center mt-40 mb-10 font-bold">
          Sign up for New Arrivals
        </h2>
        <SingupForm />        
      </sections>
    </main>
  );
}
