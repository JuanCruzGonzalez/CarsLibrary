"use client";
import { SingupForm } from "./components/singUp";
import "./globals.css";
import { SearchInput } from "./components/searchInput";
import { AppStatics } from "./components/appSatics";
import { SearchedCars } from "./components/searchedCars";

export default function Home() {
  return (
    <main className="bg-white text-black relative">
      <section className="welcome flex flex-col items-center justify-center font-black">
        <h1 className="text-5xl w-100 text-center mb-8 mt-6">
          CarsLibrary
        </h1>
        <SearchInput/>
      </section>
      <section className="brands flex flex-col p-10">
        <h2 className="brand-title text-3xl text-center mt-20 mb-20 font-bold">
          New Arrivals
        </h2>
        <SearchedCars/>
      </section>
      <section className="users flex justify-around mt-20">
        <AppStatics num="100" text="Car's models to look witch you like the most"/>
        <AppStatics num="5k" text="Satisfy user with our car's information"/>
        <AppStatics num="+30" text="Car's brands"/>
      </section>
      <section className="Sign flex flex-col text-center items-center mt-10">
        <h2 className="sign-title text-3xl text-center mt-10 mb-10 font-bold">
          Sign up for New Arrivals
        </h2>
        <section className="sign-up-home">
          <SingupForm />
        </section>
      </section>
    </main>
  );
}
