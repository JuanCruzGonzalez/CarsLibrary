"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./globals.css";

export default function Home() {
  const [carToSearch, setCarToSearch] = useState();
  return (
    <main className="bg-white text-black">
      <section className="welcome flex items-center justify-center h-lvh font-black">
        <h1 className="text-5xl w-100 text-center text-white">
          Welcome to CarsLibrary
        </h1>
      </section>
      <section className="users flex justify-around mt-20">
        <div className="cars-count flex flex-col cars-count">
          <span className="font-medium text-6xl pb-3">100</span>
          <hr className="w-100 bg-black h-px"/>
          <span className="w-60 pt-2">Cars models to look wich you like the most</span>
        </div>
        <div className="users-count flex flex-col">
          <span className="font-medium text-6xl pb-3">5k</span>
          <hr className="w-100 bg-black h-px"/>
          <span className="w-60 pt-2">Satisfy user with our car's information</span>
        </div>
        <div className="brands-count flex flex-col">
          <span className="font-medium text-6xl pb-3">+30</span>
          <hr className="w-100 bg-black h-px"/>
          <span className="w-60 pt-2">Brands available in our data base</span>
        </div>
      </section>
      <div className="serach-cars w-100 flex flex-col justify-center items-center h-fit pt-20">
        <h2 className="search-title text-3xl font-bold mb-20">Search your favorite car</h2>
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
      </div>
      <sections className="brands flex flex-col">
        <h2 className="brand-title text-3xl text-center mt-20 mb-20 font-bold">More searched brands</h2>
        <div className="searched-brands flex justify-center">
          <div className="img-searched-brands grid grid-cols-4 self-center gap-5">
          <Image className="img-searched-brand rounded-xl"
            src={'/R.jpeg'}
            width={300} height={300}
            >  
            </Image>
            <Image className="img-searched-brand rounded-xl"
            src={'/volkImg.jpg'}
            width={300} height={300}
            >  
            </Image>
            <Image className="img-searched-brand rounded-xl"
            src={'/AudiImg.jpeg'}
            width={300} height={300}
            >  
            </Image>
            <Image className="img-searched-brand rounded-xl"
            src={'/hondaImg.png'}
            width={300} height={300}
            >  
            </Image>
          </div>
        </div>
      </sections>
      <sections className="Sign flex flex-col text-center items-center">
        <h2 className="sign-title text-3xl text-center mt-40 font-bold">Sign up for New Arrivals</h2>
        <div className="rounded-xl mt-10 bg-slate-100">
          <form action="" className="form border rounded-xl bg-slate-100 p-5">
            <div className="flex gap-4">
              <input required="" className="input" type="text" name="name" id="name" placeholder="Name"/>
              <input required="" className="input" type="text" name="nickname" id="nickname" placeholder="Nickname"/>
            </div>
            <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
            <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
            <input className="login-button" type="submit" value="Sign up"/>
          </form>
        </div>        
      </sections>
    </main>
  );
}
